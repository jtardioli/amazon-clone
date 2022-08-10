import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { StateProvider } from "../contexts/StateProvider";
import { reducer } from "../reducers/reducer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { stripePublicKey } from "../config/stripe.config";

const stripeConfig = loadStripe(stripePublicKey);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider reducer={reducer}>
      <Elements stripe={stripeConfig}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Elements>
    </StateProvider>
  );
}

export default MyApp;
