import Address from "../../checkout/Address";

export default function AddressUser() {
  return (
    <div>
      <div className={`flex pt-[10px] items-center justify-start`}>
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
      <div className={`flex pt-[10px] items-center justify-start`}>
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
      <div className={`flex pt-[10px] items-center justify-start`}>
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
      <div className={`flex pt-[10px] items-center justify-start`}>
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
      </div>
      <div className="flex pt-[20px] justify-center">
        <button className="font-[500] hover:bg-pink-100 border border-pink-400 rounded-[10px] px-[17px] py-[4px] text-pink-600">
          Сохранить
        </button>
      </div>
    </div>
  );
}
