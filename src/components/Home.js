import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home({ onSearch }) {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  function checkInput(event) {
    setUsername(event.target.value);
  };

  function search() {
    if (username.length > 0) {
      onSearch(username);
      navigate(`/user/${username}`);
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
            placeholder="Type [/] to search"
            value={username}
            onChange={checkInput}
          />
          <button onClick={search}>Search</button>
        </div>
      </main>
    </div>
  );
};
