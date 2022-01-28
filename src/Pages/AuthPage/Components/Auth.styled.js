import styled from 'styled-components';

const AuthDiv = styled.div`
  padding: 2rem;
  display: flex;

  flex-direction: column;

  #domain::before {
    content: '@student.42seoul.kr';
    color: #fff;
  }

  * {
    text-align: center;
  }
`;

const Styled = { AuthDiv };

export default Styled;
