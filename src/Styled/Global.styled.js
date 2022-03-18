import styled from 'styled-components';

const theme = {
  // Main Theme
  primary: '#53b7ba',
  secondary: '#2a2d38',
  primaryEcole: '#387e9c',
  white: '#fff',
  black: '#000',

  //Background Color
  backgroundTheme1: '#696b72',
  backgroundTheme2: '#40424c',
  backgroundTheme3: '#2a2d38',
  backgroundWhite: '#fff',
  backgroundGray1: '#f9f9f9',
  backgroundGray2: '#eaeaea',
  backgroundGray3: '#c4c4c4',
  backgroundBlack: '#000',
  backgroundBlue1: '#e4f3f3',
  backgroundBlue2: '#53b7ba',
  backgroundBlue3: '#4c5a66',

  //Text Color
  textWhite: '#fff',
  textGray1: '#eee',
  textGray2: '#c4c4c4',
  textGray3: '#979797',
  textGray4: '#5f5f5f',
  textBlack: '#000',
  textBlue: '#53b7ba',
  textRed: '#df867d',

  //Button Color
  buttonWhite: '#fff',
  buttonGray1: '#d8d8d8',
  buttonGray2: '#b4b4b4',
  buttonBlack: '#000',
  buttonBlue1: '#bce0e1',
  buttonBlue2: '#53b7ba',
  buttonRed1: '#df867d',
  buttonRed2: '#ad0000',

  //Line Color
  lineGray1: '#d8d8d8',
  lineGray2: '#e6e6e6',
  lineGray3: '#f9f9f9',
  lineBlue1: '#dadde6',

  //Length
  borderRadius: '0.25rem',
  headerHeight: '4.5rem',
  mobileMinWidth: '28rem',
  desktopWidth: '24.5rem',
};

const assets = {
  headerLogo: '/assets/42mainlogo.png',
  sidebar: {
    '80000co': '/assets/sidebar/80000co.png',
    humansof42: '/assets/sidebar/humansof42.png',
    giggle: '/assets/sidebar/giggle.png',
    '42doproject': '/assets/sidebar/42doproject.png',
    '42swim': '/assets/sidebar/42swim.png',
    '42psychic': '/assets/sidebar/42psychic.png',
    '42blind': '/assets/sidebar/42blind.png',
  },
  footer: {
    github: '/assets/Footer/github.svg',
    mail: '/assets/Footer/mail.svg',
    article: '/assets/Footer/article.svg',
  },
};

const ProfileBackgroundDiv = styled.div`
  // layout
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  /* padding-top: 0.7rem; */

  // size
  width: 100%;
  height: 100%;

  // color
  background-color: ${props =>
    props.isProfile ? theme.backgroundTheme3 : theme.backgroundGray1};
`;

const BoardTitleDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  background-color: ${theme.backgroundBlue3};
  color: ${theme.textWhite};
  // padding: 0.65rem 1.2rem;
  padding: 0.65rem 1rem;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  .board_name {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 700;
  }
`;

const GlobalStyled = { theme, assets, ProfileBackgroundDiv, BoardTitleDiv };

export default GlobalStyled;
