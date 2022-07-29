import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/layout/Header";
import Product from "../components/Product";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Amazon Clone</title>
        <meta
          name="Amazon Clone"
          content="Full Stack amazon clone with web2 & web3 checkout"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="w-full h-screen ml-auto mr-auto max-w-[1700px]">
        <div className="w-full h-3/4 relative  bg-cover bg-gradient-to-b from-transparent to-[#eaeded] -z-10">
          <Image
            src="https://m.media-amazon.com/images/I/61eJ7IegQGL._SX3000_.jpg"
            alt="banner"
            layout="fill"
            object-fit="contain"
            className={styles.home_img}
          />
        </div>
        <div className=" -mt-80"></div>
        <div className="flex justify-center ">
          <Product
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            img="https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png"
            price={35.99}
            rating={4}
          />
          <Product
            title="Villa-Lobos - Collected Works for Solo Guitar"
            img="https://images-na.ssl-images-amazon.com/images/I/519PVGGupNL._SX366_BO1,204,203,200_.jpg"
            price={79.99}
            rating={4}
          />
        </div>
        <div className="flex justify-center ">
          <Product
            title="Apple iPad 2018 32GB - WiFi Only - Space Gray (Renewed)"
            img="https://m.media-amazon.com/images/I/61aeen0K1NL._AC_SX679_.jpg"
            price={889.99}
            rating={4}
          />
          <Product
            title="Bose SoundLink Mini II Bluetooth Speaker Special Edition, Black SE
            "
            img="https://m.media-amazon.com/images/I/71Tt8gMxVIL._AC_SX425_.jpg"
            price={249.99}
            rating={4}
          />
          <Product
            title="Tranya Smart Watch, 1.69‘’ Full Touch Color Screen, 7-10 Days Battery Life, Android and iOS Compatible, 
            "
            img="https://m.media-amazon.com/images/I/717cD5lLAEL._AC_SX425_.jpg"
            price={119.99}
            rating={3}
          />
        </div>
        <div className="flex justify-center ">
          <Product
            title="TCL 65'' Class 5-Series 4K UHD QLED Dolby Vision HDR Smart Google TV - 65S546-CA"
            img="https://m.media-amazon.com/images/I/91ZWWg6tnOL._AC_SX679_.jpg"
            price={699.99}
            rating={4}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
