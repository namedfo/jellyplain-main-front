import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
// hooks
import useActions from "../hooks/useActions";
// layouts
import Container from "../layouts/Container";

export default function Redirect() {
  const router = useRouter();

  const { setIsAuth, setUser, setIsLoading } = useActions()


  useEffect(() => {
    (async () => {
      const dirtyData = router.asPath.split(/[&\/=\/?]/);

      try {
        const res = await axios.post("http://localhost:3333/auth/login/vk", {
          code: dirtyData[3]
        });
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

        router.push('/')

      } catch (error) {}
    })();
  }, []);
  return (
    <Container>
      <div className="w-full h-full flex items-center justify-center">
        Авторизация, пожалуйста подождите...
      </div>
    </Container>
  );
}
