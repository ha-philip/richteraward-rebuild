import { motion } from "framer-motion";
import Head from "next/head";
import { Steps } from "../components/Steps";
import Professional from "@/components/Professional";

const banner: string = "http://g-clef.kr/img/main_img.png";

export default function Home() {
  const goEditor = () => {
    location.href = "https://app.surroundio.org/";
  };
  return (
    <>
      <Head>
        <title>G-Clef</title>
      </Head>
      <div className="pt-32 pb-32 lg:px-24 px-8 bg-black flex lg:justify-between lg:items-center lg:flex-row flex-col justify-center">
        <div>
          <div className="absolute lg:top-80 lg:left-56 top-60 lg:space-y-10 space-y-5">
            <h1 className="text-white lg:text-5xl text-3xl">
              The 3rd online
              <br />
              <span className="text-blue-400 font-bold lg:text-7xl text-5xl">
                G-clef
              </span>
            </h1>
            <p className="text-white lg:text-3xl text-sm">
              International Music Competition
            </p>
          </div>
          <motion.div
            className="lg:w-[34rem] lg:h-[34rem] bg-cover w-[20rem] h-[20rem]"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(${banner})`,
            }}
          ></motion.div>
        </div>
        <button className="text-white px-11 border border-gray-400 hover:scale-125 hover:text-[#5c8fd5] hover:border-[#5c8fd5] hover:border-2 transition rounded-full aspect-square mx-auto">
          APPLY
        </button>
      </div>
      <div className="bg-black pt-44 pb-44 lg:px-24 px-8">
        <Steps />
        <Professional />
        <div>
          <div className="flex justify-center items-center lg:my-24 my-16 relative">
            <button
              className="mt-16 absolute border top-2 border-white lg:text-lg text-sm outline-offset-[2rem] transition-all outline-[#59c6f8] text-white rounded-full aspect-square lg:p-9 p-5 hover:outline hover:bg-[rgba(0,0,0,0.5)] hover:border-[#59c6f8] hover:text-[#59c6f8] hover:scale-125"
              onClick={goEditor}
            >
              GET START
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
