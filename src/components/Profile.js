import React, { useState } from "react";
import { fetchUserProfile } from "./api/lichessApi";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  padding: 2em;
`;

function Profile() {
  const [username, setUsername] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError("");
      const data = await fetchUserProfile(username);
      setProfileData(data);
    } catch (err) {
      setError(err.message);
      setProfileData(null);
    }
  };

  return (
    <ProfileWrapper>
      <h1>User Profile</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {profileData && (
        <div>
          <h2>{profileData.username}</h2>
          <p>{profileData.bio || "No bio available"}</p>
          <p>Games Played: {profileData.count.all}</p>
          <p>Blitz: {profileData.perfs.blitz.rating || "N/A"}</p>
        </div>
      )}
    </ProfileWrapper>
  );
}

export default Profile;
