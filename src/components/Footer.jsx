import React from 'react';
import FooterStyles from './styles/Footer';
import Wrapper from './styles/Wrapper';

const Footer = () => (
  <FooterStyles>
    <Wrapper>
      <p>
        Powered by&nbsp;
        <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">OpenWeatherMap API</a>
      </p>
    </Wrapper>
  </FooterStyles>
);

export default Footer;
