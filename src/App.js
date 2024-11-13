import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";
import Tournament from './components/Tournament';
import LichessApi from './api/LichessApi';  // Make sure the relative path is correct
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <nav style={{ padding: "1em", background: "#333", color: "white" }}>
          <Link to="/profile" style={{ margin: "0 1em" }}>Profile</Link>
          <Link to="/leaderboards" style={{ margin: "0 1em" }}>Leaderboards</Link>
          <Link to="/tournaments" style={{ margin: "0 1em" }}>Tournaments</Link>
        </nav>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboards" element={<Leaderboard />} />
          <Route path="/tournaments" element={<Tournament />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
