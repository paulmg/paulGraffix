import React, { PropTypes } from 'react';

class ProjectContent extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  static propTypes = {};

  componentDidMount() {
    var img = document.createElement('img');

    img.src = this.props.section.images[0];

    img.onload = () => {
      this.setState({loaded: true});
      this.props.isLoaded(this.state.loaded);
    };

   //this.setState({ loaded: true });

  }

  render() {
    let imageArr = this.props.section.images.map((images, index) => {
      return ( <img src={images} key={index} /> )
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
