import styled from 'styled-components';

const AuthDiv = styled.div`
  padding: 1rem;
  color: #fff;
  div {
    margin-bottom: 0.5rem;
    margin-left: 0.2rem;
  }
  input {
    width: 6rem;
    padding: 0.2rem 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    margin-right: 0.3rem;
    font-size: 0.9rem;
  }
  button {
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
    color: #fff;
    background-color: #53b7ba;
    border: 1px solid #53b7ba;
    border-radius: 0.2rem;
    margin-left: 0.5rem;
  }
  span::before {
    content: '@student.42seoul.kr';
    color: #fff;
  }
`;

const Styled = { AuthDiv };

export default Styled;
