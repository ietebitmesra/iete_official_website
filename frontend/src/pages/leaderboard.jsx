import React, { useEffect, useState } from "react";
import { apiGet } from "../lib/api";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await apiGet("/leaderboard");
        setLeaderboardData(data.leaderboard || []);
      } catch (err) {
        setError(err.message || "Failed to fetch leaderboard");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) return <div className="max-w-6xl mx-auto px-6 py-12 text-center">Loading leaderboard...</div>;
  if (error) return <div className="max-w-6xl mx-auto px-6 py-12 text-center text-red-500">{error}</div>;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <header className="flex flex-col gap-3">
        <p className="text-sm text-white/55 uppercase tracking-wider">Leaderboard</p>
        <h1 className="text-4xl font-bold">Top Contributors</h1>
        <p className="text-white/55">Rankings based on GitHub contributions, Codeforces rating, and projects.</p>
      </header>

      <div className="overflow-x-auto rounded-lg border border-white/8">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/8 bg-white/3">
              <th className="px-6 py-4 text-left text-sm font-semibold text-white/55">#</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white/55">Name</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-white/55 hidden md:table-cell">
                <span title="GitHub Contributions">🐙 GitHub</span>
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-white/55 hidden lg:table-cell">
                <span title="Codeforces Rating">⚡ CF</span>
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-white/55 hidden md:table-cell">Projects</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-white/55">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => {
              const rank = index + 1;
              const isTopThree = rank <= 3;
              const badgeColor =
                rank === 1 ? "bg-yellow-500/20 text-yellow-300" :
                rank === 2 ? "bg-gray-400/20 text-gray-300" :
                rank === 3 ? "bg-orange-600/20 text-orange-300" :
                "bg-white/5 text-white/55";

              return (
                <tr
                  key={entry._id}
                  className={`border-b border-white/8 transition hover:bg-white/5 ${
                    isTopThree ? "bg-white/3" : ""
                  }`}
                >
                  <td className={`px-6 py-4 font-semibold text-sm ${badgeColor}`}>
                    {rank <= 3 && "⭐"} #{rank}
                  </td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {entry.name?.charAt(0).toUpperCase() || "?"}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{entry.name}</p>
                      <p className="text-xs text-white/40">{entry.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-white/75 hidden md:table-cell">
                    {entry.githubContributions}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-white/75 hidden lg:table-cell">
                    {entry.codeforcesRating}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-white/75 hidden md:table-cell">
                    {entry.projectsCount}
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-sm text-purple-300">
                    {(entry.leaderboardScore ?? 0).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {leaderboardData.length === 0 && (
        <div className="text-center py-12 text-white/55">
          No entries yet. Start contributing to appear on the leaderboard!
        </div>
      )}
    </section>
  );
};

export default Leaderboard;
