import Card from "../components/Card";
import Filtred from "../components/Filtred";
import Header from "../components/Header";
import Container from "../layouts/Container";

export default function Home() {
  return (
    <Container>
      <Header />
      <div className="flex pt-[50px] justify-between">
        <Filtred />
        <div className="flex ml-[34px] w-full flex-col">
          <div className="grid xl:grid-cols-4 grid-cols-3 gap-5">
            <Card /> <Card /> <Card /> <Card />
          </div>
        </div>
      </div>
    </Container>
  );
}
