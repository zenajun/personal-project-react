export const getPullRequestData = repos => {
  return (
    repos
      // filter for Pull Request Events
      .filter(repo => repo.type === "PullRequestEvent")
      // remove duplicate pull requests by id (one will be open one will be closed)
      // return the more recent repo (ie. closed repo)
      .filter((repo, idx, og) => {
        const id = repo.payload.pull_request.id;
        return og.findIndex(el => el.payload.pull_request.id === id) === idx;
      })
      // return only what we need from the object

      .map(repo => {
        return {
          id: repo.id,
          repoTitle: repo.payload.pull_request.title,
          repoDescription: repo.payload.pull_request.state,
          url: repo.payload.pull_request.html_url
        };
      })
  );
};

export const getForkedRepoData = repos => {
  return (
    repos
      // filter for fork events
      .filter(repo => repo.type === "ForkEvent")
      // return only what we need from the object
      .map(repo => {
        return {
          id: repo.id,
          repoTitle: repo.payload.forkee.full_name,
          repoDescription: repo.repo.name,
          url: repo.payload.forkee.html_url
        };
      })
  );
};
