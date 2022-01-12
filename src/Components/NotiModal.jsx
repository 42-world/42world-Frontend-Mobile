import Modal from "@mui/material/Modal";

const NotiModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>알림!!</div>
    </Modal>
  );
};

export default NotiModal;
