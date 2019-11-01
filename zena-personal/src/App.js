import React, { useState } from "react";
import Form from "./components/Form";
import DisplayList from "./components/DisplayList";
// import BackButton from './components/BackButton';
// import ".App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [isLoaded, setLoading] = useState(false);

  const handleChange = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch(`https://api.github.com/users/${username}/events`)
      .then(res => (res.status === 200 ? res.json() : setLoading(false)))
      .then(data => {
        setRepos(data);
        setLoading(true);
      })
      .catch(err => console.log(err.message));
  };

  // const handleNewSearch = (e) => {
  //   setUsername('');
  //   setRepos(false);
  // }

  if (!isLoaded) {
    return (
      <div className="wrapper">
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          username={username}
        />
      </div>
    );
  } else {
    const forkedRepos = repos
      .filter(repo => repo.type === "ForkEvent")
      .map(repo => {
        return {
          id: repo.id,
          repoTitle: repo.payload.forkee.full_name,
          repoDescription: repo.repo.name,
          url: repo.payload.forkee.html_url
        };
      });

    const pullRequests = repos
      .filter(repo => repo.type === "PullRequestEvent")
      .map(repo => {
        return {
          id: repo.id,
          repoTitle: repo.payload.pull_request.title,
          repoDescription: repo.payload.pull_request.state,
          url: repo.payload.pull_request.html_url
        };
      });

    return (
      <div className="wrapper">
        <DisplayList title={"Recent Forks"} repos={forkedRepos} />
        <DisplayList title={"Recent Pull Requests"} repos={pullRequests} />
        {/* <BackButton handleNewSearch={handleNewSearch} /> */}
      </div>
    );
  }
};

export default App;
