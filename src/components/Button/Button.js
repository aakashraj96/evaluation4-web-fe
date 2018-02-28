import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';


const Button = props => (
  <button type="button" className="whiteButton" onClick={props.clickHandler}><h2>{props.text}</h2></button>
);

Button.propTypes = {

};

export default Button;
