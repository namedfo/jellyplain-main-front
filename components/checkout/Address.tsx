import { useRouter } from "next/router";
import { useState } from "react";
//
import {
    AiOutlineArrowDown,
    AiOutlineArrowUp,
    AiOutlineArrowLeft,
  } from "react-icons/ai";

export default function Address() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  return (
    <div className="flex flex-col">
      <button
        onClick={() => router.push("/")}
        className="rounded-[10px] mb-[10px] flex md:hidden items-center px-[10px] p-[3px] hover:bg-[#8A63B91A]"
      >
        <AiOutlineArrowLeft size={26} color="#86368d" />
        <span className="text-[#86368d] ml-[15px] font-medium text-[18px]">
          Назад
        </span>
      </button>
      <div className="flex w-full items-center">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full justify-between md:justify-start cursor-pointer items-center"
        >
          <span className="text-[16px] md:text-[18px] font-medium text-[#292929]">
            Адрес доставки
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
        } pt-[10px] items-center justify-between`}
      >
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
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } pt-[10px] items-center justify-between`}
      >
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
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } pt-[10px] items-center justify-between`}
      >
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
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } pt-[10px] items-center justify-start`}
      >
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
    </div>
  );
}
