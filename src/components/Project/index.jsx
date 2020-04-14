/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

class Project extends Component {
  render() {
    const { logo, name, description, awards, platforms, video } = this.props;
    return (
      <div className="project">
        <h1>{name}</h1>
        <div className="m-10" />
        <img src={logo} alt="logo" />
        <p className="text">{description}</p>
        <p className="text">{awards}</p>
        <p className="text">{platforms && Object.keys(platforms)}</p>
        <p className="text">{video}</p>
      </div>
    );
  }
}

Project.propTypes = {
  authorImage: PropTypes.string,
  authorName: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  awards: PropTypes.arrayOf(PropTypes.string),
  platforms: PropTypes.objectOf(PropTypes.string),
  video: PropTypes.string,
};

Project.defaultProps = {
  logo: 'https://placehold.it/512',
  name: 'Default Name',
  description: 'Default Description',
  awards: null,
  platforms: null,
  video: null,
};

export default Project;
