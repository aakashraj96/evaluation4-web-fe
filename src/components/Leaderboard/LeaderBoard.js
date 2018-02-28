import React from 'react';
import PropTypes from 'prop-types';
import './LeaderBoard.css';


class LeaderBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      leaderBoard: [],
    };
  }
  componentDidMount() {
    fetch('/getTop').then(resp => resp.json()).then((data) => {
      console.log('LeaderBoardData is: ', data);
    });
  }
  render() {
    return (
      <h1> LeaderBoard </h1>
    );
  }
}

// LeaderBoard.propTypes = {
//   text: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
// };

export default LeaderBoard;
