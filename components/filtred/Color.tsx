import { useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

export default function Color() {
  const [isOpen, setIsOpen] = useState(true);

  const onToggle = () => setIsOpen((prev) => !prev);
  return (
    <div className="flex flex-col mt-[-5px] py-[7px] cursor-pointer">
      <div onClick={onToggle} className="flex justify-between">
        <span className="text-[#292928] font-medium text-[20px]">Цвет</span>
        <button className="hover:bg-[#8045C61A] p-[3px] rounded-[10px]">
          {isOpen ? (
            <AiOutlineArrowUp color="#292928" size={26} />
          ) : (
            <AiOutlineArrowDown color="#292928" size={26} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="my-[7px] flex flex-col">
          <div className="flex justify-around">
            <div className="w-[50px] rounded-[8px] h-[30px] bg-white border" />
            <div className="w-[50px] rounded-[8px] h-[30px] bg-[#a78bfa] border" />
            <div className="w-[50px] rounded-[8px] h-[30px] bg-[#facc15] border" />
            <div className="w-[50px] rounded-[8px] h-[30px] bg-black border" />
          </div>
        </div>
      )}
    </div>
  );
}
