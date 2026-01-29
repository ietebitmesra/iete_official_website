import User from "../models/User.js";

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user?._id || req.user?.id;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized." });
    }

    const allowedFields = [
      "bio",
      "branch",
      "batchYear",
      "portfolioUrl",
      "githubUsername",
      "linkedinUrl",
      "leetCodeUsername",
      "codeforcesHandle",
      "skills",
      "leetCodeSolved",
      "leetCodeContestRating",
      "codeforcesRating",
    ];

    const updates = {};
    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    if (updates.skills && typeof updates.skills === "string") {
      updates.skills = updates.skills
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    Object.entries(updates).forEach(([key, value]) => {
      user[key] = value;
    });

    if (Object.keys(updates).length) {
      user.profileSetup = true;
    }

    await user.save();

    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to update profile." });
  }
};
