import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import $api from "../../../config";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

export default function AddressUser() {

  const { user } = useTypedSelector((state: any) => state.user);
  const [isSave, setIsSave] = useState<boolean>(false)

  const router = useRouter()


  const formik = useFormik({
    initialValues: {
      surname: user?.address?.surname,
      name: user?.address?.name,
      middlename: user?.address?.middlename,
      country: user?.address?.country,
      region: user?.address?.region,
      city: user?.address?.city,
      street: user?.address?.street,
      home_number: user?.address?.home_number,
      flat_number: user?.address?.flat_number,
      postal_code: user?.address?.postal_code,
    },
    onSubmit: async (values) => {
      try {
        setIsSave(true);
        await $api.post('/user/update', {
          address: {
            update: {
              surname: values.surname,
              name: values.name,
              middlename: values.middlename,
              country: values.country,
              region: values.region,
              city: values.city,
              street: values.street,
              home_number: values.home_number,
              flat_number: values.flat_number,
              postal_code: values.postal_code,
            }
          }
        })
        router.reload()
      } catch (error) {

      } finally {
        
        setIsSave(false);
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={`flex flex-col sm:flex-row pt-[10px] items-center justify-start`}>
          <div className="relative w-full">
            <label htmlFor="surname" className="text-gray-700">
              Фамилия
            </label>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.surname}
              id="surname"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="surname"
              placeholder="Фамилия"
            />
          </div>
          <div className="sm:mx-[15px] w-full relative">
            <label htmlFor="name" className="text-gray-700">
              Имя
            </label>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              id="name"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="name"
              placeholder="Имя"
            />
          </div>
          <div className="relative w-full ">
            <label htmlFor="middlename" className="text-gray-700">
              Отчество
            </label>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.middlename}
              id="middlename"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="middlename"
              placeholder="Отчество"
            />
          </div>
        </div>
        <div className={`flex flex-col sm:flex-row pt-[10px] items-center justify-start`}>
          <div className="relative w-full">
            <label htmlFor="country" className="text-gray-700">
              Страна
            </label>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.country}
              id="country"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="country"
              placeholder="Страна"
            />
          </div>
          <div className="sm:mx-[15px] w-full relative ">
            <label htmlFor="region" className="text-gray-700">
              Область
            </label>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.region}
              id="region"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="region"
              placeholder="Область"
            />
          </div>
          <div className="relative w-full ">
            <label htmlFor="city" className="text-gray-700">
              Город
            </label>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.city}
              id="city"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="city"
              placeholder="Город"
            />
          </div>
        </div>
        <div className={`flex flex-col sm:flex-row pt-[10px] items-center justify-start`}>
          <div className="relative w-full ">
            <label htmlFor="street" className="text-gray-700">
              Улица
            </label>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.street}
              id="street"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="street"
              placeholder="Улица"
            />
          </div>
          <div className="sm:mx-[15px] w-full relative ">
            <label htmlFor="home_number" className="text-gray-700">
              Дом
            </label>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.home_number}
              id="home_number"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="home_number"
              placeholder="Дом"
            />
          </div>
          <div className="relative w-full">
            <label htmlFor="flat_number" className="text-gray-700">
              Квартира
            </label>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.flat_number}
              id="flat_number"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="flat_number"
              placeholder="Квартира"
            />
          </div>
        </div>
        <div className={`flex pt-[10px] items-center justify-start`}>
          <div className="w-full sm:w-[200px] relative ">
            <label htmlFor="postal_code" className="text-gray-700">
              Почтовый индекс
            </label>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.postal_code}
              id="postal_code"
              className=" rounded-lg border flex-1 appearance-none border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="postal_code"
              placeholder="Индекс"
            />
          </div>
        </div>
        <div className="flex pt-[20px] justify-center">
          <button style={{
            cursor: isSave ? "wait" : "pointer"
          }} disabled={isSave} type="submit" className="font-[500] w-full sm:w-auto hover:bg-pink-100 border border-pink-400 rounded-[10px] px-[17px] py-[4px] text-pink-600">
            {isSave ? "Сохраняется..." : "Сохранить"}
          </button>
        </div>
      </form>
    </div>
  );
}
