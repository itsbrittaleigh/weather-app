import styled from 'styled-components';

const Input = styled.input`
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.gray};
  font-size: 16px;
  padding: 10px 15px;
  width: 100%;
`;

export default Input;
