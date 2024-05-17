import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const navigate = useNavigate();

  function search(username) {
    navigate(`/gh-username-finder/user/${username}`);
  };

  return (
    <div className="App">
      <AnimatePresence>
        <Routes>
          <Route exact path="/" element={<Home onSearch={search} />} />
          <Route exact path="/user/:username" element={<User />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
