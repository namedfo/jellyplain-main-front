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
        <div className="my-[7px] flex flex-wrap justify-between">
          <button className="border hover:bg-slate-200 text-[#444444] my-[5px] px-[17px] py-[3px] rounded-[10px]">
            38
          </button>
          <button className="border hover:bg-slate-200 text-[#444444] my-[5px] px-[17px] py-[3px] rounded-[10px]">
            39
          </button>
          <button className="border hover:bg-slate-200 text-[#444444] my-[5px] px-[17px] py-[3px] rounded-[10px]">
            40
          </button>
          <button className="border hover:bg-slate-200 text-[#444444] my-[5px] px-[17px] py-[3px] rounded-[10px]">
            41
          </button>
          <button className="border hover:bg-slate-200 text-[#444444] my-[5px] px-[17px] py-[3px] rounded-[10px]">
            42
          </button>
          <button className="border hover:bg-slate-200 text-[#444444] my-[5px] px-[17px] py-[3px] rounded-[10px]">
            43
          </button>
          <button className="border hover:bg-slate-200 text-[#444444] my-[5px] px-[17px] py-[3px] rounded-[10px]">
            44
          </button>
          <button className="border hover:bg-slate-200 text-[#444444] my-[5px] px-[17px] py-[3px] rounded-[10px]">
            45
          </button>
          <button className="border hover:bg-slate-200 text-[#444444] my-[5px] px-[17px] py-[3px] rounded-[10px]">
            46
          </button>
          <button className="border hover:bg-slate-200 text-[#444444] my-[5px] px-[17px] py-[3px] rounded-[10px]">
            47
          </button>
          <button className="border hover:bg-slate-200 text-[#444444] my-[5px] px-[17px] py-[3px] rounded-[10px]">
            48
          </button>
          <button className="border hover:bg-slate-200 text-[#444444] my-[5px] px-[17px] py-[3px] rounded-[10px]">
            49
          </button>
          <button className="border bg-[#3b82f6] text-white my-[5px] px-[17px] py-[3px] rounded-[10px]">
            50
          </button>
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
        <div>
          <label className="flex cursor-pointer  items-center space-x-3 mb-2">
            <input
              type="checkbox"
              name="checked"
              className="form-tick appearance-none bg-white bg-check h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-gray-700 dark:text-white font-normal">Nike</span>
          </label>
          <label className="flex cursor-pointer items-center space-x-3 mb-2">
            <input
              type="checkbox"
              name="checked"
              className="form-tick appearance-none bg-white bg-check h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-gray-700 dark:text-white font-normal">Adidas</span>
          </label>
          <label className="flex cursor-pointer  items-center space-x-3 mb-2">
            <input
              type="checkbox"
              name="checked"
              className="form-tick appearance-none bg-white bg-check h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-gray-700 dark:text-white font-normal">Under Armour</span>
          </label>
          <label className="flex cursor-pointer  items-center space-x-3 mb-2">
            <input
              type="checkbox"
              name="checked"
              className="form-tick appearance-none bg-white bg-check h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-gray-700 dark:text-white font-normal">The North Face</span>
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
