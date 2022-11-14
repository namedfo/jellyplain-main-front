import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
// hooks
import useActions from "../hooks/useActions";
// layouts
import Container from "../layouts/Container";

export default function Redirect() {
  const router = useRouter();

  const { setIsAuth, setIsLoading } = useActions()


  useEffect(() => {
    (async () => {
      const dirtyData = router.asPath.split(/[&\/=\/?]/);

      try {
        const res = await axios.post("https://jellyplainv2.herokuapp.com/auth/login/vk", {
          code: dirtyData[3]
        });

        localStorage.setItem("jjwt", res.data.token)
        setIsAuth(true)
        setIsLoading("success")

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
