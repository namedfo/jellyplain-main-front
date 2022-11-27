import { BsArrowRightShort } from "react-icons/bs";
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
    padding: "10px 15px",
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
      <div>
         <div className="flex text-[7px] sm:text-[12px] justify-between">
            <div className="flex text-gray-400 items-center">
              <span>Оплачено</span>
              <BsArrowRightShort size={22} />
            </div>
            <div className="flex text-red-600 items-center">
              <span>Ожидает подтверждения</span>
              <BsArrowRightShort size={22} />
            </div>
            <div className="flex text-gray-400 items-center">
              <span>Подтвержденно</span>
              <BsArrowRightShort size={22} />
            </div>
            <div className="flex text-gray-400 items-center">
              <span>В пути</span>
            </div>
          </div>
      </div>
    </Modal>
  );
}
