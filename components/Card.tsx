import Image from "next/image";
//
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
//
import mock from "../utils/mockup-9.jpg";

export default function Card() {
  return (
    <div className="shadow-jj p-[15px] rounded-[10px] bg-white w-[230px]">
      <div className="w-full flex items-center justify-center">
        <Image objectFit="contain" width={210} alt="" src={mock} />
      </div>
      <div className="flex flex-col">
        <span className="text-[#414752] text-[20px] font-medium">
            Nike Kyrie 9
        </span>
      </div>
      <div className="flex mt-[10px] justify-between">
        <div className="py-[2px] flex justify-start items-center">
            <span className="text-[#FFA500] text-[18px] font-medium">
                6 490 &#8381; 
            </span>
        </div>
        <button style={{
          background: 'radial-gradient(232.14% 4719.2% at 71.89% 100%, #FFA500 0%, rgba(255, 165, 0, 0) 100%)'
        }} className=" rounded-[10px] px-[10px] py-[2px] font-medium text-[18px] text-white">
            В корзину
        </button>
        {/* <div className="flex mr-[10px] items-center">
          <button className="p-[4px] hover:bg-[#FFA5004D] bg-[#FFA50033] rounded-[5px]">
            <AiOutlineMinus color="#FFA500" />
          </button>
          <span className="font-medium text-[18px] mx-[10px]">1</span>
          <button className="p-[4px] hover:bg-[#FFA5004D] bg-[#FFA50033] rounded-[5px]">
            <AiOutlinePlus color="#FFA500" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
