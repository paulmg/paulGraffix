import React, { PropTypes } from 'react';

import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import styles from './Footer.css';

@withViewport
@withStyles(styles)
class Footer {
  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    // This is just an example how one can render CSS
    let { width, height } = this.props.viewport;
    this.renderCss(`.Footer-viewport:after {content:' ${width}x${height}';}`);

    return (
      <footer className="Footer">
        <div className="Footer-container">
          <span className="Footer-text">© paulGraffix</span>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="/" onClick={Link.handleClick}>Home</a>
          <span className="Footer-spacer">·</span>
          <span ref="viewport" className="Footer-viewport Footer-text Footer-text--muted">Viewport:</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
