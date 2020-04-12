import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const {} = this.props;
    return (
      <div>
        <p>YOHOHO</p>
      </div>
    );
  }
}

TextInput.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  filled: PropTypes.bool,
  color: PropTypes.string,
};

TextInput.defaultProps = {
  filled: false,
  color: '#001255',
};

export default TextInput;
