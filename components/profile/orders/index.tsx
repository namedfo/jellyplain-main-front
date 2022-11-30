import { useState } from "react";
// icons
import { BsArrowRightShort } from "react-icons/bs";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import OrderDetail from "../../../modals/OrderDetail";
import Complected from "./Complected";
import InProcess from "./InProcess";

export default function Orders() {
  const { user } = useTypedSelector(state => state.user)

  const inProcessOrders = user?.orders?.filter((order: any) => order.status !== "complected")
  console.log(inProcessOrders)
  const complectedOrders = user?.orders?.map()

  const [activeTab, setActiveTab] = useState({
    name: "active",
    component: <InProcess />,
  });

  const onHandleChangeTab = (tab: string) => {
    if (tab === "active") {
      setActiveTab({
        name: "active",
        component: <InProcess />,
      });
    }
    if (tab === "complected") {
      setActiveTab({
        name: "complected",
        component: <Complected />,
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
      {activeTab.component}
    </div>
  );
}