import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import faceImage from '../images/a-p.jpg';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div className="wrap">
    <Helmet
      title="A-P.fi - Apunasi digitaalisessa muutoksessa."
      meta={[
        { name: 'description', content: 'Autan erikokoisia yrityksiä, yhdistyksiä ja yhteisöjä hyödyntämään digitaalisen kehityksen mukanaan tuomia mahdollisuuksia.' },
      ]}
    />
    <div className="face">
      <img
        className="face-image"
        src={faceImage}/>
    </div>
    <div className="content">
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
