import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
//
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
//
import logo from "../utils/logo.jpg";
import cartImg from "../utils/jj-cart.svg";
//
import { useTypedSelector } from "../hooks/useTypedSelector";
import useActions from "../hooks/useActions";
import useOutside from "../hooks/useOutside";
// modals
import Auth from "../modals/Auth";
import sizes from "../utils/helping/sizesSneakers";
import BtnToBuy from "./BtnToBuy";
import colors from "../utils/helping/colors";
import sizesSneakers from "../utils/helping/sizesSneakers";

export default function Header() {
  const { cartIsShow, cart } = useTypedSelector((state) => state.cart);
  const { isAuth } = useTypedSelector((state) => state.user);
  const { isOpenAuth } = useTypedSelector((state) => state.main);

  const { setCartIsShow, setIsOpenAuth } = useActions();

  const router = useRouter();

  const onToggleCartShow = () => {
    setCartIsShow(!cartIsShow);
  };

  const { ref } = useOutside(() => setCartIsShow(false));

  const newCart = Object.values(cart);
  return (
    <div className="w-full px-[15px] hidden md:flex justify-between bg-white h-[60px] shadow-jj rounded-[10px]">
      <Auth isOpen={isOpenAuth} onClose={() => setIsOpenAuth(false)} />
      <div className="w-[33%] flex items-center">
        <button className="bg-[#86368D1A] hover:bg-[#86368D33] flex items-center text-[#58355a] rounded-[10px] py-[5px] px-[15px]">
          <IoSearchSharp size={20} />
          <span className="font-medium ml-[7px] text-[18px]">Поиск</span>
        </button>
      </div>
      <div className="w-[33%] flex relative justify-center">
        <button
          className="absolute top-[-7px] flex items-center justify-center rounded-full hover:shadow-md shadow-logo bg-white w-[75px] h-[75px]"
          onClick={() => router.push("/")}
        >
          <Image
            className="cursor-pointer rounded-full"
            width={75}
            height={75}
            src={logo}
            alt="logo"
          />
        </button>
      </div>
      <div className="w-[33%] flex items-center justify-end">
        <div className="relative" ref={ref}>
          <button
            onClick={onToggleCartShow}
            style={{
              backgroundColor: cartIsShow ? "#E7E9EB" : "",
            }}
            className="hover:bg-[#86368D1A] rounded-md p-[6px]"
          >
            {newCart?.length > 0 && (
              <div className="bg-[#ef7481] shadow-xl bottom-[-3px] left-[22px] text-[12px] px-[5px] absolute text-white rounded-[8px]">
                {newCart.length}
              </div>
            )}
            <Image
              color="#58355a"
              width={28}
              height={28}
              src={cartImg}
              alt=""
            />
          </button>
          {cartIsShow && (
            <PopupCart
              setCartIsShow={setCartIsShow}
              setIsOpenAuth={setIsOpenAuth}
            />
          )}
        </div>
        <button
          onClick={() => {
            if (!isAuth) {
              return setIsOpenAuth(true);
            }
            return router.push("/profile");
          }}
          className="hover:bg-[#86368D1A] rounded-md p-[6px] ml-[20px]"
        >
          <FaRegUser color="#58355a" size={26} />
        </button>
      </div>
    </div>
  );
}

const getSize = (type: string, size: any) => {
  switch (type) {
    case "sneakers":
      return sizesSneakers[size]?.size || null;
    case "clothes":
      return size || null;
    default:
      return "";
  }
};
const PopupCart = ({ setIsOpenAuth, setCartIsShow }: any) => {
  const { cart, totalPrice } = useTypedSelector((state) => state.cart);
  const { isAuth } = useTypedSelector((state) => state.user);

  const { removeCard } = useActions();

  const newCart = Object.values(cart);

  return (
    <div className="shadow-popup z-10 flex flex-col w-[440px] border rounded-[10px] right-[20px] absolute bg-white p-[15px]">
      <span className="text-[20px] mb-[7px] text-[#292929] font-medium">
        Корзина
      </span>
      {newCart?.length === 0 ? (
        <div className="w-full py-[30px] text-center">
          <span className="font-medium text-[#8A8A8A]">
            Ваша корзина пуста :(
          </span>
        </div>
      ) : (
        <>
          <div className="flex flex-col max-h-[350px] overflow-y-auto divide-y">
            {newCart?.map((card: any) => (
              <div
                key={card?.id}
                className="flex px-[10px] justify-between py-[10px]"
              >
                <div className="flex items-center">
                  <img
                    className="object-contain h-[90px] w-[90px]"
                    src={card?.info?.productChild?.images[0]?.url}
                  />
                  <div className="flex ml-[10px] flex-col">
                    <span className="text-[#292929] text-[18px] font-medium">
                      {card?.info?.title}
                    </span>
                    <div className="flex items-center">
                      {card?.info?.productChild?.size && (
                        <>
                          <span className="mr-[3px]">Размер: </span>
                          <span>
                            {getSize(
                              card?.info?.category,
                              card?.info?.productChild?.size
                            )}
                          </span>
                          <div className="rounded-full h-[5px] mx-[10px] w-[5px] bg-slate-700" />
                        </>
                      )}

                      <span className="mr-[3px]">Цвет:</span>

                      <div
                        style={{
                          backgroundColor: colors[card?.info?.productChild?.color]?.color
                        }}
                        className={`w-[50px] cursor-pointer flex ml-[5px] my-[3px] rounded-[5px] h-[20px] border`}
                      >
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
                    onClick={() => removeCard(card?.id)}
                    className="font-medium hover:text-[#4896c0] text-[#6cb4db]"
                  >
                    удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex text-[#212121] font-medium justify-between">
              <span>Итог</span>
              <span>{totalPrice} &#8381;</span>
            </div>
            <BtnToBuy />
          </div>
        </>
      )}
    </div>
  );
};
