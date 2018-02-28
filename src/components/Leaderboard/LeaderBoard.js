import React from 'react';
import PropTypes from 'prop-types';
import './LeaderBoard.css';
import ScoreCard from '../ScoreCard/ScoreCard';

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
      this.setState({ leaderBoard: data });
    });
  }
  render() {
    const scores = this.state.leaderBoard.map(score => (<ScoreCard username={score.username} score={score.score} />));
    return (
      <div>
        <h1> LeaderBoard </h1>
        {scores}
      </div>
    );
  }
}

// LeaderBoard.propTypes = {
//   text: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
// };

export default LeaderBoard;
