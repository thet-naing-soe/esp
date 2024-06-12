import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import galleryStyles from "@/styles/Gallery.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Preorder() {
  return (
    <>
      <Layout>
        <div>
          <p className="subTitle">To pre-order, call 1-800-555-1212</p>
          <Link className="navLink" href="/">
            Back to home page
          </Link>
          {/* template starts */}

          <div /* className={galleryStyles.heroDiv} */>
            <Image
              priority
              src="/images/preorder.jpg"
              width={640}
              height={425}
              // fill
              // objectFit="contain"
              alt="preorder"
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
