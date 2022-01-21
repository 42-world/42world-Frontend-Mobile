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
    icon: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ac2438dc-730e-4f54-aadc-8e8c5b7f3154/80000co.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220121T081545Z&X-Amz-Expires=86400&X-Amz-Signature=a43017de5e85eb4c00d20d8f0b107d5d84769e392441b26d696fbf2c4941c5ed&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2280000co.png%22&x-id=GetObject',
  },
  {
    name: 'Humans of 42',
    link: 'https://humansof42.com/',
    desc: '42Seoul의 이야기를 전합니다',
    icon: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/758677d0-6291-4e46-8264-bc054084df26/humansof42_logo_42world.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220121T081643Z&X-Amz-Expires=86400&X-Amz-Signature=90be2afdd348cc2314354b413cdd26697166a5039db3f4871b4b44c8b6e94228&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22humansof42_logo_42world.png%22&x-id=GetObject',
  },
  {
    name: 'Giggle Forest',
    link: 'https://giggleforest.com/',
    desc: '귀여운 아바타로 대화해보세요',
    icon: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08036b8e-ee3c-4112-9886-9eb85f5a40ea/giggle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220121T081740Z&X-Amz-Expires=86400&X-Amz-Signature=eb9f25df157b559cb3b7b603a352104df11b479ab4d46eee1bab8e47b6354173&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22giggle.png%22&x-id=GetObject',
  },
  {
    name: '42DoProject',
    link: 'https://42doproject.com/',
    desc: '42서울 사이드 프로젝트 플랫폼',
    icon: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ae160784-9b09-4dbf-afb4-4725ed53b36f/42doproject.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220121T081825Z&X-Amz-Expires=86400&X-Amz-Signature=161d8e1b88b9b6aead850b386f985a8cf3d9c813b580999f49e1c7f892cf33ca&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2242doproject.png%22&x-id=GetObject',
  },
  {
    name: '42SWIM',
    link: 'https://swim.42seoul.io/',
    desc: '42서울의 Q&A 커뮤니티',
    icon: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/02cd7262-bcf8-4fb2-bb82-41011063fb16/42swimlogo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220121T081844Z&X-Amz-Expires=86400&X-Amz-Signature=0f42b8949f7d790e47fcfdf445432af0405abe0c4fdb5510726e26e60cfb26aa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2242swimlogo.png%22&x-id=GetObject',
  },
  {
    name: '42Psychic',
    link: 'https://devfor.fun/',
    desc: '당신의 평가자를 점쳐보세요...',
    icon: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/68fa58ae-45ec-4448-b45b-0b3bf3d82077/42psychic.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220121T081859Z&X-Amz-Expires=86400&X-Amz-Signature=936bf50587aad5c6228ddc29645884b0f661b8b43027dc18e42cc28380aa3bd7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2242psychic.png%22&x-id=GetObject',
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
          src="/assets/headerLogo.svg"
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
