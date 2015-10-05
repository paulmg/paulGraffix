import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import styles from './ProjectWrapper.css';

import ProjectCaption from '../ProjectCaption';
import ProjectInfo from '../ProjectInfo';

const ANIM_TIME = 0.2;
const LEFT_X = 200;
const RIGHT_X = -200;
const RIGHT_Y = 180;

@withStyles(styles) class ProjectWrapper extends React.Component {
  static propTypes = {
    project: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func.isRequired,
    closeClick: React.PropTypes.func.isRequired,
    nextClick: React.PropTypes.func.isRequired,
    prevClick: React.PropTypes.func.isRequired,
    id: React.PropTypes.number.isRequired,
    active: React.PropTypes.string
  };

  componentWillMount() {
    this.headerInterval = null;
    this.didScroll = false;
  }

  componentDidMount() {
    this.wrapper = this.refs.projectWrapperContainer;
    this.nextBtn = this.refs.nextBtn;
    this.prevBtn = this.refs.prevBtn;
    this.closeBtn = this.refs.closeBtn;
    this.upBtn = this.refs.upBtn;

    this.disableButtons();

    this.wrapper.onscroll = () => {
      this.didScroll = true
    };

    this.headerInterval = setInterval(() => {
      if(this.didScroll) {
        this.hasScrolled();
        this.didScroll = false
      }
    }, 250);
  }

  componentDidUpdate(prevProps, prevState) {
    this.isLoaded = false;

    if(this.props.active) {
      setTimeout(() => {
        TweenLite.to(this.prevBtn, ANIM_TIME, { x: LEFT_X, ease: Power2.easeOut,

          onComplete: () => {
            TweenLite.to(this.nextBtn, ANIM_TIME, { x: RIGHT_X, ease: Power2.easeOut,

              onComplete: () => {
                TweenLite.to(this.closeBtn, ANIM_TIME, { y: RIGHT_Y, ease: Power2.easeOut,

                  onComplete: () => {
                    this.isLoaded = true;
                    this.enableButtons();
                  }
                })
              }
            });
          }
        });
      }, 1000);
    }
  }

  handleClick() {
    this.props.onClick(this);
  }

  handleClose() {
    this.disableButtons();

    TweenLite.to(this.nextBtn, ANIM_TIME, { x: 0, ease: Power2.easeOut,

      onComplete: () => {
        TweenLite.to(this.prevBtn, ANIM_TIME, { x: 0, ease: Power2.easeOut,

          onComplete: () => {
            TweenLite.to(this.closeBtn, ANIM_TIME, { y: 0, ease: Power2.easeOut,

              onComplete: () => {
                this.props.closeClick(this);
              }
            })
          }
        });
      }
    });
  }

  handleNext() {
    this.disableButtons();

    this.props.nextClick(this);

    TweenLite.to(this.nextBtn, ANIM_TIME, { x: 0, ease: Power2.easeOut,

      onComplete: () => {
        TweenLite.to(this.prevBtn, ANIM_TIME, {
          x: 0, ease: Power2.easeOut,

          onComplete: () => {
            TweenLite.to(this.closeBtn, ANIM_TIME, {y: 0, ease: Power2.easeOut});
          }
        });
      }
    });
  }

  handlePrev() {
    this.disableButtons();

    this.props.prevClick(this);

    TweenLite.to(this.prevBtn, ANIM_TIME, { x: 0, ease: Power2.easeOut,

      onComplete: () => {
        TweenLite.to(this.nextBtn, ANIM_TIME, { x: 0, ease: Power2.easeOut,

          onComplete: () => {
            TweenLite.to(this.closeBtn, ANIM_TIME, {y: 0, ease: Power2.easeOut});
          }
        });
      }
    });
  }

  handleUp() {
    this.scrollToTop(this.wrapper)
  }

  scrollToTop(el) {
    TweenLite.to(el, 0.8, {
      scrollTo: { y: 0 },
      ease: Power2.easeOut
    });
  }

  hasScrolled() {
    let scrollTop = this.wrapper.scrollTop;

    if(scrollTop > 100) {
      this.upBtn.classList.add('button-bottom--show');
    } else {
      this.upBtn.classList.remove('button-bottom--show')
    }

    this.lastScrollTop = scrollTop;
  }

  enableButtons() {
    this.nextBtn.style.pointerEvents = 'all';
    this.prevBtn.style.pointerEvents = 'all';
    this.closeBtn.style.pointerEvents = 'all';
    this.upBtn.style.pointerEvents = 'all';
  }

  disableButtons() {
    this.nextBtn.style.pointerEvents = 'none';
    this.prevBtn.style.pointerEvents = 'none';
    this.closeBtn.style.pointerEvents = 'none';
    this.upBtn.style.pointerEvents = 'none';
  }

  render() {
    let src = this.props.project.thumb;
    let id = this.props.id;

    function svgMarkup() {
      return {
        __html: '<svg class="ProjectWrapper-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ' +
        'viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice"><defs><clipPath id="clipPath' + id +
        '"><circle id="clip" class="clip" cx="600" cy="200" r="632"></circle></clipPath></defs><image clip-path="url(#clipPath' + id +
        ')" width="1200" height="400" xlink:href="' + src + '"}></image></svg>'
      };
    }

    return (
      <li className={classNames(this.props.active, 'ProjectWrapper')}>
        <a className="close button-fixed button-top button-right" onClick={this.handleClose.bind(this)} ref="closeBtn"><img
          src={require('./svg/close.svg')} /></a>
        <a className="prev button-fixed button-side button-left" onClick={this.handlePrev.bind(this)} ref="prevBtn"><img
          src={require('./svg/left.svg')} /></a>
        <a className="next button-fixed button-side button-right" onClick={this.handleNext.bind(this)} ref="nextBtn"><img
          src={require('./svg/right.svg')} /></a>
        <a className="up button-fixed button-bottom button-right" onClick={this.handleUp.bind(this)} ref="upBtn"><img src={require('./svg/up.svg')} /></a>

        <div className="ProjectWrapper-container ProjectWrapper-container--closed ProjectWrapper-container--hoverable" ref="projectWrapperContainer">
          <div className="ProjectWrapper-svgContainer" dangerouslySetInnerHTML={svgMarkup()}></div>

          <ProjectInfo project={this.props.project} isActive={this.props.active} />
        </div>

        <ProjectCaption onClick={this.handleClick.bind(this)} src={src} alt={this.props.project.name} project={this.props.project} />
      </li>
    );
  }
}

export default ProjectWrapper;
