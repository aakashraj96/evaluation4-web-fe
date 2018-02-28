import React from 'react';
import PropTypes from 'prop-types';
import './QuestionContainer.css';
import Question from '../Question/Question';

class QuestionContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    fetch('/getQuestions').then(resp => resp.json()).then((data) => {
      this.props.updateTotal(data.length);
      this.props.setCount(data.length - this.props.prevResponses.length);
      this.setState({
        questions: data,
      });
    });
  }


  render() {
    const allQuestions = this.state.questions.map((q, i) => {
      let checkState = '0';
      this.props.prevResponses.forEach((resp) => {
        if (resp.questionid === q.questionid) {
          Object.keys(JSON.parse(q.options)).forEach((key) => {
            if (resp.answer === JSON.parse(q.options)[key]) {
              checkState = key.replace('option', '');
            }
          });
        }
      });
      return (<Question
        ques={q.question}
        options={q.options}
        key={i}
        qid={q.questionid}
        username={this.props.username}
        checkState={checkState}
        id={i}
        updateCount={this.props.updateCount}
      />);
    });
    return (
      <div className="questionContainer">
        <h1> Question: </h1>
        {allQuestions}
      </div>
    );
  }
}

// QuestionContainer.propTypes = {
//   text: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
// };


export default QuestionContainer;
