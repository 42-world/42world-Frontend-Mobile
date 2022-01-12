import globalStyled from '../Utils/global.styled';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';

const MenuModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <globalStyled.CusBox>
        <h1>lots of 42</h1>
        <CloseIcon onClick={handleClose} />
        <Link
          sx={{ color: 'black' }}
          href="https://80000coding.oopy.io/"
          underline="none"
        >
          <div>개발에 관련된 것을 모두 모아!</div>
        </Link>
        <Link
          sx={{ color: 'black' }}
          href="https://humansof42.com/"
          underline="none"
        >
          <div>42 사람들의 이야기를 듣습니다.</div>
        </Link>
        <Link
          sx={{ color: 'black' }}
          href="https://42doproject.com/"
          underline="none"
        >
          <div>42드 프로젝트를 찾고 계시나요?</div>
        </Link>
        <Link
          sx={{ color: 'black' }}
          href="https://swim.42seoul.io/"
          underline="none"
        >
          <div>개발질문은 이제 general이 아니라 여기!</div>
        </Link>
        <Link
          sx={{ color: 'black' }}
          href="https://devfor.fun/"
          underline="none"
        >
          <div>당신의 평가자는 누구?</div>
        </Link>
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

        <button onClick={handleClose}> 돌아가기</button>
      </globalStyled.CusBox>
    </Modal>
  );
};

export default MenuModal;
