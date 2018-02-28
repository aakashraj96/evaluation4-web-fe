import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import Button from '../Button/Button';

const Form = props => (
  <div className="form">
    <div className="centerDiv">
      <div className="leftDiv" >
        <div className="centerFlex">
          <p className="blackText"> Welcome </p>
          <p className="blackText"> to </p>
          <p className="quizzy"> Quizzy! </p>
        </div>
      </div>
      <div className="rightDiv">
        <div className="leftAlign">
          <h2 > Login </h2>
          <p > Username: </p>
        </div>
        <input
          className="inputBox"
          type="text"
          name="username"
          onChange={(event) => {
      props.updateUsername(event.target.value);
    }}
        />
        <Button
          text="Login"
          clickHandler={() => {
      fetch('/login', {
        method: 'post',
        headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: props.username,
        }),
      }).then(resp => resp.json()).then((data) => {
        console.log(data);
        props.changePageNumber(1);
        props.updatePrevResponse(data.prevResponse);
      });
    }}
        />
      </div>

    </div>
  </div>
);

  // Form.propTypes = {
  //
  // };

export default Form;
