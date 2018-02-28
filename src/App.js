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
    };
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
          />
          <Button
            text="Calculate"
            clickHandler={() => {
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
          }}
          />
        </div>
      );
    } else if (this.state.pageNumber === 2) {
      return (
        <div className="main">
          <Header text="Quizzy" username={this.state.username} />
          <br />
          <h2>{this.state.score}/{this.state.total}</h2>
          <LeaderBoard />
        </div>
      );
    }
  }
}

export default App;
