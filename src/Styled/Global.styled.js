import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    // transform: translateX(100%);
    transform: scale(1);
    opacity: 0.9;
    border-radius: 15px;
  }
  100% {
    // transform: translateX(0);
    transform: scale(1);
    border-radius: 0;
  }
`;

const theme = {
  primary: '#53b7ba',
  secondary: 'rgba(42, 45, 56, 1)',
  background: '#fff',
  text: '#000',
  textSecondary: '#666',
  textLight: '#fff',
  textLightSecondary: '#ccc',
  border: '#ccc',
  borderLight: '#eee',
  borderDark: '#999',
  borderRadius: '0.25rem',
  headerHeight: '4.5rem',

  mobileMinWidth: '28rem',
  desktopWidth: '24.5rem',

  likedCountColor: '#DF867D',
  commentCountColor: '#53B7BA',
};

const assets = {
  headerLogo: '/assets/headerLogo.svg',
  sidebar: {
    '80000co': '/assets/sidebar/80000co.png',
    humansof42: '/assets/sidebar/humansof42.png',
    giggle: '/assets/sidebar/giggle.png',
    '42doproject': '/assets/sidebar/42doproject.png',
    '42swim': '/assets/sidebar/42swim.png',
    '42psychic': '/assets/sidebar/42psychic.png',
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

  animation: ${slideIn} 1000ms ease-in-out 0ms;
`;

const GlobalStyled = { theme, assets, ProfileBackgroundDiv };

export default GlobalStyled;
