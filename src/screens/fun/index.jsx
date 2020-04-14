import React, { Component } from 'react';
import './styles.css';
import PICounter from '../../components/PICounter';
import AlphabetRecord from '../../components/AlphabetRecord';
import Line from '../../components/Line';
class FunFactsPage extends Component {
  render() {
    return (
      <div>
        <h1 className="no-margin">Fun Facts Page</h1>
        <div className="m-5" />
        <h3 className="subtitle">What I do when I'm not coding</h3>
        <Line />
        <PICounter />
        <Line />
        <AlphabetRecord />
        <Line />
        <p className="text fact-title">> I've been playing the piano for 14 years</p>
        <div className="m-10" />
        <p>
          Here, listen to baby me play when I was <a href="https://www.youtube.com/watch?v=bTn22GQevjw">9 years</a> old,{' '}
          <a href="https://www.youtube.com/watch?v=X9Gy6ZulfNc">15 years</a> old. I mostly do classical nowadays.
        </p>
      </div>
    );
  }
}

export default FunFactsPage;
