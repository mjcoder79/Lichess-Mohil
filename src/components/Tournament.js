import React, { useEffect, useState } from "react";
import { fetchTournaments } from "./api/lichessApi";

function Tournament() {
  const [tournaments, setTournaments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTournaments = async () => {
      try {
        const data = await fetchTournaments();
        setTournaments(data || []);
      } catch (err) {
        setError(err.message);
      }
    };
    loadTournaments();
  }, []);

  return (
    <div>
      <h1>Tournaments</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {tournaments.map((tournament) => (
          <li key={tournament.id}>
            <p>{tournament.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tournament;
