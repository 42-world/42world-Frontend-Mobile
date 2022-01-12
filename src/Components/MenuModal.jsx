import Modal from "@mui/material/Modal";
import globalStyled from "../Utils/global.styled";

const MenuModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <globalStyled.CusBox>
        <button onClick={handleClose}> 돌아가기</button>
        <div>개발에 관련된 것을 모두 모아!</div>
        <div>42 사람들의 이야기를 듣습니다.</div>
        <div>42드 프로젝트를 찾고 계시나요?</div>
        <div>개발질문은 이제 general이 아니라 여기!</div>
      </globalStyled.CusBox>
    </Modal>
  );
};

export default MenuModal;
