import React from 'react';
import PropTypes from 'prop-types';
import './ScoreCard.css';


class ScoreCard extends React.Component {
  render() {
    const localStyle = {};
    if (this.props.originalUsername === this.props.username) {
      localStyle.backgroundColor = '#FF0000';
    } else {
      localStyle.backgroundColor = '#44C7F5';
    }
    return (
      <div className="scoreCard" style={localStyle}>
        <h3> {this.props.index + 1}. {this.props.username} </h3>
        <h3> {this.props.score} </h3>
      </div>
    );
  }
}

// ScoreCard.propTypes = {
//   text: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
// };

export default ScoreCard;
