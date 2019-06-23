import styled from 'styled-components';

const Card = styled.div`
  align-items: center;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.gray};
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 20px;
  width: 100%;

  p {
    margin: 0;
  }
`;

export default Card;
