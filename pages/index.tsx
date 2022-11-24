import { useEffect, useState } from "react";
//
import axios from "axios";
// components
import Card from "../components/Card";
import SidebarFiltred from "../components/SidebarFiltred";
import Header from "../components/Header";
// layouts
import Container from "../layouts/Container";
import MenuCatalog from "../components/MenuCatalog";
import { useTypedSelector } from "../hooks/useTypedSelector";
import LLoading from "../components/Loading";

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
  const [loading, setLoading] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const { selectedCategory } = useTypedSelector((state) => state.main);
  console.log(selectedCategory);

  useEffect(() => {
    (async () => {
      try {
        setLoading("loading");
        const res = await axios.get(
          `https://jellyplainv2.herokuapp.com/product/getAll${
            selectedCategory === "all" ? "" : `?category=${selectedCategory}`
          }`
        );
        setCards(res.data);
        setLoading("success");
      } catch (error) {
        setLoading("error");
      }
    })();
  }, [selectedCategory]);

  return (
    <Container>
      <Header />
      <div className="flex md:pt-[50px] justify-between">
        <div className="w-[270px] hidden md:block">
          <SidebarFiltred />
        </div>
        <div className="flex md:ml-[34px] w-full flex-col">
          <MenuCatalog />
          {loading === "success" && (
            <div className="flex justify-center 400:justify-start items-center gap-3 flex-wrap">
              {cards?.map((card: any) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          )}
          {loading === "loading" && <LLoading />}
        </div>
      </div>
    </Container>
  );
}
