import styled from 'styled-components';
import GlobalStyled from '../Styled/Global.styled';

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-top: auto;
  div {
    margin-top: auto;
    display: flex;
    flex-direction: row;
    margin-bottom: 0.1rem;

    img {
      width: 1.5rem;
      margin: 0.3rem;
    }
  }
  h6 {
    font-size: 0.6rem;
    font-weight: 700;
    color: ${GlobalStyled.theme.textColorGray};
  }
`;

const Styled = { Footer };

export default Styled;