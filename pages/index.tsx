import { motion } from "framer-motion";
import Head from "next/head";
import Intro from "@/components/Intro";
import Director from "@/components/Director";
import PastWinners from "@/components/PastWinners";
import Regulation from "@/components/Regulation";
const banner: string = "http://g-clef.kr/img/main_img.png";

export default function Home() {
  const goEditor = () => {
    location.href = "https://app.surroundio.org/";
  };
  return (
    <>
      <Head>
        <title>Richter Award</title>
      </Head>
      <div className="pt-32 pb-32 lg:px-24 px-8 bg-black flex lg:justify-between lg:items-center lg:flex-row flex-col justify-center">
          <div className="absolute lg:top-80 lg:left-56 top-60 lg:space-y-10 space-y-5">
            <h1 className="text-white lg:text-5xl text-3xl">
              The 3rd online
              <br />
              <span className="text-red-400 font-bold lg:text-7xl text-5xl">
              Sviatoslav Richter
              </span>
            </h1>
            <p className="text-white lg:text-3xl text-sm">
              International Piano Competition
            </p>
          </div>
          <div
            className="lg:w-[34rem] lg:h-[34rem] bg-cover w-[20rem] h-[20rem]"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(${banner})`,
            }}
          ></div>
      </div>
      <Intro/>
      <Director/>
      <PastWinners/>
      <Regulation/>
    </>
  );
}
