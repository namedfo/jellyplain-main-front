import axios from "axios";
import { useRouter } from "next/router";
import $api from "../../config";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export default function BtnToPaid() {
  const { order } = useTypedSelector((state: any) => state.main);
  
  const router = useRouter()

  const onHandleBuy = async () => {
    const res = await $api.post("/order/buy", {
      price: order?.totalPrice + 850,
      order: {
        id: order?.id
      }

    });
    router.push(res?.data?.confirmation?.confirmation_url)
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
