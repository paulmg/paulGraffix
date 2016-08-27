import React, { PropTypes } from 'react';

class ProjectContent extends React.Component {
  static propTypes = {
    section: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    var img = document.createElement('img');

    img.src = this.props.section.images[0];

    img.onload = () => {
      this.setState({loaded: true});
    };
  }

  render() {
    let imageArr = this.props.section.images.map((image, index) => {
      return (
          <img key={index} src={image} />
      );
    });
    let text = this.props.section.text;

    return (
      <div className="ProjectContent">
        <div className="ProjectContent-section">
          <div className="ProjectContent-text">
            <p>{text}</p>
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
