import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { CreateEvent } from "./pages/create/CreateEvent.jsx";
import { JoinEvent } from "./pages/join/JoinEvent.jsx";
import { Profile } from "./pages/profile/Profile.jsx";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/join-event" element={<JoinEvent />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}
