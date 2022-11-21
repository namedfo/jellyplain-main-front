import Image from "next/image";
import { useRouter } from "next/router";
//
import { AiOutlinePlus, AiOutlineMinus, AiFillStar } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
// hooks
import useActions from "../hooks/useActions";

type CardProps = {
  title: string;
  price: string;
  image: string;
};

export default function Card({ card }: any) {
  const { setCard } = useActions();

  const router = useRouter();

  const onHandleProduct = () => {
    router.push(`/product/${card.id}`);
  };

  return (
    <div
      onClick={onHandleProduct}
      className="shadow-jj p-[15px] mt-[30px] 400:mx-[0] rounded-[10px] bg-white w-[270px] 400:w-[235px]"
    >
      <div className="flex items-center justify-center">
        <img
          alt="img"
          src={card.productChilds[0]?.images[0]?.url}
          className="cursor-pointer w-full h-[150px] object-contain border rounded-[10px]"
        />
      </div>
      <div className="flex mt-[10px] flex-col">
        <span className="text-[#414752] cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-medium">
          {card?.title}
        </span>
        <div className="flex flex-row items-end justify-between">
          {/* <div className="flex cursor-pointer py-[1px] px-[3px] rounded-lg hover:bg-[#8045C61A]">
            <div className="flex items-center">
              <AiFillStar color="#fbbf24" />
              <span className="text-[#79828e] text-[17px] font-medium ml-[5px]">
                4.3
              </span>
            </div>
            <div className="flex ml-[10px] items-center">
              <BiCommentDots color="#35404A" />
              <span className="text-[#79828e] text-[17px] font-medium  ml-[5px]">
                53
              </span>
            </div>
          </div> */}
          <span className="font-medium text-[17px] text-[#5B9F32]">
            Оригинал
          </span>
          <div className="bg-fuchsia-500 px-[6px] rounded-[8px]">
            <span className="text-white leading-0 text-[20px] font-medium">
              {card?.price} &#8381;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
