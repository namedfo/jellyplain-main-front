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
    <div className="shadow-jj p-[15px] mt-[30px] rounded-[10px] bg-white w-[160px] sm:w-[230px]">
      <div className="w-full h-[180px] flex items-center justify-center">
        {/* {card?.image !== "1" && (
          <Image
            onClick={onHandleProduct}
            objectFit="contain"
            width={150}
            height={150}
            alt=""
            src={card?.image}
            className="cursor-pointer"
          />
        )} */}
      </div>
      <div className="flex flex-col">
        <span
          onClick={onHandleProduct}
          className="text-[#414752] cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis text-[20px] font-medium"
        >
          {card?.title}
        </span>
        <div className="flex justify-between">
          {/* <div className="flex cursor-pointer py-[1px] px-[3px] rounded-lg hover:bg-[#8045C61A]">
            <div className="flex items-center">
              <AiFillStar color="#fbbf24" />
              <span className="text-[#79828e] text-[16px] font-medium ml-[5px]">
                4.3
              </span>
            </div>
            <div className="flex ml-[10px] items-center">
              <BiCommentDots color="#35404A" />
              <span className="text-[#35404A] text-[16px] font-medium  ml-[5px]">
                53
              </span>
            </div>
          </div> */}
          <span className="font-medium text-[#5B9F32]">Оригинал</span>
        </div>
      </div>
      <div className="flex mt-[10px] justify-between">
        <div className="py-[2px] flex justify-start items-center">
          <span className="text-[#FFA500] text-[20px] font-medium">
            {card?.price} &#8381;
          </span>
        </div>
        {/* <button
          onClick={() => setCard(card)}
          style={{
            background:
              "radial-gradient(100% 235.27% at 71.89% 100%, #9752E9 0%, rgba(128, 69, 198, 0) 100%)",
          }}
          className="rounded-[10px] px-[10px] py-[2px] font-medium text-[16px] text-white"
        >
          В корзину
        </button> */}
        <div className="flex  items-center">
          <button className="p-[4px] hover:bg-[#8045C64D] bg-[#8045C633] rounded-[5px]">
            <AiOutlineMinus color="#8045c6" />
          </button>
          <span className="font-medium text-[18px] mx-[15px]">1</span>
          <button className="p-[4px] hover:bg-[#8045C64D] bg-[#8045C633] rounded-[5px]">
            <AiOutlinePlus color="#8045c6" />
          </button>
        </div>
      </div>
    </div>
  );
}
