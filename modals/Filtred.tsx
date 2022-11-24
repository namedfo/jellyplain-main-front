import { AiOutlineArrowLeft } from "react-icons/ai";
// components
import Brand from "../components/filtred/Brand";
import Price from "../components/filtred/Price";
import Size from "../components/filtred/Size";
import Color from "../components/filtred/Color";


export default function Filtred({ onClose }: any) {
  return (
    <div className="w-full py-[15px] px-[20px] bg-white flex flex-col overflow-y-auto justify-between h-full absolute z-20">
      <div className="flex flex-col">
        <Header onClose={onClose} />
        <div className="flex py-[10px] flex-col">
          <Price />
          <Size />
          <Brand />
          <Color />
        </div>
      </div>
      <button className="bg-indigo-500 hover:bg-indigo-700 text-[18px] font-medium text-white py-[4px] rounded-[10px]">
        Применить
      </button>
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