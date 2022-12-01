import dayjs from "dayjs";
import { useState } from "react";

export default function OrderItem({ order }: any) {
  const [isShowDetail, setIsShowDetail] = useState(false);

  const date = dayjs(order?.createdAt).format("DD.MM.YYYY HH:mm");

  return (
    <div className="flex relative sm:mx-[2px] my-[1px] w-full 400:w-auto flex-wrap justify-between pt-[20px]">
      {/* <OrderDetail
          isOpen={isShowDetail}
          onClose={() => setIsShowDetail(false)}
        /> */}
      <div className="py-[5px] sm:py-[10px] w-full sm:w-[300px] flex flex-col px-[14px] rounded-[10px] border">
        <div className="flex justify-center text-[16px]">
          <div className="flex items-center">
            <span className="text-red-600">Ожидает подтверждения</span>
          </div>
        </div>
        <div className="flex flex-col text-[16px] my-[3px] justify-between">
          <span className="mr-[25px]">Заказ создан: {date}</span>
          <div className="flex items-center">
            <span className="block mr-[5px]">Номер заказа:</span>
            <span>№{order?.id}</span>
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
}
