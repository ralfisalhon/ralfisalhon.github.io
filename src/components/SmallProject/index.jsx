/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

class SmallProject extends Component {
  render() {
    const { logo, name, color } = this.props;
    return (
      <div className="small-project" style={{ backgroundColor: color }}>
        <img className="logo-small" src={logo} alt="logo" />
        <h1 className="text project-text">{name}</h1>
      </div>
    );
  }
}

SmallProject.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  awards: PropTypes.arrayOf(PropTypes.string),
  platforms: PropTypes.objectOf(PropTypes.string),
  video: PropTypes.string,
};

SmallProject.defaultProps = {
  logo: 'https://placehold.it/512',
  name: 'Default Name',
  title: 'Default Title',
  color: 'coral',
  description: 'Default Description',
  awards: null,
  platforms: null,
  video: null,
};

export default SmallProject;
