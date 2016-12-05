import React from 'react';
import {getBaconRouterHistoryBus} from 'baconjs-router';
import {baseUrl} from 'utils/constants';
import styles from './styles.css';

export default class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: ''
    };
  }

  _handleKeyDown(event) {
    if (event.keyCode === 13) {
      this._handleSubmit();
    }
  }

  _handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  _handleSubmit() {
    const {username} = this.state;

    this.setState({
      username: ''
    });

    getBaconRouterHistoryBus()
      .push({
        location: `${baseUrl}/user/${username}`
      });
  }

  render() {
    return (
      <label className={styles.wrapper}>
        Write a GitHub username and hit Enter:

        <input
          type="text"
          className={styles.input}
          value={this.state.username}
          onKeyDown={this._handleKeyDown.bind(this)}
          onChange={this._handleChange.bind(this)} />
      </label>
    );
  }
}
