import styled from 'styled-components';

const ErrorBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: #2a2d38;
  #logo {
    z-index: 0;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }
  #button {
    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ErrorBox = styled.div`
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  h1 {
    z-index: 1;
    font-size: 6rem;
  }
  h1,
  h2 {
    position: relative;
    text-align: center;
    color: #FFFFFF;
  }
  h3 {
    color: #aaaaaa;
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

const Styled = { ErrorBackground, ErrorBox };

export default Styled;
