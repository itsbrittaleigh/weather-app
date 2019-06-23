import styled from 'styled-components';

const Nav = styled.nav`
  margin: 40px 0 80px;

  ul {
    align-items: center;
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: ${props => props.theme.burgundy};
    text-decoration: none;
    text-transform: lowercase;
  }
`;

export default Nav;
