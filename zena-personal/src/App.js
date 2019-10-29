import React, { useState } from 'react';
import Form from './components/Form'
import Display from './components/Display';

const App = () => {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([])

  const handleChange = e => {
    setUsername(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}/events`)
      .then(res => res.status === 200 ? res.json() : setRepos(false))
      .then(data => setRepos(data))
  }

  if (!repos) {
    return (
      <div>
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          username={username}
        />     
        </div>
    )
  }
  return (
    <div>
      <Form 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        username={username}
      />      
      <Display 
        title={"Forked repos"}
        repoTitle={'something'}
        repoDescription={'here'}
        repos={repos}
        
        />
      {/* <Display /> */}
    </div>
  );
}

export default App;
