import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './ErrorPage.css';

@withStyles(styles)
class ErrorPage extends React.Component {
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired
  };

  render() {
    let title = 'Error';
    this.context.onSetTitle(title);
    return (
      <div>
        <h1>{title}</h1>

        <p>Sorry, a critical error occurred on this page.</p>
      </div>
    );
  }
}

export default ErrorPage;
