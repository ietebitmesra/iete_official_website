import User from "../models/User.js";

export const getLeaderboard = async (req, res) => {
  try {
    // TODO: aggregation strategy
    // TODO: normalization logic
    // TODO: different weight configs
    // TODO: caching support (Redis future)
    const leaderboard = await User.find({})
      .select("name avatar githubContributions codeforcesRating projectsCount leaderboardScore")
      .sort({ leaderboardScore: -1 });

    return res.status(200).json({ success: true, leaderboard });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch leaderboard." });
  }
};

export const updateLeaderboardScores = async (req, res) => {
  try {
    // TODO: admin role check
    // TODO: normalization logic
    // TODO: different weight configs
    const users = await User.find({}).select(
      "githubContributions codeforcesRating projectsCount leaderboardScore"
    );

    await Promise.all(
      users.map(async (user) => {
        const githubContributions = user.githubContributions || 0;
        const codeforcesRating = user.codeforcesRating || 0;
        const projectsCount = user.projectsCount || 0;

        user.leaderboardScore =
          githubContributions * 0.4 + codeforcesRating * 0.4 + projectsCount * 0.2;
        await user.save();
      })
    );

    return res.status(200).json({ success: true, updated: users.length });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to update leaderboard." });
  }
};

// Backward-compatible export for existing routes
export const updateLeaderboard = updateLeaderboardScores;
