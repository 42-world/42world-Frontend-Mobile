import { useState, useEffect } from 'react';
import UserService from '../Network/UserService';

import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import globalStyled from '../Utils/global.styled';

const NotiModal = ({ open, handleClose }) => {
  const [notiArticles, setNotiArticles] = useState([]);
  useEffect(() => {
    const mockupData = UserService;
    setNotiArticles(mockupData.Noti.fetchNotification());
  }, []);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <globalStyled.CusBox>
        <CloseIcon onClick={handleClose} />
        <List component="nav" aria-label="mailbox folders">
          {notiArticles.map(article => {
            return (
              <ListItem button divider className="article">
                <ListItemText>
                  <text>{article.type} </text>
                  <text> {article.content} </text>
                  <text> {article.time.toString()} </text>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </globalStyled.CusBox>
    </Modal>
  );
};

export default NotiModal;
