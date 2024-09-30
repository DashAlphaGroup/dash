import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{``}</title>
        <link rel="icon" href="/" sizes="any" />
      </Head>

      <div>
        <Header />
        <main>
          <div className="">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
