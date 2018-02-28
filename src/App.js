import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import QuestionContainer from './components/QuestionContainer/QuestionContainer';
import Button from './components/Button/Button';
import LeaderBoard from './components/Leaderboard/LeaderBoard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      pageNumber: 0,
      prevResponses: [],
      score: 0,
      total: 0,
      count: 0,
    };
  }


  setCount = (value) => {
    this.setState({ count: value });
  }
  updateCount = () => {
    console.log('Count is: ', this.state.count);
    this.setState({ count: this.state.count - 1 });
  }
  updateUsername = (value) => {
    this.setState({ username: value });
  }

  changePageNumber = (value) => {
    this.setState({ pageNumber: value });
  }

  updatePrevResponse = (value) => {
    this.setState({ prevResponses: value });
  }

  updateTotal = (value) => {
    this.setState({ total: value });
  }

  reset = () => {
    this.setState({
      username: '',
      prevResponses: [],
      score: 0,
      total: 0,
      pageNumber: 0,
    });
  }
  render() {
    if (this.state.pageNumber === 0) {
      return (
        <div className="main">
          <Header text="Quizzy" username="" />
          <Form
            updateUsername={this.updateUsername}
            username={this.state.username}
            changePageNumber={this.changePageNumber}
            updatePrevResponse={this.updatePrevResponse}
          />
        </div>
      );
    } else if (this.state.pageNumber === 1) {
      return (
        <div className="main">
          <Header text="Quizzy" username={`Hello ${this.state.username}`} />
          <QuestionContainer
            username={this.state.username}
            prevResponses={this.state.prevResponses}
            updateTotal={this.updateTotal}
            setCount={this.setCount}
            updateCount={this.updateCount}
          />
          <Button
            text="Calculate"
            clickHandler={() => {
              if (this.state.count !== 0) {
                alert('Answer all the questions');
              } else {
                fetch('/calculateScore', {
                  method: 'post',
                  headers: {
                              Accept: 'application/json',
                              'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    username: this.state.username,
                  }),
                }).then(resp => resp.json()).then((data) => {
                  this.setState({
                    pageNumber: 2,
                    score: data,
                  });
                });
              }
          }}
          />
        </div>
      );
    } else if (this.state.pageNumber === 2) {
      return (
        <div className="main">
          <Header text="Quizzy" username={`Hello ${this.state.username}`} />
          <div className="leaderBoard">

            <h2>Your score: {this.state.score}/{this.state.total}</h2>
            <LeaderBoard username={this.state.username} />
            <Button
              text="Play Again"
              clickHandler={() => {
            // this.changePageNumber(0);
            this.reset();
          }}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
