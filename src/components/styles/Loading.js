import styled from 'styled-components';

const Loading = styled.div`
  margin: 0 auto;
  text-align: center;

  div {
    animation-fill-mode: both;
    animation: bouncedelay 1.4s infinite ease-in-out;
    background-color: ${props => props.theme.charcoal};
    border-radius: 100%;
    display: inline-block;
    height: 10px;
    margin: 0 10px;
    width: 10px;
  }

  .bounce1 {
    animation-delay: -0.32s;
  }

  .bounce2 {
    animation-delay: -0.16s;
  }

  @keyframes bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

export default Loading;
