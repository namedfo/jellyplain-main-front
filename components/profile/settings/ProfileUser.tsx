export default function ProfileUser() {
  return (
    <div className="flex flex-col">
      <div>
        <div className="flex flex-col relative ">
          <label htmlFor="phone" className="text-gray-700">
            Телефон
          </label>
          <input
            type="text"
            id="phone"
            className=" rounded-lg border appearance-none border-gray-300 w-[250px] py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="phone"
            placeholder="Телефон"
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
