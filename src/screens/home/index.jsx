/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './styles.css';
import Clickable from '../../reusables/Clickable';

// import avatar from '../../assets/images/avatar.jpg';

const PI =
  '3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912<wow_dude_cool_monitor>';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      num: 2,
      fontSize: 32,
      fontSpeed: 150,
    };
  }

  piTimer = () => {
    let { fontSpeed } = this.state;
    if (fontSpeed > 50) {
      this.setState({ fontSpeed: fontSpeed * 0.95 });
    }
    setTimeout(() => {
      this.setState({ num: this.state.num + 1 });
      this.piTimer();
    }, fontSpeed);
  };

  componentDidMount() {
    this.piTimer();
  }

  updateFont = (fontSize) => {
    this.setState({ fontSize });
  };

  render() {
    const { num, fontSize } = this.state;
    return (
      <div className="full-page">
        <div className="header">
          <h1 className="header-title">FUN FACTS CORNER!</h1>
        </div>
        <div className="content">
          <p className="text fact-title">
            I know <a>500</a> digits of PI!
          </p>
          <div className="m-20" />
          <div className="fonts">
            <div className="fontBox" onClick={() => this.updateFont(8)}>
              <p className="text font">8px</p>
            </div>
            <div className="fontBox" onClick={() => this.updateFont(16)}>
              <p className="text font">16px</p>
            </div>
            <div className="fontBox" onClick={() => this.updateFont(24)}>
              <p className="text font">24px</p>
            </div>
          </div>
          <div className="PIContainer">
            <p className="PI" style={{ fontSize: fontSize.toString() + 'px' }}>
              {PI.substr(0, num)}
            </p>
          </div>
          <div className="m-10" />
          <p className="text">I'll save you the trouble. It'll overflow no matter how wide your monitor is.</p>
          {/* <p>TEST</p> */}
        </div>
      </div>
    );
  }
}

export default HomePage;
