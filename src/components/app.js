import React from 'react';
import Heading from 'components/heading';
import 'styles/main.css';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <Heading />

        {this.props.children}
      </section>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};
