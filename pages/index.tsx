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
import { useRouter } from "next/router";

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

  const { selectedCategory, minPrice, maxPrice, brands, colors } =
    useTypedSelector((state) => state.main);

  let newBrands: any = [];

  for (const [key, value] of Object.entries(brands)) {
    if (value) {
      newBrands = [...newBrands, key];
    }
  }

  useEffect(() => {
    (async () => {
      try {
        setLoading("loading");
        const res = await axios.post(
          `https://jellyplainv2.herokuapp.com/product/getAll`,
          {
            category: selectedCategory.category,
            subcategory: selectedCategory.subcategory,
            minPrice,
            maxPrice,
            brands: newBrands.length > 0 ? newBrands : undefined,
          }
        );
        setCards(res.data);
        setLoading("success");
      } catch (error) {
        setLoading("error");
      }
    })();
  }, [selectedCategory, brands, minPrice, maxPrice]);

  return (
    <Container>
      <Header />
      <div className="flex md:pt-[50px] justify-between">
        <div className="w-[270px] items-center hidden flex-col md:flex">
          <SidebarFiltred />
          <a
            href="https://vk.com/jelly21"
            target="_blank"
            className="flex my-[10px] items-center"
          >
            <div className="bg-[#0077ff] p-[4px] rounded-[6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  className="st0"
                  d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"
                />
              </svg>
            </div>
            <span className="text-slate-900 ml-[5px] hover:underline text-[18px]">
              По всем вопросам
            </span>
          </a>
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
          {loading === "loading" && (
            <div className="flex items-center justify-center h-[400px]">
              <LLoading />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
