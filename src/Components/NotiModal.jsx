import { useState, useEffect } from 'react';
import UserService from '../Network/UserService';

import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const NotiModal = ({ open, onClickCloseModal }) => {
  const [notiArticles, setNotiArticles] = useState([]);
  useEffect(() => {
    const mockupData = UserService;
    setNotiArticles(mockupData.Noti.fetchNotification());
  }, []);
  return (
    <Modal
      open={open}
      onClose={onClickCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <CloseIcon onClick={onClickCloseModal} />
        <List component="nav" aria-label="mailbox folders">
          {notiArticles.map(article => {
            return (
              <ListItem button divider className="article" key={article.id}>
                <ListItemText>
                  <text>{article.type} </text>
                  <text> {article.content} </text>
                  <text> {article.time.toString()} </text>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </div>
    </Modal>
  );
};

export default NotiModal;
