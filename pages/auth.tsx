import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Auth() {
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.token) {
      localStorage.setItem("jjwt", router?.query?.token as string);
      router.push("/", "/", { shallow: true });
    }
  }, [router?.query?.token]);

  return <div></div>;
}
