import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export default function Filtred() {
  return (
    <div className="rounded-[10px] p-[15px] bg-white shadow-jj w-[280px] flex flex-col divide-y">
      <Price />
      <Size />
      <Brand />
      <Color />
    </div>
  );
}

const Price = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col mt-[-5px] py-[7px] cursor-pointer">
      <div onClick={onToggle} className="flex justify-between">
        <span className="text-[#292928] font-medium text-[20px]">Цена</span>
        <button className="hover:bg-[#8045C61A] p-[3px] rounded-[10px]">
          {isOpen ? (
            <AiOutlineArrowUp color="#292928" size={26} />
          ) : (
            <AiOutlineArrowDown color="#292928" size={26} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="my-[7px] flex justify-between">
          <label className="border py-[2px] px-[5px] rounded-[5px] flex border-[#b3bcc5]">
            <span className="text-[#949ba2]">от</span>
            <input
              className="w-[80px] ml-[6px] outline-none rounded-[5px]"
              type="number"
            />
          </label>
          <label className="border py-[2px] px-[5px] flex rounded-[5px] border-[#b3bcc5]">
            <span className="text-[#949ba2]">до</span>
            <input
              className="w-[80px] ml-[6px] outline-none rounded-[5px]"
              type="number"
            />
          </label>
        </div>
      )}
    </div>
  );
};

const Size = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col mt-[-5px] py-[7px] cursor-pointer">
      <div onClick={onToggle} className="flex justify-between">
        <span className="text-[#292928] font-medium text-[20px]">Размер</span>
        <button className="hover:bg-[#8045C61A] p-[3px] rounded-[10px]">
          {isOpen ? (
            <AiOutlineArrowUp color="#292928" size={26} />
          ) : (
            <AiOutlineArrowDown color="#292928" size={26} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="my-[7px] flex justify-between">
          <label className="border py-[2px] px-[5px] rounded-[5px] flex border-[#b3bcc5]">
            <span className="text-[#949ba2]">от</span>
            <input
              className="w-[80px] ml-[6px] outline-none rounded-[5px]"
              type="number"
            />
          </label>
          <label className="border py-[2px] px-[5px] flex rounded-[5px] border-[#b3bcc5]">
            <span className="text-[#949ba2]">до</span>
            <input
              className="w-[80px] ml-[6px] outline-none rounded-[5px]"
              type="number"
            />
          </label>
        </div>
      )}
    </div>
  );
};

const Brand = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col mt-[-5px] py-[7px] cursor-pointer">
      <div onClick={onToggle} className="flex justify-between">
        <span className="text-[#292928] font-medium text-[20px]">Бренд</span>
        <button className="hover:bg-[#8045C61A] p-[3px] rounded-[10px]">
          {isOpen ? (
            <AiOutlineArrowUp color="#292928" size={26} />
          ) : (
            <AiOutlineArrowDown color="#292928" size={26} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="my-[7px] flex justify-between">
          <label className="border py-[2px] px-[5px] rounded-[5px] flex border-[#b3bcc5]">
            <span className="text-[#949ba2]">от</span>
            <input
              className="w-[80px] ml-[6px] outline-none rounded-[5px]"
              type="number"
            />
          </label>
          <label className="border py-[2px] px-[5px] flex rounded-[5px] border-[#b3bcc5]">
            <span className="text-[#949ba2]">до</span>
            <input
              className="w-[80px] ml-[6px] outline-none rounded-[5px]"
              type="number"
            />
          </label>
        </div>
      )}
    </div>
  );
};

const Color = () => {
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
};
