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
    <div className="shadow-jj p-[15px] mt-[30px] mx-[35px] 400:mx-[0] rounded-[10px] bg-white w-full 400:w-[235px]">
      <div className="w-full h-[180px] flex items-center justify-center">
        {card?.image !== "1" && (
          <Image
            onClick={onHandleProduct}
            objectFit="contain"
            width={150}
            height={100}
            alt="img"
            src={card.productChilds[0]?.images[0]?.url}
            className="cursor-pointer"
          />
        )}
      </div>
      <div className="flex flex-col">
        <span
          onClick={onHandleProduct}
          className="text-[#414752] cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-medium"
        >
          {card?.title}
        </span>
        <div className="flex flex-row justify-between">
          <div className="flex cursor-pointer py-[1px] px-[3px] rounded-lg hover:bg-[#8045C61A]">
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
          </div>
          <span className="font-medium text-[17px] text-[#5B9F32]">Оригинал</span>
        </div>
      </div>
      <div className="flex flex-row mt-[5px] sm:mt-[10px] justify-between">
        <div className="py-[2px] flex justify-start items-center">
          <span className="text-[#FFA500] text-[20px] font-medium">
            {card?.price} &#8381;
          </span>
        </div>
        <button
          onClick={() => setCard(card)}
          style={{
            background:
              "radial-gradient(158.93% 1439.29% at 71.89% 100%, #86368D 0%, rgba(134, 54, 141, 0) 100%)",
          }}
          className="rounded-[10px] px-[10px] py-[2px] font-medium text-[16px] text-white"
        >
          Подробнее
        </button>
        {/* <div className="flex  items-center">
          <button className="p-[4px] hover:bg-[#8045C64D] bg-[#8045C633] rounded-[5px]">
            <AiOutlineMinus color="#8045c6" />
          </button>
          <span className="font-medium text-[18px] mx-[15px]">1</span>
          <button className="p-[4px] hover:bg-[#8045C64D] bg-[#8045C633] rounded-[5px]">
            <AiOutlinePlus color="#8045c6" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
