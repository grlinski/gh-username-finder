import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';


export default function Home({ onSearch }) {
  const [username, setUsername] = useState('');

  function checkInput(event){
    setUsername(event.target.value);
  };

  function search(){
    if(username.length > 0){
      onSearch(username);
    }
  };

  return (
    <div>
      <h1 className='header'>GitHub Username Finder</h1>
      <main>
        <div className='search-items'>
          <input
            className='search-bar'
            type="text"
            placeholder= "Type [/] to search"
            value={username}
            onChange={checkInput}
          ></input>
          <button onClick={search}>Search</button>
        </div>
      </main>
    </div>
  );
};
