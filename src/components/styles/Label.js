import styled from 'styled-components';

const Label = styled.label`
  flex: 1;
  margin-right: 10px;
  position: relative;

  .Label__text {
    color: ${props => props.theme.gray};
    font-size: 16px;
    left: 15px;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: ${props => props.theme.transition};
  }

  .Label--alternate {
    color: ${props => props.theme.burgundy};
    cursor: pointer;
    font-size: 12px;
    position: absolute;
    right: 0;
    text-transform: lowercase;
    top: calc(100% + 3px);
  }

  &:focus-within,
  &.Label--lifted {
    .Label__text {
      color: ${props => props.theme.charcoal};
      font-size: 12px;
      top: -16px;
      transform: translateY(0);
      left: 0;
    }
  }
`;

export default Label;
