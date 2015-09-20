import React, { PropTypes } from 'react';

class ProjectContent extends React.Component{
  static propTypes = {};

  render() {
    let imageArr = this.props.section.images.map((images, index) => {
      return ( <img src={images} key={index} /> )
    });
    let text = this.props.section.text;

    return (
      <div className="ProjectContent">
        <div className="ProjectContent-section">
          <div className="ProjectContent-text">
            {text}
          </div>
          <div className="ProjectContent-images">
            {imageArr}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectContent;
