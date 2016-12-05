import React from 'react';
import axios from 'axios';
import get from 'lodash/get';
import Spinner from 'components/spinner';
import {GITHUB_API_ROOT_URL} from 'utils/constants';
import styles from './styles.css';

export default class UserDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      userDetails: {}
    };
  }

  componentWillMount() {
    const username = this.props.username;

    this.fetchUserDetails(username);
  }

  componentWillReceiveProps(nextProps) {
    const username = nextProps.username;

    this.fetchUserDetails(username);
  }

  fetchUserDetails(username) {
    const url = `${GITHUB_API_ROOT_URL}/${username}`;

    this.showSpinner();

    axios
      .get(url)
      .then((response) => this.setState(
        { userDetails: response.data },
        this.hideSpinner
      ))
      .catch(() => this.setState(
        { userDetails: false },
        this.hideSpinner
      ));
  }

  showSpinner() {
    this.setState({
      loading: true
    });
  }

  hideSpinner() {
    this.setState({
      loading: false
    });
  }

  render() {
    const {username} = this.props;
    const avatar = get(this.state, 'userDetails.avatar_url');
    const email = get(this.state, 'userDetails.email');
    const location = get(this.state, 'userDetails.location') || '-';
    const type = get(this.state, 'userDetails.type');
    const url = get(this.state, 'userDetails.html_url');
    const repos = get(this.state, 'userDetails.public_repos');

    return (
      <section>
        {
          !this.state.userDetails && (
            <p className={styles.error}>User {username} doesn't exist, moving on...</p>
          )
        }

        {
          this.state.userDetails && (
            <article>
              <h2>GitHub Profile for <span className={styles.username}>{username}</span></h2>

              <p><img src={avatar} alt={username} className={styles.avatar} /></p>

              <ul>
                <li><strong>Link to Profile on GitHub:</strong> <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
                <li><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></li>
                <li><strong>Location:</strong> {location}</li>
                <li><strong>Type:</strong> {type}</li>
                <li><strong>Number of Public Repositories:</strong> {repos}</li>
              </ul>
            </article>
          )
        }

        <Spinner isVisible={this.state.loading} />
      </section>
    );
  }
}

UserDetails.propTypes = {
  username: React.PropTypes.string
};
