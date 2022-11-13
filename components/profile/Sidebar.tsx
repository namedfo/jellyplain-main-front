import { useTypedSelector } from "../../hooks/useTypedSelector";

export default function Sidebar() {
  const { isAuth } = useTypedSelector((state) => state.user);
  return (
    <>
      {!isAuth ? (
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <div className="shadow-jj p-[15px] flex flex-col items-center rounded-[10px] bg-white w-[240px]">
              <div className="border rounded-full w-[120px] h-[120px]"></div>
              <div className="flex mt-[12px] text-[20px] items-center">
                <span>Миша</span>
                <span className="ml-[8px]">Полещенков</span>
              </div>
            </div>
            <div className="relative shadow-jj mt-[30px] p-[15px] flex flex-col items-center rounded-[10px] bg-white w-[240px]">
              <span className="absolute text-[#444f58] left-[15px] top-[3px]">
                меню
              </span>
              <button className="text-[#86368d] mt-[15px] w-[90%] hover:bg-[#8A63B91A] rounded-[10px] py-[6px] font-medium text-[20px]">
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
      ) : (
        <div
          style={{
            height: "calc(100% - 70px)",
          }}
          className="flex items-center text-[#86368d] font-medium text-[22px] justify-center"
        >
          Вы неавторизованы
        </div>
      )}
    </>
  );
}
