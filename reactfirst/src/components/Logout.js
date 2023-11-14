// Logout.js
import React from 'react';
import { useAuth } from "../context/AuthContext"

function Logout() {
  const { logout } = useAuth();

  // Simulate logout logic (you should replace this with your actual logout logic)
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
