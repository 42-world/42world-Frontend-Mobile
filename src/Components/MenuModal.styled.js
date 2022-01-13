import styled from 'styled-components';

const MenuItemDiv = styled.div`
  box-sizing: content-box;
  padding: 0.5rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  font-decoration: none;
  cursor: pointer;
  transition: all 0.3s;
  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    color: rgb(0, 0, 0);
  }
  h3 {
    font-size: 0.55rem;
    font-weight: 400;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
  }
  &:hover {
    background-color: #f5f5f5;
    border-left: 5px solid #999;
    transition: all 0.3s;
  }
`;

const Styled = { MenuItemDiv };

export default Styled;
