/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

class Clickable extends Component {
  getButtonStyle = (filled, color) => {
    return {
      border: '2px solid white',
      borderRadius: '100px',
      padding: '15px 30px 15px 30px',
      outline: 'none',
      backgroundColor: filled ? color : 'none',
      cursor: 'pointer',
    };
  };

  getTextStyle = (filled) => {
    return {
      color: filled ? '#001255' : 'white',
      fontWeight: 'bold',
      outline: 'none',
      fontFamily: 'Courier New',
      fontSize: '22px',
    };
  };

  render() {
    const { text, onClick, filled, color } = this.props;
    return (
      <span
        className="disable-selection"
        role="button"
        tabIndex={0}
        onClick={onClick}
        style={this.getButtonStyle(filled, color)}
      >
        <span style={this.getTextStyle(filled)}>{text}</span>
      </span>
    );
  }
}

Clickable.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  filled: PropTypes.bool,
  color: PropTypes.string,
};

Clickable.defaultProps = {
  filled: false,
  color: '#001255',
};

export default Clickable;
