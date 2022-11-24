import { useState } from "react";
import {
  AiFillFilter,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
// hooks
import useActions from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export default function MenuCatalog() {
  const { selectedCategory } = useTypedSelector((state) => state.main);

  const { setSelectedCategory, setIsOpenFiltred } = useActions();

  return (
    <div className="shadow-jj flex flex-col sm:text-[18px] text-[16px] font-medium py-[15px] p-[15px] w-full rounded-[10px] bg-white">
      <div className="hidden md:flex text-[#47464e] flex-wrap justify-evenly w-full">
        <button
          onClick={() =>
            setSelectedCategory({
              category: "all",
              subcategory: null,

              name: "Все",
            })
          }
          className={`${
            selectedCategory.category === "all"
              ? "bg-[#8A63B9] text-white"
              : "hover:bg-[#8A63B91A]"
          } py-[5px] px-[15px] rounded-[10px]`}
        >
          Все
        </button>
        <Sneakers
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <button
          onClick={() =>
            setSelectedCategory({
              category: "formnba",
              subcategory: null,

              name: "Форма NBA",
            })
          }
          className={`${
            selectedCategory.category === "formnba"
              ? "bg-[#8A63B9] text-white"
              : "hover:bg-[#8A63B91A]"
          } py-[5px] px-[15px] rounded-[10px]`}
        >
          Форма NBA
        </button>
        <Clothes
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <button
          onClick={() =>
            setSelectedCategory({
              category: "basketballs",
              subcategory: null,

              name: "Баскетбольные мячи",
            })
          }
          className={`${
            selectedCategory.category === "basketballs"
              ? "bg-[#8A63B9] text-white"
              : "hover:bg-[#8A63B91A]"
          } py-[5px] px-[15px] rounded-[10px]`}
        >
          Баскетбольные мячи
        </button>
        <button
          onClick={() =>
            setSelectedCategory({
              category: "accessories",
              subcategory: null,

              name: "Аксессуары",
            })
          }
          className={`${
            selectedCategory.category === "accessories"
              ? "bg-[#8A63B9] text-white"
              : "hover:bg-[#8A63B91A]"
          } flex items-center py-[5px] px-[15px] rounded-[10px]`}
        >
          <span className="mr-[5px]">Аксессуары</span>
        </button>
      </div>
      <div className="flex md:hidden flex-col text-[#635d8a] items-center">
        {/* <div className="w-[30%] my-[15px] border h-[1px] " /> */}
        <div className="flex w-full justify-between items-center">
          <button className="py-[5px] flex items-center bg-[#8A63B91A] px-[15px] rounded-[10px]">
            <IoSearchSharp size={20} />
            <span className="ml-[5px]">Поиск</span>
          </button>
          <button
            onClick={() => setIsOpenFiltred(true)}
            className="py-[5px] flex items-center bg-[#8A63B91A] px-[15px] rounded-[10px]"
          >
            <AiFillFilter size={18} />
            Фильтрация
          </button>
        </div>
      </div>
    </div>
  );
}

const Clothes = ({ selectedCategory, setSelectedCategory }: any) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${
        selectedCategory.category === "clothes"
          ? "bg-[#8A63B9] text-white"
          : "hover:bg-[#8A63B91A]"
      } py-[5px] flex items-center  px-[15px] relative rounded-[10px]`}
      // ${
      //   selectedCategory === "hoodies"
      //     ? "bg-[#8A63B9] text-white"
      //     : "hover:bg-[#8A63B91A]"
      // }
    >
      <span className="mr-[5px]">
        {selectedCategory.category === "clothes"
          ? selectedCategory.name
          : "Одежда"}
      </span>
      {isHover ? (
        <AiOutlineArrowUp color={selectedCategory.category === "clothes" ? "white" : "#47464e"} size={22} />
      ) : (
        <AiOutlineArrowDown color={selectedCategory.category === "clothes" ? "white" : "#47464e"} size={22} />
      )}
      {isHover && (
        <div className={`${selectedCategory.category === "clothes" ? "text-[#47464e]": ""}  absolute text-[17px] flex py-[7px] flex-col justify-center w-full right-0 top-[36px] shadow-popup  rounded-[10px] bg-white`}>
          <span
            onClick={() =>
              setSelectedCategory({
                category: "clothes",
                subcategory: null,

                name: "Одежда",
              })
            }
            className="hover:bg-[#8A63B91A] py-[5px]"
          >
            Одежда
          </span>
          <span
            onClick={() =>
              setSelectedCategory({
                category: "clothes",
                subcategory: "shorts",

                name: "Шорты",
              })
            }
            className="hover:bg-[#8A63B91A] py-[5px]"
          >
            Шорты
          </span>
          <span
            onClick={() =>
              setSelectedCategory({
                category: "clothes",
                subcategory: "shirts",

                name: "Майки",
              })
            }
            className="hover:bg-[#8A63B91A] py-[5px]"
          >
            Майки
          </span>
          <span
            onClick={() =>
              setSelectedCategory({
                category: "clothes",
                subcategory: "jackets",

                name: "Куртки",
              })
            }
            className="hover:bg-[#8A63B91A] py-[5px]"
          >
            Куртки
          </span>
          <span
            onClick={() =>
              setSelectedCategory({
                category: "clothes",
                subcategory: "hoodies",

                name: "Толстовки",
              })
            }
            className="hover:bg-[#8A63B91A] py-[5px]"
          >
            Толстовки
          </span>
        </div>
      )}
    </button>
  );
};

const Sneakers = ({ selectedCategory, setSelectedCategory }: any) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${
        selectedCategory.category === "sneakers"
          ? "bg-[#8A63B9] text-white"
          : "hover:bg-[#8A63B91A]"
      } py-[5px] flex items-center  px-[15px] relative rounded-[10px]`}
    >
      <span className="mr-[5px]">
        {selectedCategory.category === "sneakers"
          ? selectedCategory.name
          : "Кроссовки"}
      </span>
      {isHover ? (
        <AiOutlineArrowUp color={selectedCategory.category === "sneakers" ? "white" : "#47464e"} size={22} />
      ) : (
        <AiOutlineArrowDown color={selectedCategory.category === "sneakers" ? "white" : "#47464e"} size={22} />
      )}
      {isHover && (
        <div className={`${selectedCategory.category === "sneakers" ? "text-[#47464e]": ""}  absolute text-[17px] flex py-[7px] flex-col justify-center w-full right-0 top-[36px] shadow-popup  rounded-[10px] bg-white`}>
          <span
            onClick={() =>
              setSelectedCategory({
                category: "sneakers",
                subcategory: null,

                name: "Кроссовки",
              })
            }
            className="hover:bg-[#8A63B91A] py-[5px]"
          >
            Кроссовки
          </span>
          <span
            onClick={() =>
              setSelectedCategory({
                category: "sneakers",
                subcategory: "everyday",

                name: "Повседневные",
              })
            }
            className="hover:bg-[#8A63B91A] py-[5px]"
          >
            Повседневные
          </span>
          <span
            onClick={() =>
              setSelectedCategory({
                category: "sneakers",
                subcategory: "basketball",

                name: "Баскетбольные",
              })
            }
            className="hover:bg-[#8A63B91A] py-[5px]"
          >
            Баскетбольные
          </span>
        </div>
      )}
    </button>
  );
};
