const API_BASE = "https://lichess.org/api";

export const fetchUserProfile = async (username) => {
  const response = await fetch(`${API_BASE}/user/${username}`);
  if (!response.ok) throw new Error("User not found");
  return response.json();
};

export const fetchLeaderboard = async () => {
  const response = await fetch(`${API_BASE}/player`);
  if (!response.ok) throw new Error("Failed to fetch leaderboard");
  return response.json();
};

export const fetchTournaments = async () => {
  const response = await fetch(`${API_BASE}/tournament`);
  if (!response.ok) throw new Error("Failed to fetch tournaments");
  return response.json();
};
