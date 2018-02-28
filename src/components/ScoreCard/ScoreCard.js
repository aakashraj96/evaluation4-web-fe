import React from 'react';
import PropTypes from 'prop-types';
import './ScoreCard.css';


const ScoreCard = props => (
  <div>
    <h3> {props.username} </h3>
    <h4> {props.score} </h4>
  </div>
);

// ScoreCard.propTypes = {
//   text: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
// };

export default ScoreCard;
