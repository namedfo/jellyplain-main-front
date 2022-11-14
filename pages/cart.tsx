import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
//
import Header from "../components/Header";
// layouts
import Container from "../layouts/Container";
// hooks
import { useTypedSelector } from "../hooks/useTypedSelector";
import useActions from "../hooks/useActions";

export default function Cart() {
  const { cart } = useTypedSelector((state) => state.cart);
  const { isAuth } = useTypedSelector((state) => state.user);
  const { setIsOpenAuth } = useActions();

  return (
    <Container>
      <Header />
      <div className="h-full md:mt-[30px]">
        <div className="overflow-y-auto rounded-[10px] bg-white shadow-jj">
          <span className="text-[20px] ml-[15px] mb-[7px] text-[#292929] font-medium">
            Корзина
          </span>
          <div className="flex flex-col px-[10px] overflow-y-auto divide-y">
            {cart?.map((card: any) => (
              <Elem key={card.id} card={card} />
            ))}
          </div>
          <div className="px-[15px] mt-[10px]">
            <div className="flex text-[18px] text-[#212121] font-medium justify-between">
              <span>Итог</span>
              <span>6 111 &#8381;</span>
            </div>
          </div>
          {isAuth ? (
            <button className="bg-[#307fee] my-[15px] text-white font-medium text-[18px] w-full py-[5px] rounded-[10px]">
              Купить
            </button>
          ) : (
            <button
              onClick={() => setIsOpenAuth(true)}
              className=" text-[#307fee] my-[15px] px-[6px] hover:underline font-medium text-[17px] w-full rounded-[10px]"
            >
              Чтобы продолжить покупку, необходимо авторизоваться
            </button>
          )}
        </div>
        <div className="h-[75px]" />
      </div>
    </Container>
  );
}

const Elem = ({ card }: any) => {
  return (
    <div
      // key={card?.id}
      className="flex px-[10px] justify-between py-[10px]"
    >
      <div className="flex items-center">
        {card?.image !== "1" && (
          <img
            className="object-contain h-[90px] w-[90px]"
            src={card?.productChilds[0]?.images[0]?.url}
          />
        )}
        <div className="flex ml-[10px] flex-col">
          <span className="text-[#292929] text-[16px] font-medium">
            {card?.title}
          </span>
          <div>
            <span>size and </span>
            <span>color</span>
          </div>
          <div className="flex mr-[10px] items-center">
            <button className="p-[4px] hover:bg-[#8045C64D] bg-[#8045C633] rounded-[5px]">
              <AiOutlineMinus color="#8045c6" />
            </button>
            <span className="font-medium text-[18px] mx-[10px]">1</span>
            <button className="p-[4px] hover:bg-[#8045C64D] bg-[#8045C633] rounded-[5px]">
              <AiOutlinePlus color="#8045c6" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-[95px] justify-between items-end flex-col">
        <span className="text-[#FFA500] text-[16px] font-medium">
          {card?.price} &#8381;
        </span>
        <button className="font-medium hover:text-[#4896c0] text-[#6cb4db]">
          remove
        </button>
      </div>
    </div>
  );
};
