import { useRouter } from "next/router";
//
import { HiHome } from "react-icons/hi";
import { FaUserAlt, FaShoppingBasket } from "react-icons/fa";
// hooks
import { useTypedSelector } from "../hooks/useTypedSelector";
import useActions from "../hooks/useActions";
import BtnToPaid from "./checkout/BtnToPaid";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function MobileMenu() {
  const { cart, product } = useTypedSelector((state) => state.cart);
  const { order } = useTypedSelector((state) => state.main)
  const { isAuth } = useTypedSelector((state) => state.user);

  const { setIsOpenAuth, plus, minus, setCard } = useActions();

  const router = useRouter();

  const newCart = Object.values(cart);

  const productCartId = `${product?.id}_${product?.selectedProductChild?.size}_${product?.selectedProductChild?.color}`;

  const getContent = () => {
    if (router.pathname === "/product/[id]") {
      return (
        <>
          {!cart[productCartId] ? (
            <>
              <button
                onClick={() => setCard(product)}
                className="border-[#8a63b9] hover:text-white h-[42px] border flex flex-col justify-center items-center hover:bg-[#8062a7] text-[#8a63b9] font-medium px-[15px] py-[4px] rounded-[10px]"
              >
                <span className="leading-[26px] text-[16px]">В корзину</span>
              </button>
              <button
                onClick={() => router.push("/checkout")}
                className="bg-[#8a63b9] border flex flex-col h-[42px] items-center hover:bg-[#8062a7] text-white font-medium px-[15px] py-[4px] rounded-[10px]"
              >
                <span className="leading-[17px] text-[17px]">
                  Купить сейчас
                </span>
                <span className="leading-[12px] text-[14px]">6990 &#8381;</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => router.push("/cart")}
                className="flex flex-col font-medium px-[15px] py-[4px] rounded-[10px] h-[42px] bg-[#8062a7] items-center"
              >
                <span className="leading-[16px] text-white text-[16px]">
                  В корзине
                </span>
                <span className="leading-[16px] text-cyan-200 text-[14px]">
                  Перейти
                </span>
              </button>
              <div className="flex mr-[10px] items-center">
                <button
                  onClick={() => minus(productCartId)}
                  className="p-[5px] hover:bg-[#8045C64D] bg-[#8045C633] rounded-[5px]"
                >
                  <AiOutlineMinus size={20} color="#8045c6" />
                </button>
                <span className="font-medium text-[22px] mx-[10px]">
                  {cart[productCartId]?.count}
                </span>
                <button
                  onClick={() => plus(productCartId)}
                  className="p-[5px] hover:bg-[#8045C64D] bg-[#8045C633] rounded-[5px]"
                >
                  <AiOutlinePlus size={20} color="#8045c6" />
                </button>
              </div>
            </>
          )}
        </>
      );
    } else if (router.pathname === "/checkout/[id]") {
      return (
        <>
          <span className="font-medium text-slate-900 text-[20px]">
            {order?.totalPrice} &#8381;
          </span>
          <BtnToPaid />
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={() => router.push("/")}
            className="hover:bg-[#8045C61A] rounded-[10px] p-[5px]"
          >
            <HiHome
              color={router.pathname === "/" ? "#86368D" : "#DBD9D9"}
              size={34}
            />
          </button>
          <button
            onClick={() => router.push("/cart")}
            className="hover:bg-[#8045C61A] relative rounded-[10px] p-[5px]"
          >
            {newCart?.length > 0 && (
              <div className="bg-[#ef7481] shadow-xl bottom-[-3px] left-[22px] text-[12px] px-[5px] absolute text-white rounded-[8px]">
                {newCart.length}
              </div>
            )}
            <FaShoppingBasket
              color={router.pathname === "/cart" ? "#86368D" : "#DBD9D9"}
              size={32}
            />
          </button>
          <button
            onClick={() => {
              if (!isAuth) {
                return setIsOpenAuth(true);
              }
              return router.push("/profile");
            }}
            className="hover:bg-[#8045C61A] rounded-[10px] p-[5px]"
          >
            <FaUserAlt
              color={router.pathname === "/profile" ? "#86368D" : "#DBD9D9"}
              size={28}
            />
          </button>
        </>
      );
    }
  };

  return (
    <div
      className={`shadow-jj md:hidden ${
        router.pathname === "/paidfor" ? "hidden" : "flex"
      } justify-around items-center ${
        router.pathname === "/product/[id]" ? "px-[10px]" : "px-[20px]"
      } h-[60px] rounded-[10px] bg-white w-[95%] fixed bottom-[10px] left-[2.5%]`}
    >
      {getContent()}
    </div>
  );
}
