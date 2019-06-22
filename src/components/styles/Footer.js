import styled from 'styled-components';

const FooterStyles = styled.footer`
  p {
    color: ${props => props.theme.charcoal};
    font-size: 14px;
    text-align: right;
  }

  a {
    color: ${props => props.theme.burgundy};
    text-decoration: none;
  }
`;

export default FooterStyles;
