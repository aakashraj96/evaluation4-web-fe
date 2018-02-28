import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';


const Header = props => (
  <div className="header">
    <p className="headerText"> {props.text} </p>
    <p className="headerText">{props.username}</p>
  </div>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Header;
