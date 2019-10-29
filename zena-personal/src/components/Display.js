import React from 'react';

const Display = ({repos, event}) => {

  
    
      return (
     <div>
       <h2>Recent Forks</h2>
       <ul>

      {repos.filter(repo => repo.type === 'ForkEvent').map(repo => <li key={repo.id}><div>{repo.payload.forkee.full_name}</div><div><p>Forked from: <a href={repo.repo.url}>{repo.repo.name}</a></p></div></li>)}
       </ul>
       <h2>Recent Pull Requests</h2>
       <ul>
            {repos.filter(repo => repo.type === 'PullRequestEvent').map(repo => <li key={repo.id}><div>{repo.payload.forkee.full_name}</div><div><p>Forked from: <a href={repo.repo.url}>{repo.repo.name}</a></p></div></li>)}

       </ul>
    </div>
  )

}

export default Display;