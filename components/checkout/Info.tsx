import { useEffect, useState } from "react";
//
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
// components
import Address from "./Address";

export default function Info({ order }: any) {
  const { setShipping } = useActions()

  useEffect(() => {
    if (order?.delivery) {
      setShipping(String(order?.delivery))
    }
  }, [])


  return (
    <div className="shadow-jj flex flex-col text-[18px] rounded-[10px] bg-white px-[20px] py-[15px]">
      <Address />
      <ShippingCost />
    </div>
  );
}

const ShippingCost = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { shipping } = useTypedSelector((state => state.main))
  const { setShipping } = useActions()


  return (
    <div className="flex flex-col">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full justify-between mt-[15px] cursor-pointer items-center"
      >
        <div className="flex w-full justify-between md:justify-start items-center">
          <span className="text-[16px] sm:text-[18px] font-medium text-[#292929]">
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
          onClick={() => setShipping("pochtaru")}
          type="button"
          className={`h-[40px] text-[16px]  font-medium px-4 md:mr-[20px] flex justify-center items-center ${
            shipping === "pochtaru" ? "bg-gray-600 text-white" : "text-gray-600 border border-gray-600"
          } w-full text-center rounded-lg`}
        >
          Почта России
        </button>
        <button
          onClick={() => setShipping("pickup")}
          type="button"
          className={`h-[40px] mt-[15px] md:mt-0  text-[16px]  font-medium px-4 md:ml-[20px] flex flex-col  justify-center items-center ${
            shipping === "pickup" ? "bg-gray-600 text-white" : "text-gray-600 border border-gray-600"
          } w-full text-center rounded-lg`}
        >
          <span className="leading-[16px] text-[16px]">Самовывоз</span>
          <span className="leading-[16px] text-[12px]">из Ростова-на-Дону</span>
        </button>
      </div>
    </div>
  );
};
