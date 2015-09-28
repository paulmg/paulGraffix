import React from 'react';

import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import Navigation from '../Navigation';
import styles from './Header.css';

let body, html;
const DELTA = 80;

@withStyles(styles) class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      didScroll: false
    }
  }
  // Hide Header on on scroll down
  componentDidMount() {
    body = document.body;
    html = document.documentElement;
    this.header = this.refs.header;
    this.navbarHeight = this.header.offsetHeight;
    this.lastScrollTop = 0;
    this.height = 0;
    this.headerInterval = null;

    window.onscroll = () => {
      this.setState({
        didScroll: true
      });
    };

    this.headerInterval = setInterval(() => {
      if(this.state.didScroll) {
        this.hasScrolled();
        this.setState({
          didScroll: false
        });
      }
    }, 250);

    this.header.classList.remove('Header--up');
  }

  componentWillUnmount() {
    clearInterval(this.headerInterval);
  }

  hasScrolled() {
    this.height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    let scrollTop = window.scrollY || window.pageYOffset;

    if(Math.abs(this.lastScrollTop - scrollTop) <= DELTA)
      return;

    if(scrollTop > this.lastScrollTop && scrollTop > this.navbarHeight) {
      // Scroll Down
      this.header.classList.add('Header--up');
    } else {
      // Scroll Up
      if(scrollTop + window.innerHeight < this.height) {
        this.header.classList.remove('Header--up');
      }
    }

    this.lastScrollTop = scrollTop;
    /*console.log('ls: ' + lastScrollTop)
     console.log('st: ' + (scrollTop + window.innerHeight))
     console.log('he: ' + this.height)*/
  }

  render() {
    return (
      <header id="header" className="Header Header--up" data-scroll-header ref="header">
        <div className="Header-container row">
          <div className="columns">
            <div className="Header-brand small-8 medium-5 columns">
              <a className="" href="/" onClick={Link.handleClick}>
                <img className="Header-brandImg" src={require('./title.png')} width="205" height="27"
                     alt="PaulGraffix" />
                {/*<span className="Header-brandTxt">PaulGraffix</span>*/}
              </a>
            </div>
            <Navigation className="Header-nav text-right small-4 medium-7 columns" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
