import ImageGallery from "react-image-gallery";
//
import { AiOutlinePlus, AiOutlineMinus, AiFillStar } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
// components
import Header from "../../components/Header";
// layouts
import Container from "../../layouts/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import useActions from "../../hooks/useActions";
import LLoading from "../../components/Loading";

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
  const [isLoading, setIsLoading] = useState<any>("idle");

  const { setCard } = useActions();

  useEffect(() => {
    (async () => {
      setIsLoading("loading")
      try {
        const res = await axios.get(
          `https://jellyplainv2.herokuapp.com/product/getOne?id=${1}`
        );
        setProduct(res.data);
        setIsLoading("success")
      } catch (error) {
        setIsLoading("error")
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
      {isLoading === 'loading' ? (
        <div className="flex h-full items-center justify-center">
          <LLoading />
        </div>
      ) : (
        <div className="flex md:pt-[50px] h-full flex-col">
          <div className="flex justify-between mt-[25px]">
            <div className="shadow-jj w-[600px] flex justify-center rounded-[10px] bg-white p-[15px]">
              {product?.productChilds[0].images && (
                <ImageGallery
                  autoPlay={true}
                  items={getImgFormat(product?.productChilds[0].images)}
                />
              )}
            </div>
            <div>
              <div className="shadow-jj rounded-[10px] w-[650px] bg-white py-[15px] px-[25px]">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="text-[22px] font-medium">
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
                  <div className="flex items-end  flex-col">
                    <span className="text-[#ffa500] font-medium text-[22px]">
                      {product?.price} &#8381;
                    </span>
                    <button
                      onClick={() => setCard(product)}
                      className="bg-[#8a63b9] text-[17px] hover:bg-[#8062a7] text-white font-medium px-[15px] py-[3px] rounded-[10px]"
                    >
                      <span>В корзину</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
