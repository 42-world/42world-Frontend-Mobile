import Modal from "@mui/material/Modal";
import globalStyled from "../Utils/global.styled";

const NotiModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <globalStyled.CusBox>알림!!</globalStyled.CusBox>
    </Modal>
  );
};

export default NotiModal;
