import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Header from "../../components/Header";
import $api from "../../config";
import useActions from "../../hooks/useActions";
import Container from "../../layouts/Container";

export default function Order() {
  const [orderLocal, setOrderLoca] = useState()

  const { setOrder } = useActions()

  const router = useRouter()

  useEffect(() => {
    (async () => {
      const res = await $api.get(`order/getOne?id=${router.query?.id}`);
      if (res.data.status === "pending" ) {
        const response = await axios.get('https://api.yookassa.ru/v3/payments/2b170a0f-000f-5000-8000-11ed6416c782', {
          auth: {
            username: "959763",
            password: "test_QBY07j0SMDgiGT-JMxF_0UZgNbFRtBFL53rwWs7ZhzQ"
          }
        })
        console.log(response)
      }
      console.log(res.data)
    })()
  }, [])

  return (
    <Container>
      <Header />
      <div className="h-full flex items-center justify-center">
        <div className="shadow-jj flex flex-col rounded-[10px] p-[20px] bg-white">
          <div className="flex text-[8px] justify-between">
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
            <span className="mr-[25px]">Заказ создан: 21.01.2022</span>
            <div className="flex items-center">
              <span className="block mr-[5px] sm:hidden">Номер заказа:</span>
              <span>№2929</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
