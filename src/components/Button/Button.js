import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';


const Button = props => (
  <button type="button" onClick={props.clickHandler}>{props.text}</button>
);

Button.propTypes = {

};

export default Button;
