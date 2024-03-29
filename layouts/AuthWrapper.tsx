import Head from "next/head";
import { useEffect } from "react";
// components
import LLoading from "../components/Loading";
// config
import $api from "../config";
// hooks
import useActions from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Filtred from "../modals/Filtred";

export default function AuthWrapper({ children }: any) {
  const { isLoading } = useTypedSelector((state) => state.user);
  const { isOpenFiltred } = useTypedSelector((state) => state.main)

  const { setUser, setIsAuth, setIsLoading, setIsOpenFiltred } = useActions();

  useEffect(() => {
    (async () => {
      setIsLoading("loading");
      try {
        const res = await $api.get(
          "http://localhost:3333/auth/me"
        );
        console.log(res)
        const user = {
          id: res.data.id,
          createdAt: res.data.createdAt,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          phone_number: res.data.phone_number,
          avatar_url: res.data.avatar_url,
          address: res.data.address,
          orders: res.data.orders
        };

        localStorage.setItem("userjj", JSON.stringify(user));
        localStorage.setItem("jjwt", res.data.token);

        setUser(user);
        setIsAuth(true);
        setIsLoading("success");
      } catch (error) {
        setIsLoading("error");
      }
    })();
  }, []);

  if (isLoading === "loading") {
    return <LLoading />;
  }
  return (
    <div className="h-full relative">
      {isOpenFiltred && <Filtred onClose={() => setIsOpenFiltred(false)} />}
      {children}
    </div>
  );
}
