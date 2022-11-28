import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Header from "../../components/Header";
import $api from "../../config";
import useActions from "../../hooks/useActions";
import Container from "../../layouts/Container";

export default function Order() {
  const [orderLocal, setOrderLocal] = useState<any>()

  const { setOrder } = useActions()

  const router = useRouter()

  useEffect(() => {
    (async () => {
      const res = await $api.get(`order/getOne?id=${router.query?.id}`);
      
      setOrderLocal(res.data)
      setOrder(res.data)
    })()
  }, [])

  return (
    <Container>
      <Header />
      <div className="h-full flex items-center justify-center">
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
            <span className="mr-[25px]">21.01.2022</span>
            </div>
            <div className="flex items-center">
              <span className="block mr-[5px] sm:hidden">Номер заказа:</span>
              <span>№{orderLocal?.id}</span>
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
          <div className="flex flex-col sm:flex-row w-full mt-[20px] justify-between">
            <button onClick={() => router.push("/")} className="w-full sm:w-[40%] hover:underline text-fuchsia-600 hover:text-fuchsia-700">
              На главную страницу
            </button>
            <button onClick={() => router.push("/profile")} className="w-full sm:w-[40%] mt-[10px] sm:mt-0 py-[4px] rounded-[10px] bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
              В личный кабинет
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
