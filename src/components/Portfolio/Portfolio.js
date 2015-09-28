import React, { PropTypes } from 'react';
import Rebase from 're-base';
import classNames from 'classnames';
import Loader from 'react-loader';

import withStyles from '../../decorators/withStyles';
import animations from '../../utils/animations';
import { DB } from '../../config.js';
import ProjectInfo from '../ProjectInfo';
import ProjectWrapper from '../ProjectWrapper';
import styles from './Portfolio.css';

let body;
const ANIM_TIME = 0.6;

let base = Rebase.createClass(DB);

@withStyles(styles) class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      activeProjectID: '',
      wrapperClass: 'closed'
    }
  }

  componentDidMount() {
    this.init();

    this.el = this.refs.projects;
    this.isOpen = false;
    this.loaded = false;
  }

  componentWillReceiveProps(nextProps) {
    base.removeBinding(this.ref);
    this.init();
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('update');

    if(!this.loaded) {
      this.items = this.el.children;

      this.imageClips = [];
      this.itemContainers = [];
      this.itemContentContainers = [];

      for(let item of this.items) {
        this.imageClips.push(item.querySelector('#clip'));
        this.itemContainers.push(item.querySelector('.ProjectWrapper-container'));
        this.itemContentContainers.push(item.querySelector('.ProjectInfo'));
      }

      //console.log(this.imageClips, this.itemContainers, this.itemContentContainers)

      this.loaded = true;
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
    this.loaded = false;
  }

  init() {
    body = document.body;

    this.ref = base.bindToState('portfolio', {
      context: this,
      asArray: true,
      state: 'data'
    });
  }

  handleClick(i) {
    let hideTl = new TimelineLite({paused: true});
    let tweenOtherProjects = this.showHideOtherProjects(i);

    hideTl.add(tweenOtherProjects);
    hideTl.play();

    let openTl = new TimelineLite({paused: true});
    let openProjectAnim = this.openProjectTimeline(i);

    openTl.add(openProjectAnim);
    openTl.play();

    this.setState({
      activeProjectID: i
    });

    document.querySelector('.Header').classList.add('Header--up');
    body.classList.add('body--hidden');
    this.itemContainers[i].classList.remove('ProjectWrapper-container--hoverable');

    this.isOpen = true;
  }

  handleClose(i) {
    let itemContainer = this.itemContainers[i];
    let itemContent = this.itemContentContainers[i];

    TweenLite.to(itemContainer, ANIM_TIME, {
      scrollTo: {
        y: 0
      },
      onComplete: () => {
        itemContainer.style.overflow = 'hidden';
      },
      ease: Power2.easeOut
    });

    let closeTl = new TimelineLite({paused: true});
    let openProjectAnim = this.closeProjectTimeline(i);

    closeTl.add(openProjectAnim);

    closeTl.eventCallback('onReverseComplete', () => {
      TweenLite.set([itemContainer, itemContent], {
        clearProps: 'all'
      });

      let tl = new TimelineLite({paused: true});
      let tweenOtherProjects = this.showHideOtherProjects(i);

      tl.add(tweenOtherProjects);
      tl.play();

      document.body.classList.remove('body--hidden');
      this.itemContainers[i].classList.add('ProjectWrapper-container--hoverable');

      this.isOpen = false;

      this.setState({
        activeProjectID: ''
      });

      TweenLite.to(window, ANIM_TIME, {
        scrollTo: {
          y: Math.abs(document.body.getBoundingClientRect().top - this.items[i].getBoundingClientRect().top)
        },
        ease: Power2.easeOut
      });
    });

    closeTl.reverse(0);
  }

  handleNext(i) {
    let projectLength = this.state.data.length;

    let nextProjectID = (i + 1) % projectLength;

    this.setNextProject(i, nextProjectID);
  }

  handlePrev(i) {
    let projectLength = this.state.data.length;

    let nextProjectID = (i + projectLength - 1) % projectLength;

    this.setNextProject(i, nextProjectID);
  }

  showHideOtherProjects(id) {
    let tl = new TimelineLite;
    let i = 0;

    for(let item of this.items) {
      if(id != i && !this.isOpen) {
        tl.add(animations.hideAnim(item, ANIM_TIME), 0);
      }

      if(id != i && this.isOpen) {
        tl.add(animations.showAnim(item), 0);
      }

      i++;
    }

    return tl;
  }

  openProjectTimeline(i) {
    let itemContainer = this.itemContainers[i];
    let itemContent = this.itemContentContainers[i];
    let imageClip = this.imageClips[i];

    let tl = new TimelineLite();

    tl.add(animations.slideContentDown(itemContent, 0.01), 0);
    tl.add(animations.clipImageIn(imageClip, ANIM_TIME, 50), 0);
    tl.add(animations.floatContainer(itemContainer), '-=' + ANIM_TIME * 0.6);
    tl.add(animations.clipImageOut(imageClip, ANIM_TIME), '-=' + ANIM_TIME * 0.3);
    tl.add(animations.slideContentUp(itemContent, ANIM_TIME), '-=' + ANIM_TIME * 0.6);

    return tl;
  }

  closeProjectTimeline(i) {
    let itemContainer = this.itemContainers[i];
    let itemContent = this.itemContentContainers[i];
    let imageClip = this.imageClips[i];

    let tl = new TimelineLite();

    tl.add(animations.slideContentDown(itemContent, 0.01), 0);
    tl.add(animations.clipImageIn(imageClip, ANIM_TIME, 50), 0);
    tl.add(animations.floatCloseContainer(itemContainer), '-=' + ANIM_TIME * 0.6);
    tl.add(animations.clipImageOut(imageClip, ANIM_TIME), '-=' + ANIM_TIME * 0.3);
    tl.add(animations.slideContentUp(itemContent, ANIM_TIME), '-=' + ANIM_TIME * 0.6);

    return tl;
  }

  setNextProject(i, nextProjectID) {
    TweenLite.to(this.itemContainers[i], ANIM_TIME, {
      scrollTo: {
        y: 0
      },
      onComplete: () => {
        let itemContainer = this.itemContainers[i];
        let itemContent = this.itemContentContainers[i];
        let imageClip = this.imageClips[i];

        let tl = new TimelineLite({
          paused: true,
          onComplete: this.setNewContent.bind(this),
          onCompleteParams: [nextProjectID, itemContainer, itemContent]
        });

        tl.add(animations.slideContentDown(itemContent, ANIM_TIME), 0);
        tl.add(animations.clipImageIn(imageClip, ANIM_TIME, 0), 0);
        tl.add(animations.hideAnim(this.items[i], 0.01));
        tl.add(animations.clipImageOut(imageClip, 0.01));
        //tl.add(animations.resetWrapper(itemContainer));

        tl.play();
      },
      ease: Power2.easeOut
    });
  }

  setNewContent(i, oldItemContainer, oldItemContentContainer) {
    this.setState({
      activeProjectID: i
    });

    oldItemContainer.classList.add('ProjectWrapper-container--closed', 'ProjectWrapper-container--hoverable');
    oldItemContentContainer.classList.add('hide');

    let itemContainer = this.itemContainers[i];
    let itemContent = this.itemContentContainers[i];
    let imageClip = this.imageClips[i];

    itemContainer.classList.remove('ProjectWrapper-container--hoverable');

    let tl = new TimelineLite({paused: true});

    // switch to new one
    tl.add(animations.resetWrapper(itemContainer), 0);
    tl.add(animations.slideContentDown(itemContent, 0), 0);
    tl.add(animations.clipImageIn(imageClip, 0, 0), 0);
    tl.add(animations.floatNextContainer(itemContainer), 0);
    tl.add(animations.clipImageOut(imageClip, ANIM_TIME * 2), '-=' + ANIM_TIME * 0.3);
    tl.add(animations.slideContentUp(itemContent, ANIM_TIME), '-=' + ANIM_TIME * 0.6);

    tl.play();
  }

  render() {
    let projects = this.state.data.map((project, index) => {
      return (
        <ProjectWrapper key={index} onClick={this.handleClick.bind(this, index)}
                        closeClick={this.handleClose.bind(this, index)}
                        nextClick={this.handleNext.bind(this, index)} prevClick={this.handlePrev.bind(this, index)}
                        id={index} active={index === this.state.activeProjectID ? 'active' : null}
                        project={project} ref="projectWrapper" isOpen={this.isOpen} />
      )
    });

    return (
      <section id="portfolio" className={classNames('Portfolio', this.state.wrapperClass)} ref="portfolio">
        <div className="Portfolio-container row">
          <div className="small-12 columns">
            <h2 className="Portfolio-title section-title columns">Portfolio</h2>

            <div className="columns">
              <ul className="Portfolio-grid small-block-grid-1 medium-block-grid-2 large-block-grid-3" ref="projects">
                {projects}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
