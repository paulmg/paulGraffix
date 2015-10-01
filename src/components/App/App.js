import React, { PropTypes } from 'react';
import smoothScroll from 'smooth-scroll';

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

  componentDidMount() {
    smoothScroll.init({
      easing: 'easeInOutQuad',
      speed: 300,
      offset: -50
    });
  }

  componentWillUnmount() {
    smoothScroll.destroy();
  }

  render() {
    return !this.props.error ? (
      <div>
        <Header />

        {this.props.children}

        <div className="overlay"></div>

        <Portfolio />

        <Contact />

        <div className="row"><div className="columns"><div className="columns"><div className="columns divider"></div></div></div></div>

        <Footer />
      </div>
    ) : this.props.children;
  }
}

export default App;
