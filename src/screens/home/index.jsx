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
        <div className="centertext">
          <h1 className="text">Hi, my name is Ralfi.</h1>
          <p className="text">I develop great looking mobile apps.</p>
        </div>
        <div className="base">
          <img
            className="round_icon item item-1 all"
            alt="app_icon"
            src={coverlove}
            onClick={() => alert('Clicked coverlove')}
          />
          <img className="round_icon item item-2 all" alt="app_icon" src={jamblr} />
          <img className="round_icon item item-3 all" alt="app_icon" src={polysentry} />
          <img className="round_icon item item-4 all" alt="app_icon" src={redorblue} />
          <img className="round_icon item item-5 all" alt="app_icon" src={potencia} />
          <img className="round_icon item item-6 all" alt="app_icon" src={hearo} />
          <img className="round_icon item item-7 all" alt="app_icon" src={tunewise} />
          <img className="round_icon item item-8 all" alt="app_icon" src={igurme} />
        </div>
        {/* <div class="base">
          <div class="item red a1 all">1</div>
          <div class="item green a2 all">2</div>
          <div class="item blue a3 all">3</div>
          <div class="item magenta a4 all">4</div>
        </div> */}
      </center>
    );
  }
}

export default HomePage;
