import React, { PropTypes } from 'react';

import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import {ANIM_TIME} from '../../config';
import Link from '../Link';

import styles from './Footer.css';

@withViewport
@withStyles(styles) class Footer extends React.Component {
  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  handleClick(event) {
    TweenLite.to(window, ANIM_TIME, {
      scrollTo: {
        y: 0
      },
      ease: Power2.easeOut
    });
  }

  render() {
    // This is just an example how one can render CSS
    let { width, height } = this.props.viewport;
    this.renderCss(`.Footer-viewport:after {content:'${width}x${height}';}`);

    return (
      <footer className="Footer">
        <div className="Footer-container row">
          <div className="columns">
            <div className="small-8 columns">
              <span className="Footer-text">© 2015 paulGraffix</span>
              <span className="Footer-spacer">· </span>
              <span ref="viewport" className="Footer-viewport"></span>px
            </div>
            <div className="small-4 columns text-right">
              <a className="Footer-link text-link text-link-icon" data-target="info" onClick={this.handleClick.bind(this)}>Back to Top<span className="icon-arrow arrow-up"><img
                src={require('./svg/up.svg')} /></span></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
