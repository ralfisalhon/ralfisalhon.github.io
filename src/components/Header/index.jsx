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
          <h1 className="text header-title subtitle small">Mobile, Front-End Developer</h1>
        </center>
        <div className="m-10" />
        <div className="flexCenter">
          <div className="navBar">
            <a className="text header-text" href="/">
              Home
            </a>
            <a className="text header-text" href="/resume">
              Resume
            </a>
            <a className="text header-text" href="/projects/mobile">
              Mobile Projects
            </a>
            <a className="text header-text" href="/projects/web">
              Web Projects
            </a>
            <a className="text header-text" href="/fun">
              Fun Facts
            </a>
          </div>
        </div>
        <div className="footer">
          <h1 className="text header-text">L</h1>
          <h1 className="text header-text">G</h1>
          <h1 className="text header-text">S</h1>
          <h1 className="text header-text">C</h1>
        </div>
      </div>
    );
  }
}

export default Header;
