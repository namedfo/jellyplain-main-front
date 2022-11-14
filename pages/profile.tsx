// components
import Header from "../components/Header";
import Sidebar from "../components/profile/Sidebar";
import { useTypedSelector } from "../hooks/useTypedSelector";
// layouts
import Container from "../layouts/Container";

export default function Profile() {
  const { isAuth, isLoading } = useTypedSelector((state) => state.user);

  return (
    <Container>
      <Header />
      <div className="pt-0 sm:pt-[50px] h-full">
        {isAuth && isLoading === "success" ? (
          <Sidebar />
        ) : (
          <div
            style={{
              height: "calc(100% - 70px)",
            }}
            className="flex items-center text-[#86368d] font-medium text-[22px] justify-center"
          >
            Вы неавторизованы
          </div>
        )}
      </div>
    </Container>
  );
}
