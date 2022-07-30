import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { StateProvider } from "../contexts/StateProvider";
import { reducer } from "../reducers/reducer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider reducer={reducer}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}

export default MyApp;
