const leaderboard = {
  categories: ["Coding", "Development", "Research", "Embedded"],
  highlights: [
    { title: "Rising Star", name: "Saanvi", metric: "+420 CF rating this month" },
    { title: "Most Active", name: "Kabir", metric: "58 GitHub commits" },
    { title: "Hardware Hero", name: "Alok", metric: "3 embedded builds shipped" },
  ],
  entries: [
    { name: "Saanvi", category: "Coding", metric: "Codeforces 1520", points: 92 },
    { name: "Kabir", category: "Development", metric: "12 PRs merged", points: 88 },
    { name: "Alok", category: "Embedded", metric: "CAN bus logger", points: 84 },
    { name: "Meera", category: "Research", metric: "1 IEEE paper", points: 80 },
  ],
};

export default leaderboard;
