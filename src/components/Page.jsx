import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Content from './styles/Content';
import Footer from './Footer';
import Nav from './Nav';

const theme = {
  borderRadius: '3px',
  gray: '#AAAAAA',
  mustard: '#FFC857',
  charcoal: '#2E4052',
  burgundy: '#412234',
  font: 'Lato, sans-serif',
  transition: '0.2s ease-in-out',
  boxShadow: '0 4px 4px 0 #AAAAAA',
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 100;
    src: url('/static/lato/Lato-Hairline.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 100;
    src: url('/static/lato/Lato-HairlineItalic.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    src: url('/static/lato/Lato-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 300;
    src: url('/static/lato/Lato-LightItalic.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: normal;
    src: url('/static/lato/Lato-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: normal;
    src: url('/static/lato/Lato-Italic.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: url('/static/lato/Lato-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 700;
    src: url('/static/lato/Lato-BoldItalic.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 900;
    src: url('/static/lato/Lato-Black.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 900;
    src: url('/static/lato/Lato-BlackItalic.ttf') format('truetype');
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: 'Lato', serif;
  }
  body {
    color: ${props => props.theme.darkGray};
    margin: 0;
    padding: 0;
  }
`;

const propTypes = {
  children: PropTypes.shape({
    props: PropTypes.isRequired,
  }).isRequired,
};

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Content>
      <GlobalStyle />
      <Nav />
      <main>
        <>{children}</>
      </main>
      <Footer />
    </Content>
  </ThemeProvider>
);

Page.propTypes = propTypes;

export default Page;
