/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './styles.css';

import avatar from '../../assets/images/avatar.jpg';

class Header extends Component {
  render() {
    return (
      <div>
        <img className="avatar" alt="avatar" src={avatar}></img>
        <h1 className="header-title">Ralfi Salhon</h1>
      </div>
    );
  }
}

export default Header;
