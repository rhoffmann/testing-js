import React from 'react';
import Repo from './repo';

import { reposForUser } from '../api/repos';

export default class RepositoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { repos: [] };
  }

  componentDidMount() {
    reposForUser(this.props.username).then(repos => {
      this.setState({repos: repos});
    });
  }

  render() {
    var reposListItems = this.state.repos.map(repo => {
      return <li key={repo.id}><Repo raw={repo} /></li>;
    });

    return (
      <div>
        <h2>Repositories for {this.props.username}</h2>
        <ul>
          {reposListItems}
        </ul>
      </div>
    );
  }

}
