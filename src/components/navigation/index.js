import React from 'react';
import {getBaconRouterHistoryBus} from 'baconjs-router';
import {baseUrl} from 'utils/constants';
import styles from './styles.css';

function handleClick(location, event) {
  event.preventDefault();

  console.log(`Pushing location path as ${location}`);

  getBaconRouterHistoryBus()
    .push({
      location: baseUrl + location,
      title: `Example: ${location}` // tab title
    });
}

const Navigation = () => (
  <nav className={styles.wrapper}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <a href="#" className={styles.link} onClick={(event) => handleClick('/', event)}>Home</a>
      </li>
      <li className={styles.item}>
        <a href="#" className={styles.link} onClick={(event) => handleClick('/about', event)}>About</a>
      </li>
      <li className={styles.item}>
        <a href="#" className={styles.link} onClick={(event) => handleClick('/user/FoxSportsAustralia', event)}>User Details</a>
      </li>
      <li className={styles.item}>
        <a href="#" className={styles.link} onClick={(event) => handleClick('/not-found', event)}>404</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
