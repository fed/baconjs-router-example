import React from 'react';
import Navigation from 'components/navigation';
import SearchForm from 'components/searchForm';
import styles from './styles.css';

const Heading = () => (
  <header>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>baconjs-router-example 💥</h1>
      <a className={styles.link} href="https://github.com/FoxSportsAustralia/baconjs-router" target="_blank" rel="noopener noreferrer">https://github.com/FoxSportsAustralia/baconjs-router</a>
    </div>

    <Navigation />
    <SearchForm />
  </header>
);

export default Heading;
