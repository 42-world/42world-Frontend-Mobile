import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import BookIcon from '@mui/icons-material/Book';

import globalStyled from '../Utils/global.styled';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';

import Styled from './MenuModal.styled';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
//import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const siteMap = [
  {
    name: '팔만코딩경',
    link: 'https://80000coding.oopy.io/',
    desc: '개발에 관련된 것을 모두 모아!',
    icon: '',
  },
  {
    name: 'Humans of 42',
    link: 'https://humansof42.com/',
    desc: '42 사람들의 이야기를 듣습니다.',
    icon: '',
  },
  {
    name: '42DoProject',
    link: 'https://42doproject.com/',
    desc: '42드 프로젝트를 찾고 계시나요?',
    icon: '',
  },
  {
    name: '42SWIM',
    link: 'https://swim.42seoul.io/',
    desc: '42 스택 오버플로우',
    icon: '',
  },
  {
    name: '42Psychic',
    link: 'https://devfor.fun/',
    desc: '당신의 평가자를 점쳐보세요...',
    icon: '',
  },
];

const MenuItem = ({ item, index }) => {
  return (
    <Styled.MenuItem
      href={item.link}
      sx={{
        textDecoration: 'none',
      }}
      icon={item.icon}
    >
      <div className="menu_item_icon" icon={item.icon}></div>
      <div className="menu_item_text">
        <h2>{item.name}</h2>
        <h3>{item.desc}</h3>
      </div>
    </Styled.MenuItem>
  );
};

const QuickLink = () => {
  return (
    <Styled.QuickLinkDiv>
      <h1>Quick Link</h1>
      <List>
        {siteMap.map((item, index) => (
          <MenuItem item={item} index={index} />
        ))}
      </List>
    </Styled.QuickLinkDiv>
  );
};

const githubLink = '깃링크';
const emailLink = 'mailto:이메일링크';
const articleLink = '블로그링크';

const ContactUs = () => {
  const handleClick = useCallback(link => {
    window.open(link);
  }, []);
  return (
    <Styled.ContactUsDiv>
      <h1>Contact Us</h1>
      <div className="icon_list">
        <div className="icon_div">
          <GitHubIcon onClick={() => handleClick(githubLink)} />
          <h2>GitHub</h2>
        </div>
        <div className="icon_div">
          <EmailIcon onClick={() => handleClick(emailLink)} />
          <h2>Mail</h2>
        </div>
        <div className="icon_div">
          <BookIcon onClick={() => handleClick(articleLink)} />
          <h2>Blog</h2>
        </div>
      </div>
      <h3>
        team<span>heyinsa</span>
      </h3>
    </Styled.ContactUsDiv>
  );
};

const MenuModal = ({ open, onClickCloseModal }) => {
  const navi = useNavigate();

  return (
    <Box
      sx={{
        width: '18rem',
        maxWidth: '100%',
        color: 'white',
      }}
    >
      <Styled.MenuModalDiv>
        <img
          src="assets/headerLogo.svg"
          alt="header-logo"
          onClick={() => navi('/')}
        />
        <QuickLink />
        <ContactUs />
      </Styled.MenuModalDiv>
    </Box>
  );
};

export default MenuModal;
