/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './styles.css';

import avatar from '../../assets/images/avatar.jpg';
import LinkedInLogo from '../../assets/svg/linkedin.svg';
import YoutubeLogo from '../../assets/svg/youtube.svg';
import GithubLogo from '../../assets/svg/github.svg';
import SpotifyLogo from '../../assets/svg/spotify.svg';

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
            <a className="text header-text" href="/teach">
              Teaching Material
            </a>
            <a className="text header-text" href="/fun">
              Fun Facts
            </a>
          </div>
        </div>
        <div className="footer">
          <div className="social" onClick={() => window.open('https://www.linkedin.com/in/ralfisalhon/')}>
            <img src={LinkedInLogo} alt="LinkedIn Logo" />
          </div>
          <div className="social" onClick={() => window.open('https://github.com/ralfisalhon')}>
            <img src={GithubLogo} alt="Github Logo" />
          </div>
          <div
            className="social"
            onClick={() => window.open('https://open.spotify.com/user/pnoig1591pjau15ah9ja412k6')}
          >
            <img src={SpotifyLogo} alt="Spotify Logo" />
          </div>
          <div
            className="social"
            onClick={() => window.open('https://www.youtube.com/channel/UCZOm0qLlSm19QyvAc_rsOmQ?view_as=subscriber')}
          >
            <img src={YoutubeLogo} alt="Youtube Logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
