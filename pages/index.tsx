import { useEffect, useState } from "react";
//
import axios from "axios";
// components
import Card from "../components/Card";
import Filtred from "../components/Filtred";
import Header from "../components/Header";
// layouts
import Container from "../layouts/Container";

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
  id: number
  title: string
  image: string
  price: number
  category: string
  created_at: string
  updated_at: string
}

export default function Home() {
  const [cards, setCards] = useState<Card[] | []>([])


  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://jellyplainv2.herokuapp.com/order/getAll")
        console.log(res)
        setCards(res.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])


  return (
    <Container>
      <Header />
      <div className="flex md:pt-[50px] justify-between">
        <div className="w-[270px] hidden md:block">
          <Filtred />
        </div>
        <div className="flex md:ml-[34px] w-full flex-col">
          <div className="shadow-jj flex flex-wrap text-[#5e5b73] text-[18px] font-medium justify-evenly py-[20px] p-[15px] w-full rounded-[10px] bg-white">
            <button className="bg-[#8A63B9] py-[5px] px-[15px] rounded-[10px] text-white">Все</button>
            <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px] ">Кроссовки</button>
            <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px] ">Худи</button>
            <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px] ">Джерси</button>
            <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px] ">Шорты</button>
            <button className="py-[5px] hover:bg-[#8A63B91A] px-[15px] rounded-[10px] ">Куртки</button>
          </div>
          <div className="grid mt-[30px]  xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5">
            {cards?.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
