import Layout from "../components/layouts";
import "../styles/globals.css";
import { Nunito} from "@next/font/google";

const roboto = Nunito({
  weight: "500",
  subsets: ["latin"],
});
function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
