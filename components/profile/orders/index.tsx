import { useState } from "react";
// icons
import { BsArrowRightShort } from "react-icons/bs";
import OrderDetail from "../../../modals/OrderDetail";

export default function Orders() {
  const [activeTab, setActiveTab] = useState({
    name: "active",
    component: "active",
  });

  const onHandleChangeTab = (tab: string) => {
    if (tab === "active") {
      setActiveTab({
        name: "active",
        component: "active",
      });
    }
    if (tab === "complected") {
      setActiveTab({
        name: "complected",
        component: "complected",
      });
    }
  };

  return (
    <div className="shadow-jj relative w-full py-[15px] px-[20px] flex flex-col rounded-[10px] bg-white">
      <div className="flex justify-end md:justify-between items-center">
        <span className="text-[20px] hidden md:block font-medium text-[#292929]">
          Заказы
        </span>
        <span className="absolute text-[16px] font-medium block sm:hidden text-[#292929] left-[15px] top-[3px]">
          Заказы
        </span>
        <div className="bg-[#8A63B91A] text-[14px] font-medium px-[3px] rounded-[10px]">
          <button
            onClick={() => onHandleChangeTab("active")}
            className={`px-[15px] ${
              activeTab.name === "active"
                ? "bg-blue-600 rounded-tl-[10px] text-white rounded-bl-[10px]"
                : "text-sky-900"
            } py-[4px]`}
          >
            Активные
          </button>
          <button
            onClick={() => onHandleChangeTab("complected")}
            className={`px-[15px] ${
              activeTab.name === "complected"
                ? "bg-blue-600 rounded-tr-[10px] text-white rounded-br-[10px]"
                : "text-sky-900"
            } py-[4px]`}
          >
            Завершенные
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start items-center">
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </div>
  );
}

const OrderItem = () => {
  // const [isShow, setIsShow] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);

  return (
    <div className="flex relative sm:mx-[4px] my-[5px] w-full 400:w-auto flex-wrap justify-between pt-[20px]">
      <OrderDetail
        isOpen={isShowDetail}
        onClose={() => setIsShowDetail(false)}
      />
      <div className="py-[5px] sm:py-[10px] w-full flex flex-col px-[10px] sm:px-[15px] rounded-[10px] border">
        <div className="flex justify-center text-[16px]">
          <div className="flex items-center">
            <span className="text-red-600">Ожидает подтверждения</span>
          </div>
        </div>
        <div className="flex flex-col text-[16px] sm:flex-row my-[3px] sm:items-center justify-between">
          <span className="mr-[25px]">Заказ создан: 21.01.2022</span>
          <div className="flex items-center">
            <span className="block mr-[5px] sm:hidden">Номер заказа:</span>
            <span>№2929</span>
          </div>
        </div>
        <div>
          <div className="bg-neutral-100 my-[5px] rounded-[5px] pb-[8px] px-[10px]">
            <span className="text-[14px] text-slate-900 leading-[5px]">
              Товары
            </span>
            <div className="flex">
              <div className="h-[50px] rounded-[5px] bg-slate-700 w-[50px]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end">
            {/* {isShow ? (
              <button
                onClick={() => setIsShow(false)}
                className="text-indigo-500 hover:text-indigo-800"
              >
                Скрыть
              </button>
            ) : ( */}
            <button
              onClick={() => setIsShowDetail(true)}
              className="text-indigo-500 hover:text-indigo-800"
            >
              Подробная информация
            </button>
            {/* )} */}
          </div>
          {/* {isShow && (
            <>
              <div className="flex flex-col">
                <span className="text-[16px] text-slate-900 font-medium">
                  Получатель:
                </span>
                <span className="ml-[20px] text-slate-900">
                  Misha Poleshchenkov
                </span>
                <span className="ml-[20px] text-slate-900">
                  +7 952 996 49 01
                </span>
              </div>
              <div className="h-[1px] my-[12px] mx-auto w-[95%] bg-neutral-200" />
              <div className="flex flex-col">
                <span className="text-[16px] text-slate-900 font-medium">
                  Адрес доставки:
                </span>
                <span className="ml-[20px] text-slate-900">адрес...</span>
              </div>
              <div className="h-[1px] my-[12px] mx-auto w-[95%] bg-neutral-200" />
            </>
          )} */}
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span className="text-[16px] text-slate-900 font-medium">
              Итого:
            </span>
            <span className="text-[16px] text-slate-900 font-medium">
              24 690 Р
            </span>
          </div>
          <div className="ml-[20px] flex justify-between items-center text-slate-900">
            <span>Товары (15)</span>
            <span>24 000 Р</span>
          </div>
          <div className="ml-[20px] flex justify-between items-center text-slate-900">
            <span>Доставка</span>
            <span>850 P</span>
          </div>
        </div>
      </div>
    </div>
  );
};
