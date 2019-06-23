import styled from 'styled-components';

const FormField = styled.div`
  flex: 1;
  margin-right: 10px;
  position: relative;

  .Label--alternate {
    color: ${props => props.theme.burgundy};
    cursor: pointer;
    font-size: 12px;
    position: absolute;
    right: 0;
    text-transform: lowercase;
    top: calc(100% + 3px);
  }
`;

export default FormField;
