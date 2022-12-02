import Layout from "../components/layouts";
import "../styles/globals.css";
import { Open_Sans} from "@next/font/google";

const roboto = Open_Sans({
  weight: "400",
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
