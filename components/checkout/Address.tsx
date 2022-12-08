import { useRouter } from "next/router";
import { useState } from "react";
//
import { useFormik } from "formik";
//
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import $api from "../../config";

export default function Address({ address }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      surname: address?.surname || "",
      name: address?.name || "",
      middlename: address?.middlename || "",
      country: address?.country || "",
      region: address?.region || "",
      city: address?.city || "",
      street: address?.street || "",
      home_number: address?.home_number || "",
      flat_number: address?.flat_number || "",
      postal_code: address?.postal_code || "",
      phone_number: address?.phone_number || ""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSave = async (log: any) => {
    console.log(log)
    try {
      await $api.post('/user/update', {
        address: {
          update: {
            ...log
          }
        }
      })
    } catch (error) {
      
    }
  }

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
      <form onSubmit={formik.handleSubmit}>
        <div
          className={`${isOpen ? "flex flex-col sm:flex-row" : "hidden"
            } pt-[10px] items-center justify-between`}
        >
          <div className="relative w-full">
            <label htmlFor="surname" className="text-gray-700">
              Фамилия
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="surname"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="surname"
              placeholder="Фамилия"
              onChange={formik.handleChange}
              value={formik.values.surname}
              onBlur={() => handleSave({surname: formik.values.surname})}
            />
          </div>
          <div className="sm:mx-[15px] w-full relative ">
            <label htmlFor="name" className="text-gray-700">
              Имя
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="name"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="name"
              placeholder="Имя"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={() => handleSave({name: formik.values.name})}
            />
          </div>
          <div className="relative w-full">
            <label htmlFor="middlename" className="text-gray-700">
              Отчество
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="middlename"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="middlename"
              placeholder="Отчество"
              onChange={formik.handleChange}
              value={formik.values.middlename}
              onBlur={() => handleSave({middlename: formik.values.middlename})}
            />
          </div>
        </div>
        <div
          className={`${isOpen ? "flex flex-col sm:flex-row" : "hidden"
            } pt-[10px] items-center justify-between`}
        >
          <div className="relative w-full">
            <label htmlFor="country" className="text-gray-700">
              Страна
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="country"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="country"
              placeholder="Страна"
              onChange={formik.handleChange}
              value={formik.values.country}
              onBlur={() => handleSave({country: formik.values.country})}
            />
          </div>
          <div className="sm:mx-[15px] w-full relative ">
            <label htmlFor="region" className="text-gray-700">
              Область
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="region"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="region"
              placeholder="Область"
              onChange={formik.handleChange}
              value={formik.values.region}
              onBlur={() => handleSave({region: formik.values.region})}
            />
          </div>
          <div className="relative w-full">
            <label htmlFor="city" className="text-gray-700">
              Город
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="city"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="city"
              placeholder="Город"
              onChange={formik.handleChange}
              value={formik.values.city}
            />
          </div>
        </div>
        <div
          className={`${isOpen ? "flex flex-col sm:flex-row" : "hidden"
            } pt-[10px] items-center justify-between`}
        >
          <div className="relative w-full">
            <label htmlFor="street" className="text-gray-700">
              Улица
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="street"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="street"
              placeholder="Улица"
              onChange={formik.handleChange}
              value={formik.values.street}
              onBlur={() => handleSave({street: formik.values.street})}
            />
          </div>
          <div className="sm:mx-[15px] w-full relative ">
            <label htmlFor="home_number" className="text-gray-700">
              Дом
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="home_number"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="home_number"
              placeholder="Дом"
              onChange={formik.handleChange}
              value={formik.values.home_number}
              onBlur={() => handleSave({home_number: formik.values.home_number})}
            />
          </div>
          <div className="relative w-full">
            <label htmlFor="flat_number" className="text-gray-700">
              Квартира
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="flat_number"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="flat_number"
              placeholder="Квартира"
              onChange={formik.handleChange}
              value={formik.values.flat_number}
              onBlur={() => handleSave({flat_number: formik.values.flat_number})}
            />
          </div>
        </div>
        <div
          className={`${isOpen ? "flex flex-col sm:flex-row" : "hidden"
            } pt-[10px] items-center w-full justify-start`}
        >
          <div className=" w-full sm:w-[200px] relative ">
            <label htmlFor="postcode" className="text-gray-700">
              Почтовый индекс
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="postal_code"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="postal_code"
              placeholder="Индекс"
              onChange={formik.handleChange}
              value={formik.values.postal_code}
              onBlur={() => handleSave({postal_code: formik.values.postal_code})}
            />
          </div>
          <div className="sm:mx-[15px] w-full sm:w-[200px] relative ">
            <label htmlFor="phone" className="text-gray-700">
              Телефон
            </label>
            <input
              type="text"
              id="phone_number"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="phone_number"
              placeholder="Телефон"
              onChange={formik.handleChange}
              value={formik.values.phone_number}
              onBlur={() => handleSave({phone_number: formik.values.phone_number})}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
