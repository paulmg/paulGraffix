import React, { PropTypes } from 'react';

import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';

import styles from './App.css';
import Header from '../Header';
import Footer from '../Footer';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

@withContext
@withStyles(styles) class App extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object
  };

  render() {
    return !this.props.error ? (
      <div>
        <Header />
        {this.props.children}
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    ) : this.props.children;
  }
}

export default App;
