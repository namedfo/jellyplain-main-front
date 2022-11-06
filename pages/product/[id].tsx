import Header from "../../components/Header";
import Container from "../../layouts/Container";

export default function Product() {
  return (
    <Container>
      <Header />
      <div className="flex md:pt-[50px] flex-col">
        <div className="flex flex-col shadow-jj py-[15px] px-[20px] bg-white rounded-[10px]">
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
        </div>
        <div className="flex justify-between mt-[25px]">
          <div className="shadow-jj flex justify-between rounded-[10px] w-[650px] bg-white p-[15px]">
            <div>slider image</div>
            <div>
                selected image
            </div>
          </div>
          <div className="shadow-jj rounded-[10px] w-[500px] bg-white p-[15px]">
            Description and comment/rating
          </div>
        </div>
      </div>
    </Container>
  );
}
