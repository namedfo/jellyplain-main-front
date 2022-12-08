import { useRouter } from "next/router";
import { useState } from "react";
import $api from "../../../config";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

export default function ProfileUser() {
  const { user } = useTypedSelector((state: any) => state.user)
  const [isSave, setIsSave] = useState<boolean>(false)
  const [phoneNumber, setPhoneNumber] = useState(user?.phone_number || "")

  const router = useRouter()

  const onHandleSave = async () => {
    try {
      setIsSave(true)
      await $api.post('/user/update', {
        phone_number: phoneNumber,
      })
      router.reload()
    } catch (error) {

    } finally {
      setIsSave(false)
    }
  }


  return (
    <div className="flex flex-col">
      <div>
        <div className="flex flex-col relative ">
          <label htmlFor="phone" className="text-gray-700">
            Телефон
          </label>
          <input
            type="text"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className=" rounded-lg border appearance-none border-gray-300 w-full sm:w-[250px] py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="phone"
            placeholder="Телефон"
          />
        </div>
      </div>

      <div className="flex pt-[20px] justify-center">
        <button onClick={onHandleSave} style={{
          cursor: isSave ? "wait" : "pointer"
        }} disabled={isSave} type="submit" className="font-[500] w-full sm:w-auto hover:bg-pink-100 border border-pink-400 rounded-[10px] px-[17px] py-[4px] text-pink-600">
          {isSave ? "Сохраняется..." : "Сохранить"}
        </button>
      </div>
    </div>
  );
}
