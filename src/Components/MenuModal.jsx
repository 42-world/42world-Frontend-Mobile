import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import BookIcon from '@mui/icons-material/Book';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

import GlobalStyled from '../Styled/Global.styled';
import Styled from './MenuModal.styled';

const siteMap = [
  {
    name: '팔만코딩경',
    link: 'https://80000coding.oopy.io/',
    desc: '개발에 관련된 것을 모두 모아!',
    icon: GlobalStyled.assets.sidebar['80000co'],
  },
  {
    name: 'Humans of 42',
    link: 'https://humansof42.com/',
    desc: '42Seoul의 이야기를 전합니다',
    icon: GlobalStyled.assets.sidebar['humansof42'],
  },
  {
    name: 'Giggle Forest',
    link: 'https://giggleforest.com/',
    desc: '귀여운 아바타로 대화해보세요',
    icon: GlobalStyled.assets.sidebar['giggle'],
  },
  {
    name: '42DoProject',
    link: 'https://42doproject.com/',
    desc: '42서울 사이드 프로젝트 플랫폼',
    icon: GlobalStyled.assets.sidebar['42doproject'],
  },
  {
    name: '42SWIM',
    link: 'https://swim.42seoul.io/',
    desc: '42서울의 Q&A 커뮤니티',
    icon: GlobalStyled.assets.sidebar['42swim'],
  },
  {
    name: '42Psychic',
    link: 'https://devfor.fun/',
    desc: '당신의 평가자를 점쳐보세요...',
    icon: GlobalStyled.assets.sidebar['42psychic'],
  },
  {
    name: '42Blind',
    link: 'https://42blind.com',
    desc: '42카뎃들을 위한 익명 소통공간',
    icon: GlobalStyled.assets.sidebar['42blind'],
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
      <div className="menu_item_icon_bg">
        <div className="menu_item_icon" icon={item.icon}></div>
      </div>
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

const githubLink = 'https://github.com/42-world';
const emailLink = 'mailto:42world.official@gmail.com';
const articleLink = 'https://euimin.notion.site/42WORLD-925997bb2e7245b48fca5afeb298db76';

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
        © 2022.<span> Team 42world</span>
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
          src={GlobalStyled.assets.headerLogo}
          alt="header-logo"
          onClick={onClickCloseModal}
        />
        <QuickLink />
        <ContactUs />
      </Styled.MenuModalDiv>
    </Box>
  );
};

export default MenuModal;
