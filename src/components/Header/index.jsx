/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './styles.css';

import avatar from '../../assets/images/avatar.jpg';

class Header extends Component {
  render() {
    return (
      <div className="header-content">
        <div className="m-20" />
        <div className="m-10" />
        <center>
          <img className="avatar" alt="avatar" src={avatar}></img>
          <div className="m-20" />
          <h1 className="text header-title">Ralfi Salhon</h1>
        </center>
        <div className="m-10" />
        <div className="navBar">
          <a className="text header-text" href="/">
            Home
          </a>
          <a className="text header-text" href="resume">
            Resume
          </a>
          <a className="text header-text" href="fun">
            Fun Facts
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
