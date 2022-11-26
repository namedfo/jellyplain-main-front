import Modal from "react-modal";

const customStyles: any = {
  overlay: {
    background: "rgba(35, 35, 35, 0.2)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    borderRadius: "10px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px 25px",
  },
};

Modal.setAppElement("#__next");

export default function OrderDetail({ isOpen, onClose }: any) {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onClose}
    >
    </Modal>
  );
}
