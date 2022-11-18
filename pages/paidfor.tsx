import { useRouter } from "next/router";
// layouts
import Container from "../layouts/Container";

export default function PaidFor() {
  const router = useRouter();

  return (
    <Container>
      <div className="flex h-full items-center justify-center">
        <div className="shadow-jj text-[#292929] font-medium items-center justify-center flex flex-col rounded-[20px] bg-white py-[15px] px-[20px] sm:px-[30px]">
          <span className="text-[20px]">Заказ успешно оформлен</span>
          <span className="text-[#3ea938] text-[30px] sm:text-[38px]">
            Спасибо за заказ!
          </span>
          <span className="text-center">
            Перейдите в личный кабинет, чтобы отслеживать состояния заказа.
          </span>
          <div className="flex text-[14px] sm:text-[16px] border mt-[20px] px-[15px] py-[10px] rounded-[10px]  w-full sm:w-[400px] flex-col">
            <div className="flex justify-between">
              <span className="font-bold">Номер заказа</span>
              <span>#292928</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Статус заказа</span>
              <span>Ожидает подтвержения</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:w-[400px] mt-[20px] justify-between">
            <button onClick={() => router.push("/")} className="w-full sm:w-[50%] hover:underline text-fuchsia-600 hover:text-fuchsia-700">
              На главную страницу
            </button>
            <button onClick={() => router.push("/profile")} className="w-full sm:w-[50%] mt-[10px] sm:mt-0 py-[4px] rounded-[10px] bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
              В личный кабинет
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
