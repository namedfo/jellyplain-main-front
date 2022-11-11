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
        const newData = {
            id: res.data.response[0].id,
            first_name: res.data.response[0].first_name,
            last_name: res.data.response[0].last_name,
            bdate: res.data.response[0].bdate,
            image: res.data.response[0].photo_200,

            access_token: data.access_token,
            expires_in: data.expires_in,
        }

        console.log(newData)
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
