import useActions from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export default function BtnToBuy() {
  const { isAuth } = useTypedSelector((state) => state.user);

  const { setCartIsShow, setIsOpenAuth } = useActions();

  return (
    <>
      {!isAuth ? (
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium text-[18px] w-full py-[5px] rounded-[10px]">
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
