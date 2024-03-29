import { useRouter } from "next/router";
import $api from "../config";
import useActions from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export default function BtnToBuy() {
  const { totalPrice, cart } = useTypedSelector((state) => state.cart);
  const { isAuth } = useTypedSelector((state) => state.user);

  const { setCartIsShow, setIsOpenAuth } = useActions();

  const newCart = Object.values(cart); 

  const router = useRouter()
  
  const onCreateOrder = async () => {
    try {
      let productsOrder: any = [];

      newCart.forEach((card: any) => {
        productsOrder = [
          ...productsOrder,
          {
            size: card?.info?.productChild?.size,
            color: card?.info?.productChild?.color,
            images: card?.info?.productChild?.images.map((image: any) => image.url),
            count: card?.count,
            price: card?.info?.price,
            product: { connect: { id: card?.info?.id } },
          },
        ];
      });

      const res = await $api.post("order/create", {
        totalPrice: totalPrice,
        delivery: "pochtaru",
        status: "pending",
        productsOrder: productsOrder,
      });

      router.push(`/checkout/${res.data.id}`)
      setCartIsShow(false)
    } catch (error) {}
  };

  return (
    <>
      {isAuth ? (
        <button
          onClick={onCreateOrder}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium text-[18px] w-full py-[5px] rounded-[10px]"
        >
          Купить
        </button>
      ) : (
        <button
          onClick={() => {
            setCartIsShow(false);
            setIsOpenAuth(true);
          }}
          className=" text-[#307fee] hover:underline font-medium text-[17px] w-full rounded-[10px]"
        >
          Чтобы продолжить покупку, необходимо авторизоваться
        </button>
      )}
    </>
  );
}
