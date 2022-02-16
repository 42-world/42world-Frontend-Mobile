import styled from 'styled-components';

import Link from '@mui/material/Link';

const MenuModalDiv = styled.div`
  background-color: rgba(42, 45, 56, 1);
  padding: 0.8rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 43%;
    height: auto;
    cursor: pointer;
  }
`;

const MenuItem = styled(Link)`
  &&{
    display: flex;
    flex-direction: row;
    margin: 0.7rem 0;
    align-items: center;
    color: #efefef;
  }

  .menu_item_icon_bg {
    background-color: #efefef;
    margin-right: 0.8rem;
    width: 3.7rem;
    height: 3.7rem;
    border-radius: 0.4rem;
    overflow: hidden;
  }

  .menu_item_icon {
    with: 100%;
    height: 100%;
    background: ${props => {
      if (props.icon)
        return `url(${props.icon}) no-repeat center center / contain`;
      return '#fff';
    }}
  }

  .menu_item_text {
    box-sizing: content-box;
    margin-left: 0.3rem
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    font-decoration: none;
    cursor: pointer;
    transition: all 0.3s;

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      text-decoration: none;
      color: #fff;
      margin-top: 0.2rem;
    }
    h3 {
      font-size: 0.68rem;
      font-weight: 400;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.75);
    }
  }
`;

const QuickLinkDiv = styled.div`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0.5rem;
  }
  h1 {
    display: flex;
    font-size: 1.1rem;
    font-weight: 900;
    padding: 0.5rem 1rem;
    margin: 0 1.5rem;
    border-bottom: 1px solid #efefef;
    justify-content: center;
    align-items: center;
  }
`;

const ContactUsDiv = styled.div`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: auto;
  }
  h1 {
    display: flex;
    font-size: 1.1rem;
    font-weight: 900;
    padding: 0.5rem 1rem;
    margin: 0 1.5rem;
    border-bottom: 1px solid #efefef;
    justify-content: center;
    align-items: center;
  }
  .icon_list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.8rem 1rem;
    .icon_div {
      width: max-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
      h2 {
        margin-top: 0.1rem;
        font-size: 0.5rem;
      }
    }
  }
  h3 {
    display: flex;
    font-weight: 300;
    padding: 0.8rem;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    span {
      font-weight: 800;
      margin-left: 0.2rem;
    }
  }
`;

const Styled = { MenuItem, QuickLinkDiv, ContactUsDiv, MenuModalDiv };

export default Styled;
