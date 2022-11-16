import { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState({
    name: "profile",
    component: "profile",
  });

  const onHandleChangeTab = (tab: string) => {
    if (tab === "profile") {
      setActiveTab({
        name: "profile",
        component: "profile",
      });
    }
    if (tab === "address") {
      setActiveTab({
        name: "address",
        component: "address",
      });
    }
  };

  return (
    <div className="shadow-jj relative w-full py-[15px] px-[20px] flex flex-col rounded-[10px] bg-white">
      <div className="flex justify-between items-center">
        <span className="text-[20px] hidden md:block font-medium text-[#292929]">
          Настройки
        </span>
        <span className="absolute text-[16px] font-medium block sm:hidden text-[#292929] left-[15px] top-[3px]">
          Настройки
        </span>
        <div className="bg-[#8A63B91A] text-[14px] font-medium px-[3px] rounded-[10px]">
          <button
            onClick={() => onHandleChangeTab("profile")}
            className={`px-[15px] ${
              activeTab.name === "profile"
                ? "bg-blue-600 rounded-tl-[10px] text-white rounded-bl-[10px]"
                : "text-sky-900"
            } py-[4px]`}
          >
            Профиль
          </button>
          <button
            onClick={() => onHandleChangeTab("address")}
            className={`px-[15px] ${
              activeTab.name === "address"
                ? "bg-blue-600 rounded-tr-[10px] text-white rounded-br-[10px]"
                : "text-sky-900"
            } py-[4px]`}
          >
            Адрес
          </button>
        </div>
      </div>
    </div>
  );
}
