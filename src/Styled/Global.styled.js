import styled from 'styled-components';

const theme = {
  primary: '#53b7ba',
  secondary: 'rgba(42, 45, 56, 1)',
  background: '#f5f5f5',
  text: '#000',
  textSecondary: '#666',
  textLightSecondary: '#ccc',

  textColor: '#000',
  textColorSecondary: '#666',
  textColorGray: '#979797',
  textColorLightGray: '#ddd',
  textColorLight: '#eee',
  textColorWhite: '#fff',

  likedIconColor: '#df867d',
  commentIconColor: '#53b7ba',

  borderColor: '#e6e6e6',
  borderRadius: '0.25rem',

  headerHeight: '4.5rem',
  headerBackgroundColor: 'rgba(42, 45, 56, 1)',
  headerIconColor: '#fff',

  categoryNameBackgroundColor: '#4C5A66',
  categoryNameTextColor: '#FFF',

  mobileMinWidth: '28rem',
  desktopWidth: '24.5rem',

  likedCountColor: '#DF867D',
  commentCountColor: '#53B7BA',
};

const assets = {
  headerLogo: '/assets/headerLogo.svg',
  sidebar: {
    '80000co': '/assets/Sidebar/80000co.png',
    humansof42: '/assets/Sidebar/humansof42.png',
    giggle: '/assets/Sidebar/giggle.png',
    '42doproject': '/assets/Sidebar/42doproject.png',
    '42swim': '/assets/Sidebar/42swim.png',
    '42psychic': '/assets/Sidebar/42psychic.png',
  },
};

const ProfileBackgroundDiv = styled.div`
  // position
  //position: absolute;
  //top: 0px;
  //left: 0px;

  // layout
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  padding-top: 0.7rem;

  // size
  width: 100%;
  height: 100%;

  // color
  background-color: #2a2d38;
`;

const BoardTitleDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  background-color: ${theme.categoryNameBackgroundColor};
  color: ${theme.categoryNameTextColor};
  padding: 0.65rem 1.2rem;
  align-items: center;
  justify-content: space-between;

  .board_name {
    font-size: 1.1rem;
    font-weight: 700;
  }
`;

const GlobalStyled = { theme, assets, ProfileBackgroundDiv, BoardTitleDiv };

export default GlobalStyled;
