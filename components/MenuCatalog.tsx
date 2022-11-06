//
import { AiFillFilter } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import useActions from "../hooks/useActions";
// hooks
import { useTypedSelector } from "../hooks/useTypedSelector";

export default function MenuCatalog() {
  const { selectedCategory } = useTypedSelector((state) => state.main);

  const { setSelectedCategory } = useActions();

  return (
    <div className="shadow-jj flex flex-col sm:text-[18px] text-[16px] font-medium py-[15px] p-[15px] w-full rounded-[10px] bg-white">
      <div className="flex text-[#5e5b73] flex-wrap justify-evenly w-full">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`${selectedCategory === "all" ? "bg-[#8A63B9] text-white" : "hover:bg-[#8A63B91A]"} py-[5px] px-[15px] rounded-[10px]`}
        >
          Все
        </button>
        <button
          onClick={() => setSelectedCategory("sneakers")}
          className={`${selectedCategory === "sneakers" ? "bg-[#8A63B9] text-white" : "hover:bg-[#8A63B91A]"} py-[5px] px-[15px] rounded-[10px]`}
        >
          Кроссовки
        </button>
        <button
          onClick={() => setSelectedCategory("hoodies")}
          className={`${selectedCategory === "hoodies" ? "bg-[#8A63B9] text-white" : "hover:bg-[#8A63B91A]"} py-[5px] px-[15px] rounded-[10px]`}
        >
          Худи
        </button>
        <button
          onClick={() => setSelectedCategory("jersey")}
          className={`${selectedCategory === "jersey" ? "bg-[#8A63B9] text-white" : "hover:bg-[#8A63B91A]"} py-[5px] px-[15px] rounded-[10px]`}
        >
          Джерси
        </button>
        <button
          onClick={() => setSelectedCategory("shorts")}
          className={`${selectedCategory === "shorts" ? "bg-[#8A63B9] text-white" : "hover:bg-[#8A63B91A]"} py-[5px] px-[15px] rounded-[10px]`}
        >
          Шорты
        </button>
        <button
          onClick={() => setSelectedCategory("jackets")}
          className={`${selectedCategory === "jackets" ? "bg-[#8A63B9] text-white" : "hover:bg-[#8A63B91A]"} py-[5px] px-[15px] rounded-[10px]`}
        >
          Куртки
        </button>
      </div>
      <div className="flex md:hidden flex-col text-[#635d8a] items-center">
        <div className="w-[30%] my-[15px] border h-[1px] " />
        <div className="flex w-full justify-between items-center">
          <button className="py-[5px] flex items-center hover:bg-[#8A63B91A] px-[15px] rounded-[10px]">
            <IoSearchSharp size={20} />
            <span className="ml-[5px]">Поиск</span>
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
