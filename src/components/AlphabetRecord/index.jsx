/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './styles.css';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

class AlphabetRecord extends Component {
  constructor() {
    super();
    this.state = {
      num: 1,
      fontSpeed: 145,
    };
  }

  alphabetTimer = () => {
    let { fontSpeed, num } = this.state;
    if (num > ALPHABET.length) {
      setTimeout(() => {
        this.setState({ num: 1 });
        this.alphabetTimer();
      }, 3000);
      return;
    }
    setTimeout(() => {
      this.setState({ num: num + 1 });
      this.alphabetTimer();
    }, fontSpeed);
  };

  componentDidMount() {
    this.alphabetTimer();
  }

  render() {
    const { num } = this.state;
    return (
      <div>
        <p className="text fact-title">> I am the World's Fastest Smarthphone Typer</p>
        <div className="m-10" />
        <div className="PIContainer">
          <p className="PI">{ALPHABET.substr(0, num)}</p>
        </div>
        <div className="m-10" />
        <p className="text">
          I can type the alphabet in{' '}
          <a href="https://www.youtube.com/watch?v=Mo094dNblBc" target="_blank" rel="noopener noreferrer">
            3.777 seconds
          </a>{' '}
          on my Pixel 3.
        </p>
      </div>
    );
  }
}

export default AlphabetRecord;
