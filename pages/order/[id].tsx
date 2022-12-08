import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import $api from "../../config";
import useActions from "../../hooks/useActions";
import Container from "../../layouts/Container";
import Developer from "../../components/Developer";
//
dayjs.locale("ru");

export default function Order() {
  const [orderLocal, setOrderLocal] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { setOrder } = useActions();

  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await $api.get(`order/getOne?id=${router.query?.id}`);

        setOrderLocal(res.data);
        setOrder(res.data.order);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Container>
      <div className="h-full flex justify-center">
        {isLoading && (
          <span className="text-[#333333] font-[600] text-[16px]">
            Загрузка...
          </span>
        )}
        {orderLocal?.order ? (
          <div className="flex w-[90%] sm:w-auto sm:mt-[20px] flex-col">
            <BlockOrder orderLocal={orderLocal} />
            <div className="flex mt-[100px] justify-center">
              <Developer />
            </div>
            <div className="py-[10px]" />
          </div>
        ) : (
          !isLoading && (
            <div className="flex w-full items-center flex-col">
              <p className="font-medium text-slate-800 text-[30px]">
                Ничего не найдено
              </p>
              <button
                onClick={() => router.push("/")}
                className=" sm:w-[40%] mt-[10px] sm:mt-0 py-[4px] rounded-[10px] bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
              >
                На главную страницу
              </button>
            </div>
          )
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

  console.log(orderLocal?.order)


  const address = orderLocal?.order?.address

  return (
    <div className="shadow-jj flex flex-col rounded-[10px] px-[12px] py-[9px] bg-white">
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
      <div className="bg-neutral-100 my-[5px] mt-[15px] rounded-[5px] pb-[8px] px-[5px]">
        <span className="text-[14px] text-slate-900 leading-[5px]">Товары</span>
        {/* <div className="h-[50px] rounded-[5px] bg-slate-700 w-[50px]"></div> */}
        <div className="max-w-[200px] flex">
          {orderLocal?.order?.productsOrder?.map((productOrder: any) => (
            <div
              key={productOrder?.id}
              onClick={() => router.push(`/product/${productOrder?.id}`)}
              className="relative flex flex-col w-[70px]"
            >
              <img
                className="h-[70px] rounded-[10px] border object-cover w-[70px]"
                src={productOrder.images[0]}
                alt="image"
              />
              <div className="flex text-[15px] items-center justify-around">
                <div className="bg-black w-[30px] h-[15px] rounded-[5px]" />
                <span className="font-medium text-[#333333]">
                  37
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex text-[14px] border mt-[20px] px-[8px] py-[5px] rounded-[10px]  w-full flex-col">
        <div className="flex justify-between">
          <span className="font-[500]">Фамилия:</span>
          <span>{address?.surname}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-[500]">Имя:</span>
          <span>{address?.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-[500]">Отчество:</span>
          <span>{address?.middlename}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-[500]">Страна:</span>
          <span>{address?.country}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-[500]">Область:</span>
          <span>{address?.region}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-[500]">Город:</span>
          <span>{address?.city}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-[500]">Улица:</span>
          <span>{address?.street}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-[500]">Дом:</span>
          <span>{address?.home_number}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-[500]">Квартира:</span>
          <span>{address?.flat_number}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-[500]">Почтовый индекс:</span>
          <span>{address?.postal_code}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-[500]">Номер:</span>
          <span>{address?.phone_number}</span>
        </div>
      </div>
      <div className="flex mt-[20px] flex-col">
        <div className="flex justify-between">
          <span className="text-[16px] text-slate-900 font-medium">
            Итого:
          </span>
          <span className="text-[16px] text-slate-900 font-medium">
            {orderLocal?.order?.totalPrice + (orderLocal?.order?.delivery === 'pochtaru' ? 850 : 0)} &#8381;
          </span>
        </div>
        <div className="ml-[20px] flex justify-between items-center text-slate-900">
          <span>Товары ({orderLocal?.order?.productsOrder?.reduce((prev: number, next: any) => prev + next.count, 0)})</span>
          <span>{orderLocal?.order?.totalPrice} &#8381;</span>
        </div>
        <div className="ml-[20px] flex justify-between items-center text-slate-900">
          <span>Доставка</span>
          <span>{orderLocal?.order?.delivery === 'pochtaru' ? 850 : 0} &#8381;</span>
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
