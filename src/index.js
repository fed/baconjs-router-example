import React from 'react';
import ReactDOM from 'react-dom';
import Bacon from 'baconjs';
import Router from 'baconjs-router';
import App from 'components/app';
import About from 'components/about';
import UserDetails from 'components/userDetails';
import NotFound from 'components/notFound';
import {baseUrl, path} from 'utils/constants';

const router = Router(
  baseUrl,
  path,

  // Home page
  '/', () => Bacon.later(0, <p>Hey there!</p>),

  // Match string
  '/about', () => Bacon.later(0, <About />),

  // Match route `user` followed by a number of characters
  /user\/(\w+)/, (username) => Bacon.later(0, <UserDetails username={username} />),

  // Any other pattern match...
  // If we don't catch our 404s, we won't hear it on a stream.
  /./, () => Bacon.later(0, <NotFound />)
);

router.onValue((component) => {
  ReactDOM.render(
    <App>{component}</App>,
    document.querySelector('#app')
  );
});
