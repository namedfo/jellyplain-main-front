import type { AppProps } from "next/app";
//
import { Provider } from "react-redux";
//
import { store } from "../store";
// layouts
import AuthWrapper from "../layouts/AuthWrapper";

import "../styles/globals.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </Provider>
  );
}
