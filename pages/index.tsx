import Card from "../components/Card";
import Filtred from "../components/Filtred";
import Header from "../components/Header";
// layouts
import Container from "../layouts/Container";
//
import MOCKUP from '../utils/mockup-9.jpg'
import MOCK from '../utils/mock-1.jpg'
import MOCKSH from '../utils/mock-sh.jpg'

const cards = [
  { id: 1, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
  { id: 2, title: "Puma MB 0.1 “Rick and Morty”", price: "6 290", image: MOCK },
  { id: 3, title: "Штаны", price: "2 990", image: MOCKSH },
  { id: 4, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
  { id: 5, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
  { id: 6, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
  { id: 7, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
  { id: 8, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
  { id: 9, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
  { id: 10, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
  { id: 11, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },

];

export default function Home() {
  return (
    <Container>
      <Header />
      <div className="flex pt-[50px] justify-between">
        <div className="w-[270px]">
          <Filtred />
        </div>
        <div className="flex ml-[34px] w-full flex-col">
          <div className="shadow-jj text-[#5e5b73] text-[18px] font-medium flex justify-evenly py-[20px] p-[15px] w-full rounded-[10px] bg-white">
            <button className="bg-[#8A63B9] py-[5px] px-[15px] rounded-[10px] text-white">Все</button>
            <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px] ">Кроссовки</button>
            <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px] ">Худи</button>
            <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px] ">Джерси</button>
            <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px] ">Шорты</button>
            <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px] ">Куртки</button>
          </div>
          <div className="grid mt-[30px] xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5">
            {cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
