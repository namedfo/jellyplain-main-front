import { AiOutlineArrowLeft } from "react-icons/ai";
import useActions from "../hooks/useActions";

export default function Filtred({ onClose }: any) {
  return (
    <div className="w-full py-[15px] px-[20px] bg-white flex flex-col justify-between h-full absolute z-10">
      <div className="flex flex-col">
        <Header onClose={onClose} />
      </div>
      <button>Применить</button>
    </div>
  );
}

const Header = ({ onClose }: any) => {
  return (
    <div className="flex items-center">
      <button
        onClick={onClose}
        className="absolute rounded-[10px] p-[3px] hover:bg-[#8A63B91A]"
      >
        <AiOutlineArrowLeft size={26} color="#86368d" />
      </button>
      <span className="w-full font-medium text-[20px] text-[#2f2e2e] text-center">
        Фильтрация
      </span>
    </div>
  );
};
