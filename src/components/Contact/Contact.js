import React, { PropTypes } from 'react';

import withStyles from '../../decorators/withStyles';

import styles from './Contact.css';

@withStyles(styles) class Contact extends React.Component {
  static contextTypes = {};

  render() {
    return (
      <section id="contact" className="Contact">
        <div className="Contact-container row">
          <div className="columns">
            <div className="Contact-leftSection small-12 medium-6 columns">
              <h2>Contact Me</h2>
              <a className="text-link text-link-icon" target="_blank" href="mailto:paulgraffix@gmail.com"><span
                className="icon-social"><img src={require('./svg/email.svg')} /></span>paulgraffix@gmail.com</a>
            </div>
            
            <div className="Contact-rightSection small-12 medium-6 columns">
              <h2>Connect</h2>
              <a href="https://github.com/paulmg/" target="_blank" className="text-link text-link-icon"><span
                className="icon-social"><img src={require('./svg/github.svg')} /></span>Github</a>
              <a href="http://stackoverflow.com/users/803841/paul-graffam" target="_blank"
                 className="text-link text-link-icon"><span className="icon-social"><img src={require('./svg/stackoverflow.svg')} /></span>StackOverflow</a>
              <a href="http://www.linkedin.com/pub/paul-graffam/38/983/16a" target="_blank"
                 className="text-link text-link-icon"><span className="icon-social"><img src={require('./svg/linkedin.svg')} /></span>LinkedIn</a>
              <a href="https://secure.flickr.com/photos/paulmgr/" target="_blank" className="text-link text-link-icon"><span
                className="icon-social"><img src={require('./svg/flickr.svg')} /></span>Flickr</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
