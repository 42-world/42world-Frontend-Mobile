import styled, { keyframes } from 'styled-components';
import GlobalStyled from '../../../Styled/Global.styled';

import { TextField } from '@mui/material';
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const ErrorSpan = styled.span`
  position: absolute;
  font-size: 0.5rem;
  color: #f00;
  transform: translateY(25px);
  ${props => {
    if (!props.isError)
      return `
      opacity: 0;
      transition: transform 300ms ease-in-out 0ms, opacity 500ms;
      `;
    else
      return `
      opacity: 1;
      transition: transform 200ms ease-in-out 0ms, opacity 500ms;
      transform: translateY(30px);
      `;
  }};
`;

const Input = styled(TextField)`
  && {
    * {
      color: ${GlobalStyled.theme.textColorLight};
    }
    #filled-error-helper-text {
      padding: 10px 12px;
    }
    #filled-error-helper-text-label {
    }
    .css-p0rm37 {
      transform: translate(14px, 12px) scale(1);
    }
    .css-igs3ac {
      transition: border-color 500ms ease-in-out 0ms;
    }
  }
`;

const AuthDiv = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  height: 100%;
  gap: 10px;

  color: ${GlobalStyled.theme.textColorWhite};
  fill: ${GlobalStyled.theme.textColorWhite};

  .input_div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.7rem;
    gap: 10px;
    align-items: center;

    .domain {
      flex: 1 1 40%;
      top: 50%;
      /* transform: translateY(-50%); */
      color: ${GlobalStyled.theme.textColorLight};
      font-weight: 600;
      content: '@student.42seoul.kr';
    }
  }

  .send_button {
    width: 100%;
    margin-bottom: 1rem;
    color: ${GlobalStyled.theme.textColorWhite};
    background-color: ${GlobalStyled.theme.primary};
    &:hover {
      /* color: ${GlobalStyled.theme.textColorWhite}; */
      background-color: ${GlobalStyled.theme.disabled};
      /* background-color: #0000001f; */
    }
    &:active {
      /* color: ${GlobalStyled.theme.textColorWhite}; */
      background-color: ${GlobalStyled.theme.primary};
    }
    &:focus {
      color: ${GlobalStyled.theme.textColorWhite};
      background-color: ${GlobalStyled.theme.primary};
    }
    &:disabled {
      background-color: ${GlobalStyled.theme.disabled};
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
    animation: ${fadeIn} 500ms ease-out 0ms;
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
    animation: ${fadeIn} 500ms ease-out 1000ms;
    animation-fill-mode: backwards;
  }
`;

const Styled = { AuthDiv, ErrorSpan, Input };

export default Styled;
