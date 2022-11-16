import { Router, useRouter } from "next/router";
// hooks
import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export default function Sidebar({ onHandleChangeMenu, menuActive }: any) {
  const { user } = useTypedSelector((state) => state.user);

  const { setUser, setIsAuth } = useActions();

  const router = useRouter();

  const onHandleExit = () => {
    localStorage.removeItem("jjwt");
    localStorage.removeItem("userjj");

    setUser(null);
    setIsAuth(false);

    router.push("/");
  };
  return (
    <div className="flex flex-col">
      <div className="shadow-jj relative p-[15px] flex flex-col items-center rounded-[10px] bg-white w-full sm:w-[240px]">
        {user?.avatar_url ? (
          <img
            className="border rounded-full w-[120px] h-[120px]"
            src={user?.avatar_url}
            alt="avatar"
          />
        ) : (
          <div className="border bg-[whitesmoke] text-[#5e5850] text-[28px] rounded-full flex items-center justify-center w-[120px] h-[120px]">
            <span>{user?.first_name.charAt(0)}</span>
          </div>
        )}
        <div className="flex mt-[12px] text-[20px] items-center">
          <span>{user?.first_name}</span>
          <span className="ml-[8px]">{user?.last_name}</span>
        </div>
        <button
          onClick={onHandleExit}
          className="absolute font-medium text-[#A53D3D] right-[15px] top-[5px]"
        >
          выйти
        </button>
      </div>
      <div className="relative shadow-jj mt-[10px] md:mt-[30px] p-[15px] flex flex-row sm:flex-col justify-center items-center rounded-[10px] bg-white w-full sm:w-[240px]">
        <span className="absolute text-[#444f58] left-[15px] top-[3px]">
          меню
        </span>
        <button
          onClick={() => onHandleChangeMenu("orders")}
          className={`${menuActive.name === "orders" ? "text-white bg-[#86368d]" : "text-[#86368d] hover:bg-[#8A63B91A]"} mt-[20px] sm:mt-[15px] w-[98%] rounded-[10px] py-[5px] font-medium text-[18px] sm:text-[20px]`}
        >
          Заказы
        </button>
        <button
          onClick={() => onHandleChangeMenu("settings")}
          className={`${menuActive.name === "settings" ? "text-white bg-[#86368d]" : "text-[#86368d] hover:bg-[#8A63B91A]"} mt-[20px] sm:mt-[15px] w-[98%] rounded-[10px] py-[5px] font-medium text-[18px] sm:text-[20px]`}
        >
          Настройки
        </button>
      </div>
    </div>
  );
}
