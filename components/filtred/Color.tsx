import { useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import colors from "../../utils/helping/colors";

export default function Color() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen((prev) => !prev);

  const newColors = Object.values(colors);
  console.log(newColors);
  return (
    <div className="flex flex-col mt-[-5px] py-[7px] cursor-pointer">
      <div onClick={onToggle} className="flex justify-between">
        <span className="text-[#292928] font-medium text-[18px] sm:text-[20px]">
          Цвет
        </span>
        <button className="hover:bg-[#8045C61A] p-[3px] rounded-[10px]">
          {isOpen ? (
            <AiOutlineArrowUp color="#292928" size={26} />
          ) : (
            <AiOutlineArrowDown color="#292928" size={26} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="my-[7px] flex flex-col">
          <div className="flex flex-wrap justify-start">
            {newColors?.map((color: any) => {
              console.log(color);
              return <ElemColor color={color} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const ElemColor = ({ color }: any) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative"
    >
      <div
        key={color.color}
        style={{
          backgroundColor: color.color,
        }}
        className={`w-[50px] mx-[5px] my-[5px] rounded-[8px] h-[30px] border`}
      />
     {isHover && (
       <span className="absolute left-[10px] rounded-[5px] font-medium border shadow-popup bottom-[30px] py-[3px] px-[5px] bg-[white]">
       {color.name}
     </span>
     )}
    </div>
  );
};
