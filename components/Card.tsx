import Image from "next/image";
import { totalmem } from "os";
//
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import useActions from "../hooks/useActions";
//
import mock from "../utils/mockup-9.jpg";


type CardProps = {
  title: string;
  price: string;
  image: string;
}

export default function Card({ card }: any) {


  const { setCard } = useActions()

  return (
    <div className="shadow-jj p-[15px] rounded-[10px] bg-white w-[230px]">
      <div className="w-full flex items-center justify-center">
        <Image objectFit="contain" width={210} alt="" src={card.image} />
      </div>
      <div className="flex flex-col">
        <span className="text-[#414752] text-[20px] font-medium">
            {card?.title}
        </span>
      </div>
      <div className="flex mt-[10px] justify-between">
        <div className="py-[2px] flex justify-start items-center">
            <span className="text-[#FFA500] text-[20px] font-medium">
                {card?.price} &#8381; 
            </span>
        </div>
        <button 
        onClick={() => setCard(card)}
        style={{
          background: 'radial-gradient(303.57% 2034.38% at 71.89% 100%, #8045C6 0%, rgba(128, 69, 198, 0) 100%)'
        }} className=" rounded-[10px] px-[10px] py-[2px] font-medium text-[16px] text-white">
            В корзину
        </button>
        {/* <div className="flex mr-[10px] items-center">
          <button className="p-[4px] hover:bg-[#8045C64D] bg-[#8045C633] rounded-[5px]">
            <AiOutlineMinus color="#8045c6" />
          </button>
          <span className="font-medium text-[18px] mx-[10px]">1</span>
          <button className="p-[4px] hover:bg-[#8045C64D] bg-[#8045C633] rounded-[5px]">
            <AiOutlinePlus color="#8045c6" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
