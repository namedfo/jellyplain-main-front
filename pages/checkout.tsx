import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
// components
import Header from "../components/Header";
// layouts
import Container from "../layouts/Container";

export default function Checkout() {
  return (
    <Container>
      <Header />
      <div className="w-full flex justify-between sm:pt-[50px]">
        <div className="flex flex-col">
          <Data />
          <Products />
        </div>
        <div>
          <Total />
        </div>
      </div>
    </Container>
  );
}

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-jj py-[15px] px-[20px] mt-[30px] bg-white rounded-[10px]">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex cursor-pointer items-center"
      >
        <span className="text-[20px] font-medium text-[#292929]">Товары</span>
        <button className="hover:bg-[#8045C61A] ml-[20px] p-[3px] rounded-[10px]">
          {isOpen ? (
            <AiOutlineArrowUp color="#292928" size={26} />
          ) : (
            <AiOutlineArrowDown color="#292928" size={26} />
          )}
        </button>
      </div>
    </div>
  );
};

const Data = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-jj flex flex-col text-[18px] rounded-[10px] w-[750px] bg-white px-[20px] py-[15px]">
      <div className="flex items-center justify-between">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex cursor-pointer items-center"
        >
          <span className="text-[20px] font-medium text-[#292929]">
            Адрес доставки
          </span>
          <button className="hover:bg-[#8045C61A] ml-[20px] p-[3px] rounded-[10px]">
            {isOpen ? (
              <AiOutlineArrowUp color="#292928" size={26} />
            ) : (
              <AiOutlineArrowDown color="#292928" size={26} />
            )}
          </button>
        </div>
        <span>Your address</span>
      </div>
      <div className="flex pt-[10px] items-center justify-between">
        <div className=" relative ">
          <label htmlFor="required-email" className="text-gray-700">
            Фамилия
            <span className="text-red-500 required-dot">*</span>
          </label>
          <input
            type="text"
            id="required-email"
            className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="email"
            placeholder="Фамилия"
          />
        </div>
        <div className="mx-[15px] relative ">
          <label htmlFor="required-email" className="text-gray-700">
            Имя
            <span className="text-red-500 required-dot">*</span>
          </label>
          <input
            type="text"
            id="required-email"
            className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="email"
            placeholder="Имя"
          />
        </div>
        <div className=" relative ">
          <label htmlFor="required-email" className="text-gray-700">
            Отчество
            <span className="text-red-500 required-dot">*</span>
          </label>
          <input
            type="text"
            id="required-email"
            className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="email"
            placeholder="Отчество"
          />
        </div>
      </div>
      <div className="flex pt-[10px] items-center justify-between">
        <div className=" relative ">
          <label htmlFor="required-email" className="text-gray-700">
            Страна
            <span className="text-red-500 required-dot">*</span>
          </label>
          <input
            type="text"
            id="required-email"
            className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="email"
            placeholder="Страна"
          />
        </div>
        <div className="mx-[15px] relative ">
          <label htmlFor="required-email" className="text-gray-700">
            Область
            <span className="text-red-500 required-dot">*</span>
          </label>
          <input
            type="text"
            id="required-email"
            className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="email"
            placeholder="Область"
          />
        </div>
        <div className=" relative ">
          <label htmlFor="required-email" className="text-gray-700">
            Город
            <span className="text-red-500 required-dot">*</span>
          </label>
          <input
            type="text"
            id="required-email"
            className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="email"
            placeholder="Город"
          />
        </div>
      </div>
      <div className="flex pt-[10px] items-center justify-between">
        <div className=" relative ">
          <label htmlFor="required-email" className="text-gray-700">
            Улица
            <span className="text-red-500 required-dot">*</span>
          </label>
          <input
            type="text"
            id="required-email"
            className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="email"
            placeholder="Улица"
          />
        </div>
        <div className="mx-[15px] relative ">
          <label htmlFor="required-email" className="text-gray-700">
            Дом
            <span className="text-red-500 required-dot">*</span>
          </label>
          <input
            type="text"
            id="required-email"
            className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="email"
            placeholder="Дом"
          />
        </div>
        <div className=" relative ">
          <label htmlFor="required-email" className="text-gray-700">
            Квартира
            <span className="text-red-500 required-dot">*</span>
          </label>
          <input
            type="text"
            id="required-email"
            className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="email"
            placeholder="Квартира"
          />
        </div>
      </div>
      <div className="flex pt-[10px] items-center justify-start">
        <div className="w-[200px] relative ">
          <label htmlFor="required-email" className="text-gray-700">
            Почтовый индекс
            <span className="text-red-500 required-dot">*</span>
          </label>
          <input
            type="text"
            id="required-email"
            className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="email"
            placeholder="Индекс"
          />
        </div>
        <div className="mx-[15px] w-[200px] relative ">
          <label htmlFor="required-email" className="text-gray-700">
            Телефон
          </label>
          <input
            type="text"
            id="required-email"
            className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="email"
            placeholder="Телефон"
          />
        </div>
      </div>
      <ShippingCost />
    </div>
  );
};

const ShippingCost = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col">
      <div onClick={() => setIsOpen(prev => !prev)} className="flex mt-[30px] cursor-pointer items-center">
        <span className="text-[20px] font-medium text-[#292929]">
          Способ доставки
        </span>
        <button className="hover:bg-[#8045C61A] ml-[20px] p-[3px] rounded-[10px]">
          {isOpen ? (
            <AiOutlineArrowUp color="#292928" size={26} />
          ) : (
            <AiOutlineArrowDown color="#292928" size={26} />
          )}
        </button>
      </div>
      <div className="flex mt-[15px] items-center justify-start">
        <button
          type="button"
          className="h-[40px]  font-medium px-4 mr-[20px] flex justify-center items-center  bg-gray-600 text-white w-full text-center rounded-lg"
        >
          Почта России
        </button>
        <button
          type="button"
          className="h-[40px] font-medium ml-[20px] px-4 flex flex-col justify-center items-center border border-gray-600 text-gray-600 w-full  rounded-lg"
        >
          <span className="leading-[16px] text-[18px]">Самовывоз</span>
          <span className="leading-[16px] text-[12px]">из Ростова-на-Дону</span>
        </button>
      </div>
    </div>
  );
};

const Total = () => {
  return (
    <div className="shadow-jj rounded-[10px] w-[420px] bg-white py-[15px] px-[20px]">
      <span className="text-[20px] my-[30px] font-medium text-[#292929]">
        Оплата
      </span>
      <div className="flex mt-[10px] text-[17px] items-center justify-between">
        <span>Товары (15)</span>
        <span>price</span>
      </div>
      <div className="flex text-[17px] items-center justify-between">
        <span>Стоимость доставки</span>
        <span>850 руб</span>
      </div>
      <button
        type="button"
        className="py-[5px] mt-[20px] px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        Buy
      </button>
    </div>
  );
};
