import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
// layouts
import Container from "../layouts/Container";

export default function Redirect() {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const dirtyData = router.asPath.split(/[&\/=]/);
      const data: any = {
        access_token: dirtyData[2],
        expires_in: dirtyData[4],
        user_id: dirtyData[6],
      };
      try {
        const res = await axios.get(
          `https://api.vk.com/method/users.get?user_ids=${data.user_id}&fields=photo_200,bdate&access_token=${data.access_token}&v=5.131`
        );
        console.log(res)
      } catch (error) {}
    })();
  }, []);
  return (
    <Container>
      <div className="w-full h-full flex items-center justify-center">
        Auth in process...
      </div>
    </Container>
  );
}
