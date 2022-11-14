import { Router, useRouter } from "next/router";
// hooks
import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export default function Sidebar() {
  const { user, isLoading } = useTypedSelector((state) => state.user);

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
    <>
      <div className="flex flex-col md:flex-row w-full justify-between">
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
                <span>{"M".charAt(0)}</span>
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
          <div className="relative shadow-jj mt-[30px] p-[15px] flex flex-row sm:flex-col items-center rounded-[10px] bg-white w-full sm:w-[240px]">
            <span className="absolute text-[#444f58] left-[15px] top-[3px]">
              меню
            </span>
            <button className="text-[#86368d] mt-[20px] sm:mt-[15px] w-[98%] hover:bg-[#8A63B91A] rounded-[10px] py-[5px] font-medium text-[18px] sm:text-[20px]">
              Заказы
            </button>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div>
            <div className="shadow-jj p-[15px] flex flex-col items-center rounded-[10px] bg-white w-[1000px]"></div>
          </div>
        </div>
      </div>
      
    </>
  );
}
