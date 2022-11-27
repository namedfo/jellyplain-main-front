import axios from "axios";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export default function BtnToPaid() {
  const { order } = useTypedSelector((state: any) => state.main);

  const onHandleBuy = async () => {
    const res = await axios.post(
      "https://api.yookassa.ru/v3/payments",
      {
        amount: {
          value: "100.00",
          currency: "RUB",
        },
        capture: true,
        confirmation: {
          type: "redirect",
          return_url: "https://jellyplain-main.vercel.app",
        },
        description: "Заказ №1",
      },
      {
        headers: {
          "Idempotence-Key": 5322,
          "Content-Type": "application/json",
        },
        auth: {
          username: "959763",
          password: "test_QBY07j0SMDgiGT-JMxF_0UZgNbFRtBFL53rwWs7ZhzQ",
        },
      }
    );
    console.log(res);
  };

  return (
    <button
      onClick={onHandleBuy}
      type="button"
      className="py-1 px-4 w-auto md:w-full bg-[#8a63b9] hover:bg-[#8062a7] text-white font-medium rounded-lg"
    >
      К оплате
    </button>
  );
}
