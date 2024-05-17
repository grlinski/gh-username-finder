import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faUserGroup, faLocationDot, faCircle, faStar, faCodeCompare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';


export default function User() {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);
  const { username } = useParams();
  const TOKEN = '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';
  const userPageLink = (`https://github.com/${username}`)

  useEffect(() => {
    async function getUser() {
      try {
        const userResponse = await axios.get(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: TOKEN
          }
        });
        setUser(userResponse.data);
        
        const reposResponse = await axios.get(userResponse.data.repos_url, {
          headers: {
            Authorization: TOKEN
          }
        });
        setRepos(reposResponse.data);
      } catch (error) {
        console.error('Error, username not found', error);
      }
    };

      getUser();
    }, [username]);

  
  function formatDate(currentDate){
    let date = new Date(currentDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <div>
        {user ? (
          <div>
            {console.log('user', user)}
            <div className='header'>
              <div className='container header-items'>
                <button className='home-btn'><Link to="/">Home</Link></button>
                <a href={userPageLink}><h1 className='user-title'>Username: {user.login}</h1></a>
                <div className='header-modal'></div>
              </div>
            </div>
            <div className='container'>
              <div className='user-info'>
                <img className='user-pic' src={user.avatar_url} alt="" />
                <h2 className='user-name'>{user.name}</h2>
                <p className='user-username'>{user.login}</p>
                <p className='user-bio'>{user.bio}</p>
                <p>
                  <Fa className='followers' icon={faUserGroup} />  
                  <span className='bold'>{user.followers}</span> followers 
                  <Fa className='dot' icon={faCircle} /> 
                  <span className='bold'>{user.following}</span> following
                </p>
                {user.location && <p><Fa className='location-dot' icon={faLocationDot} /> {user.location}</p>}
                {user.email && <p><Fa className='envelope' icon={faEnvelope} /> {user.email}</p>}
              </div>
              <div className='repos'>
                <h2 className='repo-title'>Repositories</h2>
                <ul>
                  {repos.map(repo => (
                    <li key={repo.id}>
                      <div className='repo-box'>
                        <div className='repo-section'>
                          <h2 className='repo-name'><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></h2>
                          <div className='repo-private'>{repo.private ?  'Private' : 'Public'} </div>
                        </div>
                        <p className='repo-description'>{repo.description}</p>
                        <div>
                          {repo.topics && repo.topics.length > 0 && (
                            <div className='repo-section'>
                              {repo.topics.map((topic, index) => (
                                <div key={index} className='repo-topics'>
                                  {topic}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className='repo-section'>
                          {repo.language && <Fa className='repo-icon' icon={faCircle} />}
                          {repo.language &&  <p>{repo.language}</p>}
                          <Fa className='repo-icon' icon={faStar} /> 
                          <p>{repo.stargazers_count}</p>
                          <Fa className='repo-icon' icon={faCodeCompare} /> 
                          <p>{repo.forks_count}</p>
                          <p>Updated on {formatDate(repo.updated_at)}</p>
                        </div>
                        {console.log(repo)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className='header'>
              <div className='container header-items'>
                <button className='home-btn'><Link to="/">Home</Link></button>
                <a href={userPageLink}><h1 className='user-title'>Username: Not Found</h1></a>
                <div className='header-modal'></div>
              </div>
            </div>
            <main className='not-found-pic'></main>
          </div>
        )}
      </div>
    </motion.div>
  );
}




/*

useEffect works when there is a change in the username input
headers in an object which includes authorization





*/