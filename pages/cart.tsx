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
import sizes from "../utils/helping/sizesSneakers";
import BtnToBuy from "../components/BtnToBuy";

export default function Cart() {
  const { cart, totalPrice } = useTypedSelector((state) => state.cart);
  const { removeCard } = useActions();

  const newCart = Object.values(cart);

  return (
    <Container>
      <Header />
      <div className="h-full md:mt-[30px]">
        {newCart?.length > 0 ? (
          <>
            <div className="overflow-y-auto rounded-[10px] bg-white shadow-jj">
              <span className="text-[20px] ml-[15px] mb-[7px] text-[#292929] font-medium">
                Корзина
              </span>
              <div className="flex flex-col px-[10px] overflow-y-auto divide-y">
                {newCart?.map((card: any) => (
                  <Elem removeCard={removeCard} key={card.id} card={card} />
                ))}
              </div>
              <div className="px-[15px] mt-[10px]">
                <div className="flex text-[18px] text-[#212121] font-medium justify-between">
                  <span>Итог</span>
                  <span>{totalPrice} &#8381;</span>
                </div>
              </div>
              <BtnToBuy />
            </div>
            <div className="h-[75px]" />
          </>
        ) : (
          <div className="h-full flex items-center justify-center">
            <span className="font-medium text-slate-600">
              Ваша корзина пуста :(
            </span>
          </div>
        )}
      </div>
    </Container>
  );
}

const Elem = ({ removeCard, card }: any) => {
  return (
    <div className="flex px-[10px] justify-between py-[10px]">
      <div className="flex items-center">
        <img
          className="object-contain h-[70px] w-[70px]"
          src={card?.info?.productChild?.images[0]?.url}
        />
        <div className="flex ml-[10px] flex-col">
          <span className="text-[#292929] text-[16px] font-medium">
            {card?.info?.title}
          </span>
          <div className="flex items-center">
            {(sizes[card?.info?.productChild?.size]?.size ||
              card?.info?.productChild?.size) && (
              <>
                <span className="mr-[3px]">Размер: </span>
                <span>
                  {sizes[card?.info?.productChild?.size]?.size ||
                    card?.info?.productChild?.size}
                </span>
                <div className="rounded-full h-[5px] mx-[10px] w-[5px] bg-slate-700" />
              </>
            )}
            <span className="mr-[3px]">
              Цвет
              {card?.info?.productChild?.colors.length > 1 && "(а)"}:
            </span>

            <div
              className={`w-[50px] cursor-pointer flex ml-[5px] my-[3px] rounded-[5px] h-[20px] border`}
            >
              {card?.info?.productChild?.colors?.map(
                (color: any, j: number) => (
                  <div
                  key={color.id}
                    style={{
                      backgroundColor: color.hex,
                      borderTopLeftRadius: j === 0 ? "3px" : "",
                      borderBottomLeftRadius: j === 0 ? "3px" : "",
                      borderTopRightRadius:
                        card?.info?.productChild?.colors?.length - 1 === j
                          ? "3px"
                          : "",
                      borderBottomRightRadius:
                        card?.info?.productChild?.colors?.length - 1 === j
                          ? "3px"
                          : "",
                    }}
                    className="w-full h-full"
                  />
                )
              )}
            </div>
          </div>
          <div className="flex mr-[10px] items-center">
            <button className="p-[4px] hover:bg-[#8045C64D] bg-[#8045C633] rounded-[5px]">
              <AiOutlineMinus color="#8045c6" />
            </button>
            <span className="font-medium text-[18px] mx-[10px]">
              {card?.count}
            </span>
            <button className="p-[4px] hover:bg-[#8045C64D] bg-[#8045C633] rounded-[5px]">
              <AiOutlinePlus color="#8045c6" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-[95px] justify-between items-end flex-col">
        <span className="text-[#FFA500] text-[18px] font-medium">
          {card?.totalPrice} &#8381;
        </span>
        <button
          onClick={() => removeCard(card.id)}
          className="font-medium hover:text-[#4896c0] text-[#6cb4db]"
        >
          удалить
        </button>
      </div>
    </div>
  );
};
