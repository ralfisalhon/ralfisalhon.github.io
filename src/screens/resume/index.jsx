import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../../assets/pdf/RRS_Resume_Mar_2020_V2.pdf';
import Line from '../../components/Line';

import './AnnotationLayer.css';

import './styles.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function removeTextLayerOffset() {
  const textLayers = document.querySelectorAll('.react-pdf__Page__textContent');
  textLayers.forEach((layer) => {
    const { style } = layer;
    style.top = '0';
    style.left = '0';
    style.transform = '';
  });
}

class ResumePage extends Component {
  render() {
    const resumeHeight = window.innerHeight * 1.25;
    return (
      <div>
        <h1 className="no-margin">My Resume</h1>
        <div className="m-5" />
        <h3 className="subtitle">Last updated: March 2020</h3>
        <Line />
        <div style={{ height: resumeHeight, overflow: 'hidden' }}>
          <Document file={resume}>
            <Page height={resumeHeight} pageNumber={1} onLoadSuccess={removeTextLayerOffset} renderAnnotationLayer />
          </Document>
        </div>
        <div className="m-10" />
        <a className="text small" href={resume} download>
          Download PDF
        </a>
      </div>
    );
  }
}

export default ResumePage;
