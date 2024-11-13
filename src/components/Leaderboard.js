import React, { useEffect, useState } from "react";
import { fetchLeaderboard } from "./api/lichessApi";

function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const data = await fetchLeaderboard();
        setPlayers(data.players || []);
      } catch (err) {
        setError(err.message);
      }
    };
    loadLeaderboard();
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <p>{player.username}</p>
            <p>Title: {player.title || "N/A"}</p>
            <p>Blitz: {player.perfs?.blitz?.rating || "N/A"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
