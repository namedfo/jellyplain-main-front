import Head from "next/head";
import MobileMenu from "../components/MobileMenu";

export default function Container({ children }: any) {
  return (
    <div className="mx-auto relative pt-[10px] px-[5px] xl:p-0 xl:pt-[20px] h-full max-w-[1280px]">
      <Head>
        <title>JellyPlain - Баскетбольный магазин</title>

        <link rel="shortcut icon" href="https://i.imgur.com/HpmgXDo.png" />
        <meta property="og:title" content="JellyPlain" key="title" />
      </Head>
      <div className="h-full">{children}</div>
      <MobileMenu />
    </div>
  );
}
