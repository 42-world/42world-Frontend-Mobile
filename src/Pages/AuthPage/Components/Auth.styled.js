import styled from 'styled-components';
import GlobalStyled from '../../../Styled/Global.styled';

const AuthDiv = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  height: 100%;

  color: ${GlobalStyled.theme.textColorWhite};
  fill: ${GlobalStyled.theme.textColorWhite};

  .input_div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.7rem;

    input {
      width: 100%;
      font-size: 0.8rem;
      padding: 0.3rem 0.7rem;
      border-radius: 0.3rem;
      border: none;
      outline: none;
      margin-right: 0.5rem;
    }

    .domain {
      color: ${GlobalStyled.theme.textColorLight};
      &::after {
        content: '@student.42seoul.kr';
      }
    }
  }

  .send_button {
    width: 100%;
    margin-bottom: 1rem;
    color: ${GlobalStyled.theme.textColorWhite};
    background-color: ${GlobalStyled.theme.primary};
    &:hover {
      color: ${GlobalStyled.theme.textColorWhite};
      background-color: ${GlobalStyled.theme.primary};
    }
    &:active {
      color: ${GlobalStyled.theme.textColorWhite};
      background-color: ${GlobalStyled.theme.primary};
    }
    &:focus {
      color: ${GlobalStyled.theme.textColorWhite};
      background-color: ${GlobalStyled.theme.primary};
    }
  }

  .send_info {
    display: flex;
    flex-direction: column;
    div {
      margin-top: 2rem;
      h2 {
        font-size: 1.2rem;
        color: ${GlobalStyled.theme.primary};
        font-weight: 700;
      }
      h3 {
        font-size: 1rem;
        color: ${GlobalStyled.theme.textColorLight};
        font-weight: 400;
      }
    }
  }

  .error_info {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    padding: 1rem 0;
    align-items: center;

    h4 {
      font-size: 0.8rem;
      color: ${GlobalStyled.theme.textColorLight};
      font-weight: 400;
      &:first-child {
        margin-bottom: 0.5rem;
      }
    }

    button {
      margin-top: 1rem;
      width: max-content;
      color: ${GlobalStyled.theme.textColorWhite};
      text-decoration: underline;
      border: none;
      background: none;
      outline: none;
      cursor: pointer;
    }
  }
`;

const Styled = { AuthDiv };

export default Styled;
