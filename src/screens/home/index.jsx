import React, { Component } from 'react';
import './styles.css';

import claimate from '../../assets/images/round_icons/claimate.png';
import coverlove from '../../assets/images/round_icons/coverlove.png';
import hearo from '../../assets/images/round_icons/hearo.png';
import igurme from '../../assets/images/round_icons/igurme.png';
import jamblr from '../../assets/images/round_icons/jamblr.png';
import polysentry from '../../assets/images/round_icons/polysentry.png';
import potencia from '../../assets/images/round_icons/potencia.png';
import redorblue from '../../assets/images/round_icons/redorblue.png';
import tunewise from '../../assets/images/round_icons/tunewise.png';

class HomePage extends Component {
  render() {
    return (
      <center className="flexCenter">
        <div className="row">
          <img className="round_icon" alt="app_icon" src={coverlove} />
          <img className="round_icon" alt="app_icon" src={igurme} />
          <img className="round_icon" alt="app_icon" src={polysentry} />
          <img className="round_icon" alt="app_icon" src={redorblue} />
        </div>
        <div className="centertext">
          <h1 className="text">Hi, my name is Ralfi.</h1>
          <p className="text">I develop mobile apps and websites, clean and efficiently.</p>
        </div>

        <div className="row">
          <img className="round_icon" alt="app_icon" src={claimate} />
          <img className="round_icon" alt="app_icon" src={hearo} />
          <img className="round_icon" alt="app_icon" src={jamblr} />
          <img className="round_icon" alt="app_icon" src={potencia} />
          <img className="round_icon" alt="app_icon" src={tunewise} />
        </div>
      </center>
    );
  }
}

export default HomePage;
