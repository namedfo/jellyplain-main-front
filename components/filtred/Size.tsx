import { useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

export default function Size() {
  const [isOpen, setIsOpen] = useState(true);

  const onToggle = () => setIsOpen((prev) => !prev);
  return (
    <div className="flex flex-col mt-[-5px] py-[7px] cursor-pointer">
      <div onClick={onToggle} className="flex justify-between">
        <span className="text-[#292928] font-medium text-[18px] sm:text-[20px]">Размер</span>
        <button className="hover:bg-[#8045C61A] p-[3px] rounded-[10px]">
          {isOpen ? (
            <AiOutlineArrowUp color="#292928" size={26} />
          ) : (
            <AiOutlineArrowDown color="#292928" size={26} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col">
          <span className="leading-[0px] text-slate-700 mt-[15px]">обувь</span>
          <div className="my-[7px] flex flex-wrap justify-start">
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              36
            </button>
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              37
            </button>
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              37.5
            </button>
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              38
            </button>
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              39
            </button>
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              40
            </button>
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              41
            </button>
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              42
            </button>
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              43
            </button>
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              44
            </button>
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              45
            </button>
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              46
            </button>
          </div>
          <span className="leading-[0px] text-slate-700 mt-[10px]">одежда</span>
          <div className="my-[7px] flex flex-wrap justify-start">
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              S
            </button>
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              M
            </button>
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              L
            </button>
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              XL
            </button>
            <button className="border hover:bg-slate-200 text-[#444444] my-[5px] mx-[5px] px-[17px] py-[3px] rounded-[10px]">
              XXL
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
