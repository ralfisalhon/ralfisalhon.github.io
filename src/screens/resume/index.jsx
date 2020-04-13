import React, { Component } from 'react';
import './styles.css';
class ResumePage extends Component {
  render() {
    return (
      <div>
        <h1>Resume Page</h1>

        {/* <iframe title="resume" src="../assets/pdf/resume.pdf" width="100%" height="100%"></iframe> */}
        <iframe src="../../assets/pdf/projects.pdf" title="title">
          Press me: <a href="./resources/crayola.pdf">Download PDF</a>
        </iframe>
      </div>
    );
  }
}

export default ResumePage;
