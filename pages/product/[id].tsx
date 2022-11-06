import ImageGallery from "react-image-gallery";
//
import { AiOutlinePlus, AiOutlineMinus, AiFillStar } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
// components
import Header from "../../components/Header";
// layouts
import Container from "../../layouts/Container";

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
  return (
    <Container>
      <Header />
      <div className="flex md:pt-[50px] flex-col">
        {/* <div className="flex flex-col shadow-jj py-[15px] px-[20px] bg-white rounded-[10px]">
          <div className="flex justify-between">
          <span className="text-[20px] font-medium text-[#292929]">Title</span>
          <div className="flex items-center">
            <span className="text-[18px] font-medium text-[#292929]">price</span>
          </div>
          </div>
          <div className="flex justify-between items-center">
            <span>
            rating and more info
            </span>
            <button className="ml-[20px] font-medium text-[18px] text-white bg-[#8a63b9] hover:shadow-md hover:bg-[#8F69BD] py-[3px] px-[10px] rounded-[10px]">
                in cart
            </button>
          </div>
        </div> */}
        <div className="flex justify-between mt-[25px]">
          <div className="shadow-jj flex justify-center rounded-[10px] bg-white p-[15px]">
            <ImageGallery autoPlay={true} items={images} />
          </div>
          <div>
            <div className="shadow-jj rounded-[10px] w-[650px] bg-white py-[15px] px-[25px]">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="text-[20px] font-medium">Title</span>
                  <div className="flex justify-between">
                    <div className="flex cursor-pointer py-[1px] px-[3px] rounded-lg hover:bg-[#8045C61A]">
                      <div className="flex items-center">
                        <AiFillStar color="#fbbf24" />
                        <span className="text-[#79828e] text-[16px] font-medium ml-[5px]">
                          4.3
                        </span>
                      </div>
                      <div className="flex ml-[10px] items-center">
                        <BiCommentDots color="#35404A" />
                        <span className="text-[#79828e] text-[16px] font-medium  ml-[5px]">
                          53
                        </span>
                      </div>
                    </div>
                    <span className="font-medium ml-[7px] text-[#5B9F32]">
                      Оригинал
                    </span>
                  </div>
                </div>
                <div className="flex items-center flex-col">
                  <span className="text-[#ffa500] font-medium text-[18px]">
                    PRICE
                  </span>
                  <button className="bg-[#8a63b9] hover:shadow-xl hover:bg-[#8062a7] text-white font-medium px-[15px] py-[3px] rounded-[10px]">
                    <span>in cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
