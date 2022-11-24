import { useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

export default function Brand() {
  const [isOpen, setIsOpen] = useState(false);

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
            <span className="text-gray-700 dark:text-white font-normal">
              Nike
            </span>
          </label>
          <label className="flex cursor-pointer items-center space-x-3 mb-2">
            <input
              type="checkbox"
              name="checked"
              className="form-tick appearance-none bg-white bg-check h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-gray-700 dark:text-white font-normal">
              Adidas
            </span>
          </label>
          <label className="flex cursor-pointer  items-center space-x-3 mb-2">
            <input
              type="checkbox"
              name="checked"
              className="form-tick appearance-none bg-white bg-check h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-gray-700 dark:text-white font-normal">
              Under Armour
            </span>
          </label>
          <label className="flex cursor-pointer  items-center space-x-3 mb-2">
            <input
              type="checkbox"
              name="checked"
              className="form-tick appearance-none bg-white bg-check h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-gray-700 dark:text-white font-normal">
              The North Face
            </span>
          </label>
        </div>
      )}
    </div>
  );
}
