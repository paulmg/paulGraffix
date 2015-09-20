import React, { PropTypes } from 'react';

import withStyles from '../../decorators/withStyles';

import styles from './Contact.css';

@withStyles(styles) class Contact {
  static contextTypes = {};

  render() {
    return (
      <section id="contact" className="Contact">
        <div className="Contact-container row">
          <h1>Contact Me</h1>

          <div className="small-12 columns">
            <p>...</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
