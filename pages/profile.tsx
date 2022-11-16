// components
import Header from "../components/Header";
import LLoading from "../components/Loading";
import Settings from "../components/profile/Settings";
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
        <div className="flex flex-col md:flex-row justify-between w-full">
          {<Sidebar />}
          <div className="mt-[10px] sm:mt-0 flex w-full md:ml-[80px]">
            <div className="w-full">
              <Settings />
            </div>
          </div>
        </div>
        {isLoading === "loading" && <LLoading />}
        {/* {isLoading === "error" && (
          <div
            style={{
              height: "calc(100% - 70px)",
            }}
            className="flex items-center text-[#86368d] font-medium text-[22px] justify-center"
          >
            Вы неавторизованы
          </div>
        )} */}
      </div>
    </Container>
  );
}
