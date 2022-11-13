import { useEffect } from "react";
import $api from "../config";
// hooks
import useActions from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export default function AuthWrapper({ children }: any) {
  const { isLoading } = useTypedSelector((state) => state.user);

  const { setUser, setIsAuth, setIsLoading } = useActions();

  useEffect(() => {
    (async () => {
      setIsLoading("loading");
      try {
        const res = await $api.get(
          "https://jellyplainv2.herokuapp.com/auth/one"
        );
        const user = {
          id: res.data.id,
          createdAt: res.data.createdAt,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          avatar_url: res.data.avatar_url,
        };

        localStorage.setItem("userjj", JSON.stringify(user));
        localStorage.setItem("jjwt", res.data.token)

        setUser(user)
        setIsAuth(true)
        setIsLoading("success");
        console.log(res);
      } catch (error) {
        setIsLoading("error");
      }
    })();
  }, []);

  if (isLoading === "loading") {
    return <div>loading..</div>;
  }

  return <div>{children}</div>;
}
