import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import { AnimatePresence } from 'framer-motion';
import { HashRouter } from "react-router-dom";


export default function App() {
  function search(username){
    if (window.location.href.includes('gh-username-finder')){
      console.log(window.location.href)
      window.location.href = `gh-username-finder/user/${username}`;
    }

    else {
      window.location.href = `/user/${username}`;
    }
    
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
