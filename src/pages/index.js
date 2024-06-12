import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Gallery() {
  return (
    <>
      <Layout>
        <p className="subTitle">An espresso maker that reads your mind</p>
        <Link className="navLink" href="gallery">
          Click here to learn more ...
        </Link>
        <div className={styles.heroDiv}>
          <Image
            priority
            src="/images/hero.jpg"
            fill
            object-fit="contain"
            alt="ESPectso 1000"
          />
        </div>
        <Link className="navLink" href="preorder">
          Click here to pre-order ...
        </Link>
      </Layout>
    </>
  );
}
