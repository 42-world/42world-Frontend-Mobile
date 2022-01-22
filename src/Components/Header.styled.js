import styled from 'styled-components';

const HeaderStyleDiv = styled.div`
  background-color: rgba(42, 45, 56, 1);
  box-sizing: border-box;
  width: 100%;
  display: flex;
  height: 4.5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.8rem;

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
