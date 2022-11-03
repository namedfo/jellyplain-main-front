import Card from "../components/Card";
import Filtred from "../components/Filtred";
import Header from "../components/Header";
// layouts
import Container from "../layouts/Container";
//
import MOCKUP from '../utils/mockup-9.jpg'

const cards = [
  { id: 1, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
  { id: 2, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
  { id: 3, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
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
          <div className="shadow-jj text-[18px] font-medium flex justify-evenly py-[20px] p-[15px] w-full rounded-[10px] bg-white">
            <button>Все</button>
            <button>Кроссовки</button>
            <button>Худи</button>
            <button>Джерси</button>
            <button>Шорты</button>
            <button>Куртки</button>
          </div>
          <div className="grid mt-[30px] xl:grid-cols-4 grid-cols-3 gap-5">
            {cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
