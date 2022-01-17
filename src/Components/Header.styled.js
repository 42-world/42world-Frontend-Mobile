import styled from 'styled-components';

const HeaderStyleDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
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
    text-align: right;
    * {
      margin-left: 0.5rem;
    }
  }
`;

const Styled = { HeaderStyleDiv };

export default Styled;
