import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import galleryStyles from "@/styles/Gallery.module.css";
import Layout from "../../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          <p className="subTitle">Three models for every need</p>
          <Link className="navLink" href="/">
            Back to home page
          </Link>
          {/* template starts */}

          <div>
            <p className={galleryStyles.mainTitle}>Solitude</p>
            <p className={galleryStyles.subTitle}>
              Perfect for highly motivated individuals
            </p>
            <Image
              priority
              src="/images/solitude.jpg"
              width={277}
              height={381}
              alt="solitude"
            />
          </div>
          <div>
            <p className={galleryStyles.mainTitle}>Duo</p>
            <p className={galleryStyles.subTitle}>
              Perfect for you and your partner
            </p>
            <Image
              priority
              src="/images/duo.jpg"
              width={277}
              height={381}
              alt="duo"
            />
          </div>
          <div>
            <p className={galleryStyles.mainTitle}>Teamwork</p>
            <p className={galleryStyles.subTitle}>
              Perfect for your entire team
            </p>
            <Image
              priority
              src="/images/teamwork.jpg"
              width={277}
              height={381}
              alt="teamwork"
            />
          </div>
          {/* template ends */}
          <Link className="navLink" href="/">
            Back to home page
          </Link>
        </div>
      </Layout>
    </>
  );
}
