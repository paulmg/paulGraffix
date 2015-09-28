import React, { PropTypes } from 'react';
import classNames from 'classnames';

import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import styles from './Navigation.css';

@withStyles(styles) class Navigation extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  toggleMobileMenu() {
    let dropDownMenu = this.refs.desktopMenu;
    dropDownMenu.classList.toggle('Navigation--down');
  }

  handleClick() {
    this.toggleMobileMenu();
  }

  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
        <div className="Navigation-mobile hide-for-medium-up">
          <a className="Navigation-link" href="#" onClick={this.toggleMobileMenu.bind(this)}><img className="icon-social" src={require('./svg/menu.svg')} /></a>
        </div>
        <div className="Navigation-desktop" ref="desktopMenu">
          <a className="Navigation-link text-link" data-scroll href="#skills" onClick={this.handleClick.bind(this)}>Skills</a>
          <a className="Navigation-link text-link" data-scroll href="#portfolio" onClick={this.handleClick.bind(this)}>Portfolio</a>
          <a className="Navigation-link text-link" data-scroll href="#contact" onClick={this.handleClick.bind(this)}>Contact</a>
        </div>
      </div>
    );
  }
}

export default Navigation;
