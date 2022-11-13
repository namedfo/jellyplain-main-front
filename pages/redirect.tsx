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

      console.log(dirtyData[3])
      try {
        const res = await axios.post("http://5.23.48.96:3000/auth/login/vk", {
          code: dirtyData[3]
        });

        console.log(res);
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
