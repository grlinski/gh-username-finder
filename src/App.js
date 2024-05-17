import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  function search(username){
    window.location.href = `gh-username-finder/user/${username}`;
  };

  return (

      <div className="App">
        <AnimatePresence mode="wait">
          <Routes basename="/">
            <Route exact path="/" element={<Home onSearch={search} />} />
            <Route exact path="/user/:username" element={<User />} />
          </Routes>
        </AnimatePresence>
      </div>

  );
}
