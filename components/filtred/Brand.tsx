import { useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export default function Brand() {
  const [isOpen, setIsOpen] = useState(false);
  const { brands } = useTypedSelector((state: any) => state.main)

  const { setValue } = useActions()

  const onToggle = () => setIsOpen((prev) => !prev);
  return (
    <div className="flex flex-col mt-[-5px] py-[7px] cursor-pointer">
      <div onClick={onToggle} className="flex justify-between">
        <span className="text-[#292928] font-medium text-[18px] sm:text-[20px]">Бренд</span>
        <button className="hover:bg-[#8045C61A] p-[3px] rounded-[10px]">
          {isOpen ? (
            <AiOutlineArrowUp color="#292928" size={26} />
          ) : (
            <AiOutlineArrowDown color="#292928" size={26} />
          )}
        </button>
      </div>

      {isOpen && (
        <div>
          <label className="flex cursor-pointer  items-center space-x-3 mb-2">
            <input
              checked={brands.nike}
              onChange={e => setValue({type: 'nike', value: e.target.checked})}
              type="checkbox"
              name="nike"
              className="form-tick appearance-none bg-white bg-check h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-gray-700 dark:text-white font-normal">
              Nike
            </span>
          </label>
          <label className="flex cursor-pointer items-center space-x-3 mb-2">
            <input
              checked={brands.adidas}
              onChange={e => setValue({type: 'adidas', value: e.target.checked})}
              type="checkbox"
              name="adidas"
              className="form-tick appearance-none bg-white bg-check h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-gray-700 dark:text-white font-normal">
              Adidas
            </span>
          </label>
          <label className="flex cursor-pointer  items-center space-x-3 mb-2">
            <input
              checked={brands.underarmour}
              onChange={e => setValue({type: 'underarmour', value: e.target.checked})}
              type="checkbox"
              name="underarmour"
              className="form-tick appearance-none bg-white bg-check h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-gray-700 dark:text-white font-normal">
              Under Armour
            </span>
          </label>
          <label className="flex cursor-pointer  items-center space-x-3 mb-2">
            <input
              checked={brands.thenorthface}
              onChange={e => setValue({type: 'thenorthface', value: e.target.checked})}
              type="checkbox"
              name="thenorthface"
              className="form-tick appearance-none bg-white bg-check h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-gray-700 dark:text-white font-normal">
              The North Face
            </span>
          </label>
        </div>
      )}
    </div>
  );
}
