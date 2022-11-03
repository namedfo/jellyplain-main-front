import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'


export default function Filtred() {
  return (
    <div className="rounded-[10px] p-[15px] bg-white shadow-jj w-[280px] flex flex-col divide-y">
<div className="flex mt-[-5px] py-[7px] cursor-pointer justify-between">
        <span className="text-[#292928] font-medium text-[20px]">Цена</span>
        <button className='hover:bg-[#E7E9EB] p-[3px] rounded-[10px]'>
            <AiOutlineArrowDown color="#292928" size={26} />
        </button>
      </div>
      <div className="flex py-[7px] cursor-pointer justify-between">
        <span className="text-[#292928] font-medium text-[20px]">Размер</span>
        <button className='hover:bg-[#E7E9EB] p-[3px] rounded-[10px]'>
            <AiOutlineArrowDown color="#292928" size={26} />
        </button>
      </div>
      <div className="flex py-[7px] cursor-pointer justify-between">
        <span className="text-[#292928] font-medium text-[20px]">Бренд</span>
        <button className='hover:bg-[#E7E9EB] p-[3px] rounded-[10px]'>
            <AiOutlineArrowDown color="#292928" size={26} />
        </button>
      </div>
      <div className="flex py-[7px] cursor-pointer justify-between">
        <span className="text-[#292928] font-medium text-[20px]">Цвет</span>
        <button className='hover:bg-[#E7E9EB] p-[3px] rounded-[10px]'>
            <AiOutlineArrowDown color="#292928" size={26} />
        </button>
      </div>
    </div>
  );
}
