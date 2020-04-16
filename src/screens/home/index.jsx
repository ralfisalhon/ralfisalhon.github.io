import React, { Component } from 'react';
import './styles.css';

import coverlove from '../../assets/images/round_icons/coverlove.png';
import hearo from '../../assets/images/round_icons/hearo.png';
import igurme from '../../assets/images/round_icons/igurme.png';
import jamblr from '../../assets/images/round_icons/jamblr.png';
import polysentry from '../../assets/images/round_icons/polysentry.png';
import potencia from '../../assets/images/round_icons/potencia.png';
import redorblue from '../../assets/images/round_icons/redorblue.png';
import tunewise from '../../assets/images/round_icons/tunewise.png';

import LinkedInLogo from '../../assets/svg/linkedin.svg';
import YoutubeLogo from '../../assets/svg/youtube.svg';
import GithubLogo from '../../assets/svg/github.svg';
import SpotifyLogo from '../../assets/svg/spotify.svg';

import resume from '../../assets/pdf/RRS_Resume_Mar_2020_V2.pdf';

class HomePage extends Component {
  render() {
    return (
      <div className="homeBody fade-in">
        <div className={global.isMobile ? 'centertext-mobile' : 'centertext'}>
          <h1 className="text">Hi, my name is Ralfi.</h1>
          <div className="m-5" />
          <p className="text">I develop great looking mobile & web apps.</p>
          <div className="m-10" />
          <div className="flexRow">
            <code>
              {'<'}
              <a href={global.isMobile ? resume : '/resume'} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              {'/>'}
            </code>
            <div style={{ width: '10px' }} />
            <code>
              {'<'}
              <a href="mailto:ralfisalhon@gmail.com">Contact</a>
              {'/>'}
            </code>
          </div>
          {global.isMobile && (
            <div>
              <div className="m-20" />
              <div className="footer-mobile">
                <div className="social" onClick={() => window.open('https://www.linkedin.com/in/ralfisalhon/')}>
                  <img src={LinkedInLogo} alt="LinkedIn Logo" />
                </div>
                <div className="social w-5" onClick={() => window.open('https://github.com/ralfisalhon')}>
                  <img src={GithubLogo} alt="Github Logo" />
                </div>
                <div
                  className="social w-5"
                  onClick={() => window.open('https://open.spotify.com/user/pnoig1591pjau15ah9ja412k6')}
                >
                  <img src={SpotifyLogo} alt="Spotify Logo" />
                </div>
                <div
                  className="social w-5"
                  onClick={() =>
                    window.open('https://www.youtube.com/channel/UCZOm0qLlSm19QyvAc_rsOmQ?view_as=subscriber')
                  }
                >
                  <img src={YoutubeLogo} alt="Youtube Logo" />
                </div>
              </div>

              <p className="text smaller" style={{ position: 'absolute', bottom: 20 }}>
                ps. this website is best experienced on desktop
              </p>
            </div>
          )}
        </div>
        {!global.isMobile && (
          <div>
            <div className="base">
              <div className="item item-1">
                <img
                  className="round_icon"
                  alt="app_icon"
                  src={coverlove}
                  onClick={() => (window.location.href = '/projects/coverlove')}
                />
                <p className="text small m--5">coverlove</p>
              </div>
              <div className="item item-2">
                <img
                  className="round_icon"
                  alt="app_icon"
                  src={jamblr}
                  onClick={() => (window.location.href = '/projects/jamblr')}
                />
                <p className="text small m--5">Jamblr</p>
              </div>
              <div className="item item-3">
                <img
                  className="round_icon"
                  alt="app_icon"
                  src={polysentry}
                  onClick={() => (window.location.href = '/projects/polysentry')}
                />
                <p className="text small m--5">PolySentry</p>
              </div>
              <div className="item item-4">
                <img
                  className="round_icon"
                  alt="app_icon"
                  src={redorblue}
                  onClick={() => (window.location.href = '/projects/redorblue')}
                />
                <p className="text small m--5">Red or Blue</p>
              </div>
              <div className="item item-5">
                <img
                  className="round_icon"
                  alt="app_icon"
                  src={potencia}
                  onClick={() => (window.location.href = '/projects/potencia')}
                />
                <p className="text small m--5">Potencia</p>
              </div>
              <div className="item item-6">
                <img
                  className="round_icon"
                  alt="app_icon"
                  src={hearo}
                  onClick={() => (window.location.href = '/projects/hearo')}
                />
                <p className="text small m--5">Hearo</p>
              </div>
              <div className="item item-7">
                <img
                  className="round_icon"
                  alt="app_icon"
                  src={tunewise}
                  onClick={() => (window.location.href = '/projects/tunewise')}
                />
                <p className="text small m--5">TuneWise</p>
              </div>
              <div className="item item-8">
                <img
                  className="round_icon"
                  alt="app_icon"
                  src={igurme}
                  onClick={() => (window.location.href = '/projects/igurme')}
                />
                <p className="text small m--5">iGurme</p>
              </div>
            </div>
            <div className="after-spin">
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default HomePage;
