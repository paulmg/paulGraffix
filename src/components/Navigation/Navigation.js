import React, { PropTypes } from 'react';
import classNames from 'classnames';

import withStyles from '../../decorators/withStyles';
import {ANIM_TIME} from '../../config';
import Link from '../Link';

import styles from './Navigation.css';

@withStyles(styles) class Navigation extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  toggleMobileMenu() {
    this.refs.navigationMobileIcon.classList.toggle('Navigation-mobileIcon--clicked');

    let dropDownMenu = this.refs.dropDownMenu;
    dropDownMenu.classList.toggle('Navigation-mobile-list--reveal');
  }

  handleClick(event) {
    this.toggleMobileMenu();

    TweenLite.to(window, ANIM_TIME, {
      scrollTo: {
        y: Math.abs(document.body.getBoundingClientRect().top - document.querySelector('#' + event.target.getAttribute('data-target')).getBoundingClientRect().top),
        onComplete: () => {
          document.querySelector('header').classList.remove('Header--down');
        }
      },
      ease: Power2.easeOut
    });
  }

  render() {
    return (
      <nav className={classNames(this.props.className, 'Navigation')} role="navigation">
        <div className="Navigation-mobile hide-for-medium-up text-right">
          <a className="Navigation-mobileIcon" onClick={this.toggleMobileMenu.bind(this)} ref="navigationMobileIcon">

          </a>
          <div className="Navigation-mobile-list" ref="dropDownMenu">
            <a className="Navigation-link text-link" data-target="skills" onClick={this.handleClick.bind(this)}>Skills</a>
            <a className="Navigation-link text-link" data-target="portfolio" onClick={this.handleClick.bind(this)}>Portfolio</a>
            <a className="Navigation-link text-link" data-target="contact" onClick={this.handleClick.bind(this)}>Contact</a>
          </div>
        </div>
        <div className="Navigation-desktop hide-for-small">
          <a className="Navigation-link text-link" data-target="skills" onClick={this.handleClick.bind(this)}>Skills</a>
          <a className="Navigation-link text-link" data-target="portfolio" onClick={this.handleClick.bind(this)}>Portfolio</a>
          <a className="Navigation-link text-link" data-target="contact" onClick={this.handleClick.bind(this)}>Contact</a>
        </div>
      </nav>
    );
  }
}

export default Navigation;
