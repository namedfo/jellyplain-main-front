import { useEffect, useState } from "react";
//
import { useRouter } from "next/router";
//
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
// components
import Header from "../../components/Header";
import Info from "../../components/checkout/Info";
import BtnToPaid from "../../components/checkout/BtnToPaid";
// layouts
import Container from "../../layouts/Container";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import $api from "../../config";
import { count } from "console";

export default function Checkout() {
  const [order, setOrder] = useState<any>(undefined);

  // const { isAuth } = useTypedSelector(state => state.user)
  const isAuth = true;

  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push("/");
      return;
    }

    (async () => {
      try {
        const res = await $api.get(`order/getOne?id=${router.query?.id}`);
        console.log(res);
        setOrder(res.data);
      } catch (error) {}
    })();
  }, [isAuth]);

  return (
    <Container>
      <Header />
      {isAuth && (
        <div className="w-full flex justify-between md:pt-[50px]">
          <div className="flex w-full md:w-[750px] flex-col">
            <Info order={order} />
            <Products />
          </div>
          <div className="hidden md:flex">
            <div>
              <Total
                totalPrice={order?.totalPrice}
                count={order?.productsOrder?.reduce(
                  (prev: number, next: any) => prev + next.count,
                  0
                )}
              />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-jj py-[15px] hidden md:flex px-[20px] mt-[10px] md:mt-[30px] bg-white rounded-[10px]">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex cursor-pointer items-center"
      >
        <span className="text-[16px] md:text-[18px] font-medium text-[#292929]">
          Товары
        </span>
        <button className="hover:bg-[#8045C61A] md:ml-[20px] p-[3px] rounded-[10px]">
          {isOpen ? (
            <AiOutlineArrowUp color="#292928" size={26} />
          ) : (
            <AiOutlineArrowDown color="#292928" size={26} />
          )}
        </button>
      </div>
    </div>
  );
};

const Total = ({ totalPrice, count }: any) => {
  return (
    <div className="shadow-jj rounded-[10px] w-[420px] bg-white py-[15px] px-[20px]">
      <div className="payment-form"></div>
      <span className="text-[20px] my-[30px] font-medium text-[#292929]">
        Оплата
      </span>
      <div className="flex mt-[10px] text-[17px] items-center justify-between">
        <span>Товары ({count})</span>
        <span>{totalPrice} &#8381;</span>
      </div>
      <div className="flex text-[17px] items-center justify-between">
        <span>Стоимость доставки</span>
        <span>850 &#8381;</span>
      </div>
      <div className="flex mt-[20px] text-[#212121] font-medium justify-between">
        <span>Итог</span>
        <span>{totalPrice + 850} &#8381;</span>
      </div>
      <BtnToPaid />
    </div>
  );
};
