import Head from "next/head";
import { Ubuntu } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });

const source_Code_Pro = Source_Code_Pro({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>ESPectso 1000 by ESP</title>
        <meta name="description" content="ESPectso 1000 by ESP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="topBand">
        <p className={`mainTitle ${ubuntu.className}`}>
          Introducing ESPectso 1000
        </p>
      </div>

      {children}

      <div className={`footer ${source_Code_Pro.className}`}>
        <hr />
        <p>Copyrights (C) 2023 ESP, Inc. All Rights Reserved.</p>
      </div>
    </>
  );
}
