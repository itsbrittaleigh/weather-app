import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.mustard};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  color: ${props => props.theme.charcoal};
  font-family: ${props => props.theme.font};
  font-size: 16px;
  padding: 10px 15px;

  &.is-disabled {
    background-color: ${props => props.theme.gray};
    cursor: not-allowed;
  }
`;

export default Button;
