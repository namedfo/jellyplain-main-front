//
import { AiFillFilter } from "react-icons/ai"

export default function MenuCatalog() {
  return (
    <div className="shadow-jj flex flex-col sm:text-[18px] text-[16px] font-medium py-[20px] p-[15px] w-full rounded-[10px] bg-white">
      <div className="flex text-[#5e5b73] flex-wrap justify-evenly w-full">
        <button className="bg-[#8A63B9] py-[5px] px-[15px] rounded-[10px] text-white">
          Все
        </button>
        <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px] ">
          Кроссовки
        </button>
        <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px] ">
          Худи
        </button>
        <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px] ">
          Джерси
        </button>
        <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px] ">
          Шорты
        </button>
        <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px] ">
          Куртки
        </button>
      </div>
      <div className="flex md:hidden flex-col text-[#635d8a] items-center">
        <div className="w-[30%] my-[15px] border h-[1px] " />
        <div className="flex w-full justify-between items-center">
        <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px]">
            Поиск
        </button>
        <button className="py-[5px] flex items-center hover:bg-[#8A63B91A] px-[15px] rounded-[10px]">
            <AiFillFilter size={18} />
            Фильтрация
        </button>
        </div>
      </div>
    </div>
  );
}
