import { useState } from "react";
//
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
// components
import Address from "./Address";

export default function Info() {
  return (
    <div className="shadow-jj flex flex-col text-[18px] rounded-[10px] bg-white px-[20px] py-[15px]">
      <Address />
      <ShippingCost />
    </div>
  );
}

const ShippingCost = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full justify-between mt-[15px] cursor-pointer items-center"
      >
        <div className="flex w-full justify-between md:justify-start items-center">
          <span className="text-[16px] sm:text-[20px] font-medium text-[#292929]">
            Способ доставки
          </span>
          <button className="hover:bg-[#8045C61A] md:ml-[20px] p-[3px] rounded-[10px]">
            {isOpen ? (
              <AiOutlineArrowUp color="#292928" size={26} />
            ) : (
              <AiOutlineArrowDown color="#292928" size={26} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } mt-[15px] flex-col sm:flex-row items-center justify-start`}
      >
        <button
          type="button"
          className="h-[40px]  font-medium px-4 md:mr-[20px] flex justify-center items-center  bg-gray-600 text-white w-full text-center rounded-lg"
        >
          Почта России
        </button>
        <button
          type="button"
          className="h-[40px] mt-[15px] md:mt-0 font-medium md:ml-[20px] px-4 flex flex-col justify-center items-center border border-gray-600 text-gray-600 w-full  rounded-lg"
        >
          <span className="leading-[16px] text-[18px]">Самовывоз</span>
          <span className="leading-[16px] text-[12px]">из Ростова-на-Дону</span>
        </button>
      </div>
    </div>
  );
};
