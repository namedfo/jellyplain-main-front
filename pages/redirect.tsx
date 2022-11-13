import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
// layouts
import Container from "../layouts/Container";

export default function Redirect() {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const dirtyData = router.asPath.split(/[&\/=\/?]/);

      try {
        const res = await axios.post("https://jellyplainv2.herokuapp.com/auth/login/vk", {
          code: dirtyData[3]
        });

        localStorage.setItem("jjwt", res.data.token)
        localStorage.setItem("userjj", JSON.stringify({
          id: res.data.id,
          createdAt: res.data.createdAt,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          avatar_url: res.data.avatar_url,
        }))
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
