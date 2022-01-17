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

const MenuItem = ({ item, index }) => {
  return (
    <Link
      href={item.link}
      sx={{
        textDecoration: 'none',
      }}
    >
      <Styled.MenuItemDiv>
        <h3>{item.desc}</h3>
        <h2>{item.name}</h2>
      </Styled.MenuItemDiv>
    </Link>
  );
};

const MenuModal = ({ open, onClickCloseModal }) => {
  let siteMap = [
    {
      name: '팔만코딩경',
      link: 'https://80000coding.oopy.io/',
      desc: '개발에 관련된 것을 모두 모아!',
    },
    {
      name: 'Humans of 42',
      link: 'https://humansof42.com/',
      desc: '42 사람들의 이야기를 듣습니다.',
    },
    {
      name: '42Do 프로젝트',
      link: 'https://42doproject.com/',
      desc: '42드 프로젝트를 찾고 계시나요?',
    },
    {
      name: '42SWIM',
      link: 'https://swim.42seoul.io/',
      desc: '개발질문은 이제 general이 아니라 여기!',
    },
    {
      name: 'Devfor',
      link: 'https://devfor.fun/',
      desc: '당신의 평가자는 누구?',
    },
  ];
  return (
    <Box
      sx={{
        width: '18rem',
        height: '100%',
      }}
      role="presentation"
    >
      <List>
        {siteMap.map((item, index) => (
          <MenuItem item={item} index={index} />
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Divider />
      <h1>Contact Us</h1>

      <div>42world.official@gmail.com</div>
      <Link
        sx={{ color: 'black' }}
        href="https://github.com/42-world"
        underline="none"
      >
        <div>github</div>
      </Link>
      <div>010-4692-7506</div>

      <button onClick={onClickCloseModal}> 돌아가기</button>
    </Box>
  );
};

export default MenuModal;
