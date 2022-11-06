import { useEffect, useState } from "react";
//
import axios from "axios";
// components
import Card from "../components/Card";
import Filtred from "../components/Filtred";
import Header from "../components/Header";
// layouts
import Container from "../layouts/Container";
import MenuCatalog from "../components/MenuCatalog";

// const cards = [
//   { id: 1, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
//   { id: 2, title: "Puma MB 0.1 “Rick and Morty”", price: "6 290", image: MOCK },
//   { id: 3, title: "Штаны", price: "2 990", image: MOCKSH },
//   { id: 4, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
//   { id: 5, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
//   { id: 6, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
//   { id: 7, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
//   { id: 8, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
//   { id: 9, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
//   { id: 10, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },
//   { id: 11, title: "Nike Kyrie 9", price: "6 490", image: MOCKUP },

// ];

type Card = {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  created_at: string;
  updated_at: string;
};

export default function Home() {
  const [cards, setCards] = useState<any | []>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://jellyplainv2.herokuapp.com/order/getAll"
        );
        console.log(res);
        setCards(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container>
      <Header />
      <div className="flex md:pt-[50px] justify-between">
        <div className="w-[270px] hidden md:block">
          <Filtred />
        </div>
        <div className="flex md:ml-[34px] w-full flex-col">
          <MenuCatalog />
          <div className="flex items-center justify-between flex-wrap">
            {cards?.map((card: any) => (
              <Card key={card.id} card={card} />
            ))}

            <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
          </div>
        </div>
      </div>
    </Container>
  );
}
