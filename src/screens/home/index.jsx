import React, { Component } from 'react';
import './styles.css';

// import claimate from '../../assets/images/round_icons/claimate.png';
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
      <div className="homeBody">
        <div className="centertext">
          <h1 className="text">Hi, my name is Ralfi.</h1>
          <div className="m-5" />
          <p className="text">I develop great looking mobile & web apps.</p>
        </div>
        <div className="base">
          <div className="item item-1">
            <img
              className="round_icon"
              alt="app_icon"
              src={coverlove}
              onClick={() => (window.location.href = '/projects/mobile/coverlove')}
            />
            <p className="text small m--5">coverlove</p>
          </div>
          <div className="item item-2">
            <img
              className="round_icon"
              alt="app_icon"
              src={jamblr}
              onClick={() => (window.location.href = '/projects/mobile/jamblr')}
            />
            <p className="text small m--5">Jamblr</p>
          </div>
          <div className="item item-3">
            <img
              className="round_icon"
              alt="app_icon"
              src={polysentry}
              onClick={() => (window.location.href = '/projects/mobile/polysentry')}
            />
            <p className="text small m--5">Polysentry</p>
          </div>
          <div className="item item-4">
            <img
              className="round_icon"
              alt="app_icon"
              src={redorblue}
              onClick={() => (window.location.href = '/projects/web/redorblue')}
            />
            <p className="text small m--5">Red or Blue</p>
          </div>
          <div className="item item-5">
            <img
              className="round_icon"
              alt="app_icon"
              src={potencia}
              onClick={() => (window.location.href = '/projects/mobile/potencia')}
            />
            <p className="text small m--5">Potencia</p>
          </div>
          <div className="item item-6">
            <img
              className="round_icon"
              alt="app_icon"
              src={hearo}
              onClick={() => (window.location.href = '/projects/mobile/hearo')}
            />
            <p className="text small m--5">Hearo</p>
          </div>
          <div className="item item-7">
            <img
              className="round_icon"
              alt="app_icon"
              src={tunewise}
              onClick={() => (window.location.href = '/projects/mobile/tunewise')}
            />
            <p className="text small m--5">TuneWise</p>
          </div>
          <div className="item item-8">
            <img
              className="round_icon"
              alt="app_icon"
              src={igurme}
              onClick={() => (window.location.href = '/projects/mobile/igurme')}
            />
            <p className="text small m--5">iGurme</p>
          </div>
        </div>
        {/* <div class="base">
          <div class="item red a1">1</div>
          <div class="item green a2">2</div>
          <div class="item blue a3">3</div>
          <div class="item magenta a4">4</div>
        </div> */}
      </div>
    );
  }
}

export default HomePage;
