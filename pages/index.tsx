import Card from "../components/Card";
import Filtred from "../components/Filtred";
import Header from "../components/Header";
import Container from "../layouts/Container";

export default function Home() {
  return (
    <Container>
      <Header />
      <div className="flex pt-[50px] justify-between">
        <div className="w-[270px]">
          <Filtred />
        </div>
        <div className="flex ml-[34px] w-full flex-col">
          <div className="shadow-jj text-[18px] font-medium flex justify-evenly py-[20px] p-[15px] w-full rounded-[10px] bg-white">
            <button>Все</button>
            <button>Кроссовки</button>
            <button>Худи</button>
            <button>Джерси</button>
            <button>Шорты</button>
            <button>Куртки</button>
          </div>
          <div className="grid mt-[30px] xl:grid-cols-4 grid-cols-3 gap-5">
            <Card /> <Card /> <Card /> <Card />
          </div>
        </div>
      </div>
    </Container>
  );
}
