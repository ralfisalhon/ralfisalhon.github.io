import React, { Component } from 'react';
import './styles.css';
import PICounter from '../../components/PICounter';
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
      </div>
    );
  }
}

export default FunFactsPage;
