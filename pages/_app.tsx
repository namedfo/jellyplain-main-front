import "../styles/globals.css";
import type { AppProps } from "next/app";
//
import { Provider } from "react-redux";
//
import { store } from "../store";
// layouts
import AuthWrapper from "../layouts/AuthWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </Provider>
  );
}
