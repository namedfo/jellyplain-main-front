import { AiOutlineArrowLeft } from "react-icons/ai";
// components
import Brand from "../components/filtred/Brand";
import Price from "../components/filtred/Price";
import Size from "../components/filtred/Size";
import Color from "../components/filtred/Color";
import { useTypedSelector } from "../hooks/useTypedSelector";

export default function Filtred({ onClose }: any) {
  const { selectedCategory } = useTypedSelector((state) => state.main);

  return (
    <div style={{
      zIndex: 99
    }} className="w-full py-[15px] px-[20px] bg-white flex flex-col overflow-y-auto justify-between h-full absolute">
      <div className="flex flex-col">
        <Header onClose={onClose} />
        <div className="flex py-[10px] flex-col">
          <div className="flex items-center justify-between">
            <label
              className="text-[#292928] font-medium text-[18px] sm:text-[20px]"
              htmlFor="animals"
            >
              Категория
              <select
                id="animals"
                className="block w-full py-[4px] px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                name="animals"
              >
                <option value="">Все</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select>
            </label>
            {selectedCategory.subcategory && (
              <label
                className="text-[#292928] font-medium text-[18px] sm:text-[20px]"
                htmlFor="animals"
              >
                Подкатегория
                <select
                  id="animals"
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  name="animals"
                >
                  <option value="">Все</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                  <option value="parrot">Parrot</option>
                  <option value="spider">Spider</option>
                  <option value="goldfish">Goldfish</option>
                </select>
              </label>
            )}
          </div>
          {/* <div className="h-[15px]"></div> */}
          <Price />
          <Size />
          <Brand />
          <Color />
        </div>
      </div>
      {/* <button className="bg-indigo-500 hover:bg-indigo-700 text-[18px] font-medium text-white py-[4px] rounded-[10px]">
        Применить
      </button> */}
    </div>
  );
}

const Header = ({ onClose }: any) => {
  return (
    <div className="flex items-center">
      <button
        onClick={onClose}
        className="absolute rounded-[10px] p-[3px] hover:bg-[#8A63B91A]"
      >
        <AiOutlineArrowLeft size={26} color="#86368d" />
      </button>
      <span className="w-full font-medium text-[20px] text-[#2f2e2e] text-center">
        Фильтрация
      </span>
    </div>
  );
};
