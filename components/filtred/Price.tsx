import { useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export default function Price() {
  const { minPrice, maxPrice } = useTypedSelector(state => state.main)
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col mb-[7px] cursor-pointer">
      <div onClick={onToggle} className="flex justify-between">
        <span className="text-[#292928] font-medium text-[18px] sm:text-[20px]">Цена</span>
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
              value={minPrice}
            />
          </label>
          <label className="border py-[2px] px-[5px] flex rounded-[5px] border-[#b3bcc5]">
            <span className="text-[#949ba2]">до</span>
            <input
              className="w-[80px] ml-[6px] outline-none rounded-[5px]"
              type="number"
              value={maxPrice}
            />
          </label>
        </div>
      )}
    </div>
  );
}
