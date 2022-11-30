import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Auth() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.token) {
      setIsLoading(false)
      localStorage.setItem("jjwt", router?.query?.token as string);
      router.reload();
    }
  }, [router?.query?.token]);

  return (
    <div className="flex h-full items-center justify-center">
      {isLoading ? (
        <span className="text-indigo-700 font-medium">Авторизация, пожалуйста подождите...</span>
      ) : (
        <div className="flex shadow-jj bg-white rounded-[10px] p-[10px] flex-col">
          <span>Вы успешно авторизовались</span>
          <div className="flex flex-col sm:flex-row w-full mt-[20px] justify-between">
            <button
              onClick={() => router.push("/")}
              className="w-full sm:w-[40%] hover:underline text-fuchsia-600 hover:text-fuchsia-700"
            >
              На главную страницу
            </button>
            <button
              onClick={() => router.push("/profile")}
              className="w-full sm:w-[40%] mt-[10px] sm:mt-0 py-[4px] rounded-[10px] bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
            >
              В личный кабинет
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
