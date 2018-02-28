import React from 'react';
import PropTypes from 'prop-types';
import './Question.css';


class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedState: this.props.checkState,
      chosenAnswer: '',
      flag: 0,
    };
  }

  render() {
    const checkboxes = Object.keys(JSON.parse(this.props.options)).map((key) => {
      const modifiedKey = key.replace('option', '');

      return (
        <div>
          <input
            type="radio"
            value={JSON.parse(this.props.options)[key]}
            checked={this.state.checkedState === modifiedKey}
            onChange={() => {
              if ((this.state.flag === 0) && (this.state.checkedState === '0')) {
                this.setState({ flag: 1 });
                this.props.updateCount();
              }
              this.setState(
{
 checkedState: modifiedKey,
              chosenAnswer: JSON.parse(this.props.options)[key],
},
              () => {
                fetch('/saveQuestionReponse', {
                  method: 'post',
                  headers: {
                              Accept: 'application/json',
                              'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    username: this.props.username,
                    questionid: this.props.qid,
                    answer: this.state.chosenAnswer,
                  }),
                });
              },
            );
          }}
          />
          <span>{JSON.parse(this.props.options)[key]}</span>

        </div>);
    });
    // console.log('Options are: ', Object.keys(JSON.parse(props.options)));
    return (
      <div className="questionBox">
        <div className="innerBox">
          <p className="questionText">Question {this.props.id + 1}</p>
        </div>
        <div className="question">
          <p className="qText"> {this.props.ques} </p>
        </div>
        <p className="questionText" > {checkboxes} </p>
      </div>
    );
  }
}

// Question.propTypes = {
//   text: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
// };

export default Question;
