import { useEffect, useState } from "react";
//
import { useRouter } from "next/router";
//
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
// components
import Header from "../../components/Header";
import Info from "../../components/checkout/Info";
import BtnToPaid from "../../components/checkout/BtnToPaid";
// layouts
import Container from "../../layouts/Container";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import $api from "../../config";
import colors from "../../utils/helping/colors";
import sizesSneakers from "../../utils/helping/sizesSneakers";
import useActions from "../../hooks/useActions";

export default function Checkout() {
  const [orderLocal, setOrderLocal] = useState<any>(null);

  // const { isAuth } = useTypedSelector(state => state.user)
  const isAuth = true;
  const { shipping } = useTypedSelector((state:any) => state.main)
  const { setOrder } = useActions()

  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push("/");
      return;
    }

    (async () => {
      try {
        const res = await $api.get(`order/getOne?id=${router.query?.id}`);

        if (res?.data?.order?.yookassa?.yookassaId) {
          router.push(`/order/${res?.data?.order?.id}`)
          return
        }

        setOrderLocal(res.data?.order);
        setOrder(res.data?.order)
      } catch (error) {}
    })();
  }, [isAuth]);

  console.log(shipping)

  return (
    <Container>
      <Header />
      {isAuth && (
        <div className="w-full flex justify-between md:pt-[50px]">
          <div className="flex w-full md:w-[750px] flex-col">
            <Info order={orderLocal} />
            <div  className="shadow-jj text-[#292929] font-medium flex-col py-[15px] flex md:hidden px-[20px] mt-[10px] md:mt-[30px] bg-white rounded-[10px]">
              <div className="flex justify-between">
                <span>
                  Товары
                </span>
                <span>
                  {orderLocal?.totalPrice} &#8381;
                </span>
              </div>
              <div className="flex mt-[5px] justify-between">
              <span>
                  Доставка
                </span>
                <span>
                  {shipping === 'pochtaru' ? "850" : "0"} &#8381;
                </span>
              </div>
            </div>
            <Products products={orderLocal?.productsOrder} />
          </div>
          <div className="hidden md:flex">
            <div>
              <Total
                totalPrice={orderLocal?.totalPrice}
                count={orderLocal?.productsOrder?.reduce(
                  (prev: number, next: any) => prev + next.count,
                  0
                )}
                shipping={shipping}
              />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

const Total = ({ totalPrice, count, shipping }: any) => {
  return (
    <div className="shadow-jj rounded-[10px] w-[420px] bg-white py-[15px] px-[20px]">
      <div className="payment-form"></div>
      <span className="text-[20px] my-[30px] font-medium text-[#292929]">
        Оплата
      </span>
      <div className="flex mt-[10px] text-[17px] items-center justify-between">
        <span>Товары ({count})</span>
        <span>{totalPrice} &#8381;</span>
      </div>
      <div className="flex text-[17px] items-center justify-between">
        <span>Стоимость доставки</span>
        <span>{shipping === 'pochtaru' ? "850" : "0"} &#8381;</span>
      </div>
      <div className="flex mt-[20px] text-[#212121] font-medium justify-between">
        <span>Итог</span>
        <span>{totalPrice + (shipping === 'pochtaru' ? 850 : 0)} &#8381;</span>
      </div>
      <BtnToPaid />
    </div>
  );
};

const getSize = (type: string, size: any) => {
  switch (type) {
    case "sneakers":
      return sizesSneakers[size]?.size || null;
    case "clothes":
      return size || null;
    default:
      return "";
  }
};
const Products = ({ products }: any) => {

  const router = useRouter();

  return (
    <div className="shadow-jj flex-col py-[15px] flex px-[20px] mb-[80px] md:mb-0 mt-[10px] md:mt-[30px] bg-white rounded-[10px]">
      <div
        // onClick={() => setIsOpen((prev) => !prev)}
        className="flex cursor-pointer items-center"
      >
        <span className="text-[16px] md:text-[18px] font-medium text-[#292929]">
          Товары
        </span>
        {/* <button className="hover:bg-[#8045C61A] md:ml-[20px] p-[3px] rounded-[10px]">
          {isOpen ? (
            <AiOutlineArrowUp color="#292928" size={26} />
          ) : (
            <AiOutlineArrowDown color="#292928" size={26} />
          )}
        </button> */}
      </div>
      <div className="flex pt-[10px] flex-col">
        {products?.map((product: any, i: number) => (
          <div 
          key={product.id}
          style={{
            marginTop: i !== 0 ? "20px" : ""
          }} className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center">
              <img
                className="cursor-pointer w-[80px] h-[60px] object-contain border rounded-[10px]"
                src={product?.images[0]}
                alt="photo"
              />
              <div className="flex pl-[15px] flex-col">
                <span
                  onClick={() => router.push(`/product/${product?.productId}`)}
                  className="font-medium cursor-pointer text-[16px] sm:text-[20px]"
                >
                  {product?.product?.title}
                </span>
                <div className="flex text-[18px] items-center">
                  {product?.size && (
                    <>
                      <span className="mr-[3px]">Размер: </span>
                      <span>
                        {getSize(product?.product?.category, product?.size)}
                      </span>
                      <div className="rounded-full h-[5px] mx-[10px] w-[5px] bg-slate-700" />
                    </>
                  )}

                  <span className="mr-[3px]">Цвет:</span>

                  <div
                    style={{
                      backgroundColor: colors[product?.color]?.color,
                    }}
                    className={`w-[50px] cursor-pointer flex ml-[5px] my-[3px] rounded-[5px] h-[20px] border`}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex mt-[5px] sm:mt-0 w-full sm:w-[140px] justify-between sm:justify-start sm:flex-col">
              <div className="flex w-[33%] sm:w-full justify-center sm:justify-between">
                <span className="leading-[17px]">цена:</span>
                <span className="ml-[3px] leading-[17px]">{product?.price}</span>
              </div>
              <div className="flex w-[33%] sm:w-full justify-center sm:justify-between">
                <span className="leading-[17px]">кол-во:</span>
                <span className="ml-[3px] leading-[17px]">{product?.count}</span>
              </div>
              <div className="flex w-[33%] sm:w-full justify-center sm:justify-between">
                <span className="leading-[17px]">итог:</span>
                <span className="ml-[3px] leading-[17px]">
                  {product?.price * product?.count}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
