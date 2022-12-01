import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper";
import $api from "../../config";
import useActions from "../../hooks/useActions";
import Container from "../../layouts/Container";
dayjs.locale("ru");
export default function Order() {
  const [orderLocal, setOrderLocal] = useState<any>();

  const { setOrder } = useActions();

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const res = await $api.get(`order/getOne?id=${router.query?.id}`);

      setOrderLocal(res.data);
      setOrder(res.data.order);
    })();
  }, []);

  return (
    <Container>
      <div className="h-full flex items-center justify-center">
        {orderLocal?.order ? (
          <BlockOrder orderLocal={orderLocal} />
        ) : (
          <div className="flex w-full items-center flex-col">
            <p className="font-medium text-slate-800 text-[30px]">Ничего не найдено</p>
            <button onClick={() => router.push("/")} className=" sm:w-[40%] mt-[10px] sm:mt-0 py-[4px] rounded-[10px] bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
              На главную страницу
            </button>
          </div>
        )}
      </div>
    </Container>
  );
}

const BlockOrder = ({ orderLocal }: any) => {
  const router = useRouter();

  const onHandleBuy = async () => {
    const res = await $api.post("/order/buy", {
      order: {
        id: orderLocal?.order?.id,
      },
    });
    router.push(res?.data);
  };

  const date = dayjs(orderLocal?.order?.createdAt).format("DD.MM.YYYY HH:mm");

  return (
    <div className="shadow-jj flex flex-col rounded-[10px] p-[20px] bg-white">
      <div className="flex text-[8px] sm:text-[14px] justify-between">
        <div className="flex text-gray-400 items-center">
          <span>Оплачено</span>
          <BsArrowRightShort size={22} />
        </div>
        <div className="flex text-red-600 items-center">
          <span>Ожидает подтверждения</span>
          <BsArrowRightShort size={22} />
        </div>
        <div className="flex text-gray-400 items-center">
          <span>Подтвержденно</span>
          <BsArrowRightShort size={22} />
        </div>
        <div className="flex text-gray-400 items-center">
          <span>В пути</span>
        </div>
      </div>
      <div className="flex flex-col text-[16px] sm:flex-row my-[3px] sm:items-center justify-between">
        <div className="flex items-center">
          <span className="mr-[5px]">Заказ создан:</span>
          <span className="mr-[25px]">{date}</span>
        </div>
        <div className="flex items-center">
          <span className="block mr-[5px] sm:hidden">Номер заказа:</span>
          <span>№{orderLocal?.order?.id}</span>
        </div>
      </div>
      <div className="flex text-[14px] sm:text-[16px] border mt-[20px] px-[15px] py-[10px] rounded-[10px]  w-full flex-col">
        <div className="flex justify-between">
          <span className="font-bold">Номер заказа</span>
          <span>#292928</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">Статус заказа</span>
          <span>Ожидает подтвержения</span>
        </div>
      </div>
      <div className="bg-neutral-100 my-[5px] mt-[15px] rounded-[5px] pb-[8px] px-[5px]">
        <span className="text-[14px] text-slate-900 leading-[5px]">Товары</span>
        {/* <div className="h-[50px] rounded-[5px] bg-slate-700 w-[50px]"></div> */}
        <div className="max-w-[100px]">
          {orderLocal?.order?.productsOrder?.map((productOrder: any) => (
            <div
              onClick={() => router.push(`/product/${productOrder?.id}`)}
              className="relative w-[70px]"
            >
              <img
                className="h-[70px] rounded-[10px] border object-cover w-[70px]"
                src={productOrder.images[0]}
                alt="image"
              />
            </div>
          ))}
        </div>
      </div>
      {orderLocal?.order?.status === "pending" ? (
        <>
          {!orderLocal?.confirmation_url &&
          !orderLocal?.order?.yookassa?.yookassaId ? (
            <>
              <div>
                <button
                  onClick={onHandleBuy}
                  className="w-full sm:w-[40%] mt-[10px] sm:mt-0 py-[4px] rounded-[10px] bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
                >
                  Оплатить
                </button>
              </div>
            </>
          ) : (
            <>
              {orderLocal?.confirmation_url && (
                <div>
                  <button
                    onClick={() => router.push(orderLocal?.confirmation_url)}
                    className="w-full sm:w-[40%] mt-[10px] sm:mt-0 py-[4px] rounded-[10px] bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
                  >
                    Оплатить
                  </button>
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <div className="flex flex-col sm:flex-row w-full mt-[20px] justify-between">
          <button
            onClick={() => router.push("/")}
            className="w-full sm:w-[40%] hover:underline text-fuchsia-600 hover:text-fuchsia-700"
          >
            На главную страницу
          </button>
          <button
            onClick={() => router.push("/profile")}
            className="w-full sm:w-[40%] mt-[10px] sm:mt-0 py-[4px] rounded-[10px] bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
          >
            В личный кабинет
          </button>
        </div>
      )}
    </div>
  );
};
