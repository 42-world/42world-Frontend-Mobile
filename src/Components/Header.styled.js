import styled from 'styled-components';
import GlobalStyled from '../Styled/Global.styled';

const HeaderStyleDiv = styled.div`
  background-color: ${GlobalStyled.theme.secondary};
  box-sizing: border-box;
  max-width: 24.5rem;
  width: 100%;
  display: flex;
  height: 4.5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.8rem;
  z-index: 1;

  position: fixed;
  top: 0;

  svg {
    cursor: pointer;
  }
  div {
    width: 100%;
    flex-grow: 1;
  }
  div:nth-child(3) {
    flex-direction: row-reverse;
    display: flex;
    flex-wrap: nowrap;
    * {
      margin-left: 0.5rem;
    }
  }
`;

const Styled = { HeaderStyleDiv };

export default Styled;
