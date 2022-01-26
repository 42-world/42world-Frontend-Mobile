import styled from 'styled-components';

const LoginPageBackground = styled.div`
  width: 100vh;
  height: 100vh;
  background: #2a2d38;
`;

const LoginPageBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  h1 {
    font-size: 3rem;
    width: 100%;
    text-align: center;
    color: #fff;
  }
  button {
    height: 50px;
    width: 250px;
    background: #53b7ba;
    border-radius: 10px;
    gap: 10px;
  }
`;

const Styled = { LoginPageBackground, LoginPageBox };

export default Styled;
