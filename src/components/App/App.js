import React, { PropTypes } from 'react';

import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import {whichTransitionEvent} from '../../utils/DOMUtils.js';

import Header from '../Header';
import Footer from '../Footer';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

import styles from './App.css';

@withContext
@withStyles(styles) class App extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object
  };

  componentDidMount() {
    let overlay = this.refs.overlay;
    overlay.classList.remove('overlay--show');

    let transitionEvent = whichTransitionEvent(overlay);

    if(transitionEvent) {
      overlay.addEventListener(transitionEvent, this.listenerDone.bind(this));
    }
  }

  componentWillUnmount() {

  }

  listenerDone() {
    this.refs.overlay.classList.add('overlay--hidden');
  }

  render() {
    return !this.props.error ? (
      <div>
        <Header />

        {this.props.children}

        <div className="overlay overlay--show" ref="overlay"></div>

        <Portfolio />

        <Contact />

        <div className="row"><div className="columns"><div className="columns"><div className="columns divider"></div></div></div></div>

        <Footer />
      </div>
    ) : this.props.children;
  }
}

export default App;
