import { memo, use, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
//
import ImageGallery from "react-image-gallery";
//
import { AiFillStar, AiOutlineArrowLeft } from "react-icons/ai";
import { MdLogin } from "react-icons/md";
import { BiCommentDots } from "react-icons/bi";
// components
import Header from "../../components/Header";
import LLoading from "../../components/Loading";
// layouts
import Container from "../../layouts/Container";
// hooks
import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Rating from "../../components/UI/Rating";
import sizesSneakers from "../../utils/helping/sizesSneakers";
import types from "../../utils/helping/types";
import colors from "../../utils/helping/colors";

const images = [
  {
    original:
      "https://sun1.userapi.com/sun1-92/s/v1/s2/muMvqOEVVS3w6dAQ03NEnjYOhYyGAGM5Z_YpIHTIJ0K-SYi6KZ005_sJiVeyVo9gaYJZSlBsrqYkiEt17ejkHEk.jpg",
    thumbnail:
      "https://sun1.userapi.com/sun1-92/s/v1/s2/muMvqOEVVS3w6dAQ03NEnjYOhYyGAGM5Z_YpIHTIJ0K-SYi6KZ005_sJiVeyVo9gaYJZSlBsrqYkiEt17ejkHEk.jpg",
  },
  {
    original:
      "https://sun1.userapi.com/sun1-92/s/v1/s2/muMvqOEVVS3w6dAQ03NEnjYOhYyGAGM5Z_YpIHTIJ0K-SYi6KZ005_sJiVeyVo9gaYJZSlBsrqYkiEt17ejkHEk.jpg",
    thumbnail:
      "https://sun1.userapi.com/sun1-92/s/v1/s2/muMvqOEVVS3w6dAQ03NEnjYOhYyGAGM5Z_YpIHTIJ0K-SYi6KZ005_sJiVeyVo9gaYJZSlBsrqYkiEt17ejkHEk.jpg",
  },
  {
    original:
      "https://sun1.userapi.com/sun1-92/s/v1/s2/muMvqOEVVS3w6dAQ03NEnjYOhYyGAGM5Z_YpIHTIJ0K-SYi6KZ005_sJiVeyVo9gaYJZSlBsrqYkiEt17ejkHEk.jpg",
    thumbnail:
      "https://sun1.userapi.com/sun1-92/s/v1/s2/muMvqOEVVS3w6dAQ03NEnjYOhYyGAGM5Z_YpIHTIJ0K-SYi6KZ005_sJiVeyVo9gaYJZSlBsrqYkiEt17ejkHEk.jpg",
  },
];

const getSizes = (
  category: string,
  sizesSneakers?: any,
  sizesClothes?: any
) => {
  if (category === "sneakers") {
    return {
      type: "sneakers",
      sizes: sizesSneakers,
    };
  }
  if (category === "clothes") {
    return {
      type: "clothes",
      sizes: sizesClothes,
    };
  }

  return {
    type: "normal",
    sizes: [],
  };
};

export default function Product() {
  const [productLocal, setProductLocal] = useState<any>(undefined);

  const { setProduct } = useActions();

  const onHandleChangeProduct = (obj: any) => {
    setProductLocal(obj);
    setProduct(obj);
  };

  const [isLoading, setIsLoading] = useState<any>("idle");

  const router = useRouter();

  useEffect(() => {
    (async () => {
      setIsLoading("loading");
      try {
        const res = await axios.get(
          `https://jellyplainv2.herokuapp.com/product/getOne?id=${Number(
            router.query.id
          )}`
        );
        const selectedProductChildSizes: any = getSizes(
          res?.data?.category,
          res?.data?.productChilds[0]?.sizesSneakers,
          res?.data?.productChilds[0]?.sizesClothes
        );
        onHandleChangeProduct({
          id: res?.data?.id,
          title: res?.data?.title,
          type: res?.data?.type,
          brand: res?.data?.brand,
          category: res?.data?.category,
          subcategory: res?.data?.subcategory,
          price: res?.data?.price,
          selectedProductChild: {
            ...res?.data?.productChilds[0],
            sizes: selectedProductChildSizes?.sizes,
            size: selectedProductChildSizes?.sizes[0],
          },
          productChilds: res?.data?.productChilds?.map((productChild: any) => {
            const sizes = getSizes(
              res?.data?.category,
              productChild?.sizesSneakers,
              productChild?.sizesClothes
            );
            return {
              ...productChild,
              sizes: sizes?.sizes,
              size: sizes?.sizes[0],
            };
          }),
        });

        setIsLoading("success");
      } catch (error) {
        setIsLoading("error");
      }
    })();
  }, []);

  const getImgFormat = (images: any) => {
    return images.map((image: any) => ({
      original: image.url,
      thumbnail: image.url,
    }));
  };

  return (
    <Container>
      <Header />
      {isLoading === "loading" ? (
        <div className="flex h-full items-center justify-center">
          <LLoading />
        </div>
      ) : (
        <div className="flex md:pt-[50px] h-full flex-col">
          <div className="flex flex-col xl:flex-row justify-between sm:mt-[25px]">
            <div>
              <div className="shadow-jj w-full sm:w-[600px] flex justify-center rounded-[10px] bg-white p-[15px]">
                <div className="hidden md:flex">
                  {productLocal?.selectedProductChild?.images && (
                    <ImageGallery
                      autoPlay={true}
                      items={getImgFormat(
                        productLocal?.selectedProductChild?.images
                      )}
                    />
                  )}
                </div>
                <div className="block md:hidden relative">
                  <button
                    onClick={() => router.push("/")}
                    className="absolute rounded-[10px] p-[3px] hover:bg-[#8A63B91A] left-0 z-10 top-0"
                  >
                    <AiOutlineArrowLeft size={26} color="#86368d" />
                  </button>
                  {productLocal?.selectedProductChild?.images && (
                    <ImageGallery
                      showThumbnails={false}
                      showPlayButton={false}
                      showBullets={true}
                      autoPlay={true}
                      items={getImgFormat(
                        productLocal?.selectedProductChild?.images
                      )}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <Info
                productLocal={productLocal}
                onHandleChangeProduct={onHandleChangeProduct}
              />
              {/* <Reviews /> */}
            </div>
            <div className="block sm:hidden mt-[75px]" />
          </div>
        </div>
      )}
    </Container>
  );
}

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
const Info = memo(({ productLocal, onHandleChangeProduct }: any) => {
  return (
    <div className="shadow-jj mt-[7px] sm:mt-0 flex w-full flex-col rounded-[10px] sm:w-[650px] bg-white py-[15px] px-[15px]">
      <Title product={productLocal} />
      <div className="mt-[10px]">
        <span className="text-[#775C5C] font-medium text-[18px]">Цвета</span>
        <div className="flex flex-wrap mt-[5px]">
          {productLocal?.productChilds?.map((productChild: any) => (
            <div
              onClick={() =>
                onHandleChangeProduct({
                  ...productLocal,
                  selectedProductChild: productChild,
                })
              }
              style={{
                backgroundColor: colors[productChild?.color]?.color,
              }}
              className={`w-[55px] cursor-pointer flex ml-[5px] my-[3px] rounded-[10px] hover:border-[2px] ${
                productChild?.color ===
                productLocal?.selectedProductChild?.color
                  ? "border-[2px] border-slate-300"
                  : ""
              } h-[35px] border`}
            />
          ))}
        </div>
      </div>
      <div className="mt-[10px]">
        <span className="text-[#775C5C] font-medium text-[18px]">Размеры</span>
        <div className="my-[7px] flex flex-wrap">
          {productLocal?.selectedProductChild?.sizes.map((size: any) => (
            <button
              key={size}
              onClick={() => {
                onHandleChangeProduct({
                  ...productLocal,
                  selectedProductChild: {
                    ...productLocal?.selectedProductChild,
                    size,
                  },
                });
              }}
              className={`border ${
                productLocal?.selectedProductChild?.size === size
                  ? "bg-[#3b82f6] text-white border-[1px]"
                  : "hover:bg-slate-200  border-[2px]"
              } ml-[5px] my-[3px] px-[17px] py-[3px] rounded-[10px]`}
            >
              {getSize(productLocal?.category, size) || ""}
            </button>
          ))}
        </div>
      </div>

      <Description />
    </div>
  );
});

const Title = ({ product }: any) => {
  const { setCard } = useActions();

  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="text-[20px] sm:text-[22px] font-medium">
          {product?.title}
        </span>
        <div className="flex justify-start">
          {/* <div className="flex cursor-pointer py-[1px] px-[3px] rounded-lg hover:bg-[#8045C61A]">
            <div className="flex items-center">
              <AiFillStar color="#fbbf24" />
              <span className="text-[#79828e] text-[18px] font-medium ml-[5px]">
                4.3
              </span>
            </div>
            <div className="flex ml-[10px] items-center">
              <BiCommentDots color="#35404A" />
              <span className="text-[#79828e] text-[18px] font-medium  ml-[5px]">
                53
              </span>
            </div>
          </div> */}
          <span className="font-medium text-[18px] text-[#5B9F32]">
            {types[product?.type]}
          </span>
        </div>
      </div>
      <div className="hidden sm:flex items-end  flex-col">
        <span className="text-[#ffa500] font-medium text-[22px]">
          {product?.price} &#8381;
        </span>
        <button
          onClick={() => setCard(product)}
          className="bg-[#8a63b9] text-[17px] hover:bg-[#8062a7] text-white font-medium px-[15px] py-[4px] rounded-[10px]"
        >
          <span>В корзину</span>
        </button>
      </div>
    </div>
  );
};

const Description = () => {
  return (
    <div className="flex mt-[25px] flex-col">
      <span className="text-[#292929] font-medium text-[20px]">Описание</span>
      <p className="text-slate-900 text-[16px]">
        Доставка 2-3 недели до России (выбираю самый быстрый вариант) и 2-5 дней
        до вас.
      </p>
      <p className="text-slate-900 my-[4px] text-[16px]">
        Отправляю до вас Почтой России, по срокам также как и СДЭК. Забирать в
        вашем почтовом отделении
      </p>
      <p className="text-slate-900 text-[16px]">
        Трек код присылаю для отслеживания, когда партия будет у меня. Потом до
        вас отправляю
      </p>
      <p className="text-slate-900 my-[7px] text-[16px]">
        Оплата при оформлении заказа
      </p>
      <p className="text-slate-900 text-[16px]">
        В качестве доказательств того, что товар придёт, в группе у меня есть
        фото отправленных заказов, чеки покупателей, отзывы
      </p>

      <p className="text-slate-900 mt-[10px] text-[16px]">
        Также есть блок с гарантиями{" "}
        <a
          className="text-indigo-500 hover:underline"
          target="_blank"
          href="https://vk.com/topic-164089922_48829602"
        >
          гарантия
        </a>
      </p>
    </div>
  );
};

const Reviews = () => {
  const { isAuth } = useTypedSelector((state) => state.user);

  const { setIsOpenAuth } = useActions();

  const handleRating = (index: number) => {
    console.log(index);
  };

  return (
    <div className="flex w-full shadow-jj rounded-[10px] bg-white sm:w-[650px] p-[15px] flex-col mt-[7px] sm:mt-[30px]">
      {isAuth ? (
        <>
          <div className="flex justify-between">
            <span className="text-[#4A3333] font-medium text-[20px]">
              Отзывы
            </span>
            <button className="border text-[#8a63b9] hover:bg-[#8045C61A] px-[8px] rounded-[10px] font-medium text-[16px] border-[#8a63b9]">
              Оставить отзыв
            </button>
          </div>
          <div className="flex flex-col">
            <Rating handleRating={handleRating} />
            <textarea
              className="flex-1 mt-[12px] appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              id="comment"
              placeholder="Напишите свой отзыв"
              name="comment"
              rows={3}
              cols={40}
            ></textarea>
          </div>
        </>
      ) : (
        <button
          onClick={() => setIsOpenAuth(true)}
          className=" text-[#307fee] justify-center flex items-center hover:underline font-medium text-[17px] w-full rounded-[10px]"
        >
          <span className="mr-[5px]">
            Чтобы написать отзыв, необходимо авторизоваться
          </span>
          <MdLogin size={20} color="#307fee" />
        </button>
        // <Rating />
      )}
      <div className="flex  divide-y gap-[15px] mt-[10px] flex-col">
        <div className="flex pt-[15px] flex-col">
          <div className="flex items-center">
            <div className="border bg-[whitesmoke] rounded-full h-[40px] w-[40px]" />
            <div className="flex font-medium ml-[10px] flex-col">
              <span className="leading-[18px]">Misha Poleschenkov</span>
              <div className="flex items-center">
                <div className="flex items-center">
                  <AiFillStar color="#fbbf24" />
                  <span className="text-slate-500 leading-[18px] text-[17px] font-medium ml-[3px]">
                    4
                  </span>
                </div>
                <div className="rounded-full h-[5px] mx-[10px] w-[5px] bg-slate-700" />
                <span className="text-slate-500 leading-[18px] text-[17px] font-medium">
                  date
                </span>
              </div>
            </div>
          </div>
          <div className="text-[18px] leading-[20px]">
            <span className="break-words">
              sssssssssssssssssssssssssssssssssssssss
            </span>
            {/* <button className="text-[#86368d] ml-[30px] text-[16px] hover:underline">
              дополнить
            </button> */}
          </div>
          {/* <div className="flex mt-[10px] items-center">
            <div className="border mr-[10px] bg-[whitesmoke] rounded-full h-[32px] w-[32px]" />
            <input 
              className="w-full h-full px-[12px] rounded-[10px] border outline-none"
            />
            <button className="bg-[#0077ff] ml-[10px] px-[8px] py-[3px] rounded-[12px]">
                <IoIosSend color="white" size={24} />
            </button>
          </div> */}
        </div>

        <div className="flex pt-[15px] flex-col">
          <div className="flex items-center">
            <div className="border bg-[whitesmoke] rounded-full h-[40px] w-[40px]" />
            <div className="flex font-medium ml-[10px] flex-col">
              <span className="leading-[18px]">Misha Poleschenkov</span>
              <span className="leading-[18px]">rating</span>
            </div>
          </div>
          <span className="text-[18px] leading-[20px] break-words">
            sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </span>
        </div>
        <div className="flex pt-[15px] flex-col">
          <div className="flex items-center">
            <div className="border bg-[whitesmoke] rounded-full h-[40px] w-[40px]" />
            <div className="flex font-medium ml-[10px] flex-col">
              <span className="leading-[18px]">Misha Poleschenkov</span>
              <span className="leading-[18px]">rating</span>
            </div>
          </div>
          <span className="text-[18px] leading-[20px] break-words">
            sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </span>
        </div>
        <div className="flex pt-[15px] flex-col">
          <div className="flex items-center">
            <div className="border bg-[whitesmoke] rounded-full h-[40px] w-[40px]" />
            <div className="flex font-medium ml-[10px] flex-col">
              <span className="leading-[18px]">Misha Poleschenkov</span>
              <span className="leading-[18px]">rating</span>
            </div>
          </div>
          <span className="text-[18px] leading-[20px] break-words">
            sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </span>
        </div>
      </div>
    </div>
  );
};
