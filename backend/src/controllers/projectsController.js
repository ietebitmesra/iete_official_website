import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    // TODO: Add pagination for projects list.
    // TODO: Add filtering by technology/category/year.
    const projects = await Project.find({ status: "approved" })
      .populate("owner", "name email avatar")
      .sort({ createdAt: -1 });

    return res.status(200).json({ success: true, projects });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch projects." });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate(
      "owner",
      "name email avatar"
    );

    if (!project || project.status !== "approved") {
      return res.status(404).json({ success: false, message: "Project not found." });
    }

    return res.status(200).json({ success: true, project });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch project." });
  }
};

export const createProject = async (req, res) => {
  try {
    const { title, description, technologies, githubUrl, liveUrl } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ success: false, message: "Title and description are required." });
    }

    const project = await Project.create({
      title,
      description,
      techStack: Array.isArray(technologies) ? technologies : [],
      repoUrl: githubUrl,
      demoUrl: liveUrl,
      owner: req.user._id,
      status: "pending",
    });

    return res.status(201).json({ success: true, project });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to submit project." });
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found." });
    }

    if (project.owner?.toString() !== req.user._id) {
      return res.status(403).json({ success: false, message: "Not allowed to update this project." });
    }

    const { title, description, technologies, githubUrl, liveUrl } = req.body;

    if (title !== undefined) project.title = title;
    if (description !== undefined) project.description = description;
    if (technologies !== undefined) {
      project.techStack = Array.isArray(technologies) ? technologies : [];
    }
    if (githubUrl !== undefined) project.repoUrl = githubUrl;
    if (liveUrl !== undefined) project.demoUrl = liveUrl;

    await project.save();

    return res.status(200).json({ success: true, project });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to update project." });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found." });
    }

    await project.deleteOne();
    return res.status(200).json({ success: true, project });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to delete project." });
  }
};

export const submitProjectForApproval = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found." });
    }

    if (project.owner?.toString() !== req.user._id) {
      return res.status(403).json({ success: false, message: "Not allowed to submit this project." });
    }

    project.status = "pending";
    await project.save();

    return res.status(200).json({ success: true, project });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to submit project." });
  }
};

export const getUserProjects = async (req, res) => {
  try {
    // TODO: Add pagination for user projects list.
    // TODO: Add filtering by approval status.
    const projects = await Project.find({ owner: req.user._id }).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, projects });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch user projects." });
  }
};

export const approveProject = async (req, res) => {
  try {
    if (req.user?.role !== "admin") {
      return res.status(403).json({ success: false, message: "Admin access required." });
    }

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found." });
    }

    project.status = "approved";
    await project.save();

    return res.status(200).json({ success: true, project });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to approve project." });
  }
};
