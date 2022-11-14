import { useEffect, useState } from "react";
import axios from "axios";
//
import ImageGallery from "react-image-gallery";
//
import { AiFillStar } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
// components
import Header from "../../components/Header";
import LLoading from "../../components/Loading";
// layouts
import Container from "../../layouts/Container";
// hooks
import useActions from "../../hooks/useActions";

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

export default function Product() {
  const [product, setProduct] = useState<any>(undefined);
  const [productChild, setProductChild] = useState<any>(undefined);

  const [isLoading, setIsLoading] = useState<any>("idle");

  const { setCard } = useActions();

  useEffect(() => {
    (async () => {
      setIsLoading("loading");
      try {
        const res = await axios.get(
          `https://jellyplainv2.herokuapp.com/product/getOne?id=${1}`
        );
        setProduct(res.data);
        setProductChild(res.data.productChilds[0]);
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
                <div className="hidden sm:flex">
                  {productChild?.images && (
                    <ImageGallery
                      autoPlay={true}
                      items={getImgFormat(productChild?.images)}
                    />
                  )}
                </div>
                <div className="block sm:hidden">
                  {productChild?.images && (
                    <ImageGallery
                      showThumbnails={false}
                      showPlayButton={false}
                      showBullets={true}
                      autoPlay={true}
                      items={getImgFormat(productChild?.images)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <Info setCard={setCard} product={product} />
              <Reviews />
            </div>
            <div className="block sm:hidden mt-[75px]" />
          </div>
        </div>
      )}
    </Container>
  );
}

const Info = ({ product, setCard }: any) => {
  return (
    <div className="shadow-jj mt-[7px] sm:mt-0 flex w-full flex-col rounded-[10px] sm:w-[650px] bg-white py-[15px] px-[15px]">
      <Title setCard={setCard} product={product} />
      <div className="mt-[10px]">
        <span className="text-[#775C5C] font-medium text-[18px]">Цвета</span>
        <div className="flex flex-wrap mt-[5px]">
          <div className="w-[50px] ml-[5px] my-[3px] rounded-[8px] h-[30px] bg-white border" />
          <div className="w-[50px] ml-[5px] my-[3px] rounded-[8px] h-[30px] bg-[#a78bfa] border" />
          <div className="w-[50px] ml-[5px] my-[3px] rounded-[8px] h-[30px] bg-[#facc15] border" />
          <div className="w-[50px] ml-[5px] my-[3px] rounded-[8px] h-[30px] bg-black border" />
        </div>
      </div>
      <div className="mt-[10px]">
        <span className="text-[#775C5C] font-medium text-[18px]">Размеры</span>
        <div className="my-[7px] flex flex-wrap">
          <button className="border hover:bg-[#F4EFEF] text-[#444444] ml-[5px] my-[3px] px-[17px] py-[3px] rounded-[10px]">
            38
          </button>
          <button className="border hover:bg-[#F4EFEF] text-[#444444] ml-[5px] my-[3px] px-[17px] py-[3px] rounded-[10px]">
            39
          </button>
          <button className="border hover:bg-[#F4EFEF] text-[#444444] ml-[5px] my-[3px] px-[17px] py-[3px] rounded-[10px]">
            40
          </button>
          <button className="border hover:bg-[#F4EFEF] text-[#444444] ml-[5px] my-[3px] px-[17px] py-[3px] rounded-[10px]">
            41
          </button>
          <button className="border hover:bg-[#F4EFEF] text-[#444444] ml-[5px] my-[3px] px-[17px] py-[3px] rounded-[10px]">
            42
          </button>
          <button className="border hover:bg-[#F4EFEF] text-[#444444] ml-[5px] my-[3px] px-[17px] py-[3px] rounded-[10px]">
            43
          </button>
          <button className="border hover:bg-[#F4EFEF] text-[#444444] ml-[5px] my-[3px] px-[17px] py-[3px] rounded-[10px]">
            44
          </button>
          <button className="border hover:bg-[#F4EFEF] text-[#444444] ml-[5px] my-[3px] px-[17px] py-[3px] rounded-[10px]">
            45
          </button>
          <button className="border hover:bg-[#F4EFEF] text-[#444444] ml-[5px] my-[3px] px-[17px] py-[3px] rounded-[10px]">
            46
          </button>
          <button className="border hover:bg-[#F4EFEF] text-[#444444] ml-[5px] my-[3px] px-[17px] py-[3px] rounded-[10px]">
            47
          </button>
          <button className="border hover:bg-[#F4EFEF] text-[#444444] ml-[5px] my-[3px] px-[17px] py-[3px] rounded-[10px]">
            48
          </button>
          <button className="border hover:bg-[#F4EFEF] text-[#444444] ml-[5px] my-[3px] px-[17px] py-[3px] rounded-[10px]">
            49
          </button>
          <button className="border bg-[#BEA0E2] text-white my-[3px] ml-[5px] px-[17px] py-[3px] rounded-[10px]">
            50
          </button>
        </div>
      </div>
      <div className="flex sm:hidden items-center justify-between">
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

const Title = ({ product, setCard }: any) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="text-[20px] sm:text-[22px] font-medium">
          {product?.title}
        </span>
        <div className="flex justify-start">
          <div className="flex cursor-pointer py-[1px] px-[3px] rounded-lg hover:bg-[#8045C61A]">
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
          </div>
          <span className="font-medium text-[18px] ml-[25px] text-[#5B9F32]">
            Оригинал
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

const Reviews = () => {
  return (
    <div className="flex w-full shadow-jj bg-white sm:w-[650px] py-[15px] px-[25px] flex-col mt-[7px] sm:mt-[30px]">
      <div className="flex justify-between">
        <span className="text-[#4A3333] font-medium text-[20px]">Отзывы</span>
        <button className="border text-[#8a63b9] hover:bg-[#8045C61A] px-[8px] rounded-[10px] font-medium text-[16px] border-[#8a63b9]">
          Оставить отзыв
        </button>
      </div>
      <div className="flex  divide-y gap-[15px] mt-[10px] flex-col">
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
