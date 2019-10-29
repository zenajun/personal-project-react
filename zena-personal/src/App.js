import React, { useState } from 'react';
import Form from './components/Form'
import Display from './components/Display';
import BackButton from './components/BackButton';

const App = () => {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState(false)

  const handleChange = e => {
    setUsername(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}/events`)
      .then(res => res.status === 200 ? res.json() : setRepos(false))
      .then(data => setRepos(data))
  }
  
  const handleNewSearch = (e) => {
    setUsername('');
    setRepos(false);
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
  const forkedRepos = repos
    .filter(repo => repo.type === 'ForkEvent')
    .map(repo => {
      return {
        id: repo.id,
        repoTitle: repo.payload.forkee.full_name, repoDescription: repo.repo.name
      }
    });

  const pullRequests = repos
    .filter(repo => repo.type === 'PullRequestEvent')
    .map(repo => {
      return {
        id: repo.id,
        repoTitle: repo.payload.pull_request.title,
        repoDescription: repo.payload.pull_request.state
      }
    });
        
  return (
    <div>
      <Display title={"Recent Forks"} repos={forkedRepos} />
      <Display title={"Recent Pull Requests"} repos={pullRequests} />
      <BackButton handleNewSearch={handleNewSearch} />
    </div>
  );
}

export default App;

