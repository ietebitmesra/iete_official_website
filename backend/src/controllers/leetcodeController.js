import fetch from "node-fetch";

const LEETCODE_GRAPHQL = "https://leetcode.com/graphql";

const buildQuery = () => `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
    userContestRanking(username: $username) {
      rating
    }
  }
`;

const extractSolved = (submitStats) => {
  const items = submitStats?.acSubmissionNum || [];
  if (!Array.isArray(items)) return 0;
  const allEntry = items.find((item) => item.difficulty === "All");
  if (allEntry?.count !== undefined) return allEntry.count;
  return items.reduce((sum, item) => sum + (item.count || 0), 0);
};

export const getLeetCodeStats = async (req, res) => {
  try {
    const { username } = req.params;
    if (!username) {
      return res.status(400).json({ success: false, message: "Username is required." });
    }

    const response = await fetch(LEETCODE_GRAPHQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: buildQuery(),
        variables: { username },
      }),
    });

    if (!response.ok) {
      return res.status(502).json({ success: false, message: "LeetCode request failed." });
    }

    const payload = await response.json();
    const matchedUser = payload?.data?.matchedUser;

    if (!matchedUser) {
      return res.status(404).json({ success: false, message: "LeetCode user not found." });
    }

    const solved = extractSolved(matchedUser?.submitStats);
    const rating = payload?.data?.userContestRanking?.rating || 0;

    return res.status(200).json({ success: true, solved, rating });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch LeetCode stats." });
  }
};
