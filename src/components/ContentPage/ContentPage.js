import React, { PropTypes } from 'react';

import withStyles from '../../decorators/withStyles';
import animations from '../../utils/animations';

import styles from './ContentPage.css';

@withStyles(styles) class ContentPage extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  componentDidMount() {
    let itemContent = this.refs.contentPageContainer;

    let tl = new TimelineLite({paused: true});

    tl.add(animations.slideContentDown(itemContent, 0), 0);
    //tl.add(animations.clipImageIn(imageClip, ANIM_TIME, 50), 0);
    //tl.add(animations.clipImageOut(imageClip, ANIM_TIME), '-=' + ANIM_TIME * 0.3);
    tl.add(animations.slideContentUp(itemContent, 0.8), 0.8);

    tl.play();
  }

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <section className="ContentPage">
        <div className="ContentPage-container" ref="contentPageContainer">
          {
            this.props.path === '/' ? null : <h1>{this.props.title}</h1>
          }
          <div dangerouslySetInnerHTML={{__html: this.props.content || ''}}></div>
        </div>
      </section>
    );
  }
}

export default ContentPage;
