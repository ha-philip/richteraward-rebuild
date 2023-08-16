import Head from "next/head";
import Intro from "@/components/Intro";
import Jury from "@/components/Jury";
import PastWinners from "@/components/PastWinners";
import Regulation from "@/components/Regulation";
import Notice from "@/components/Notice";
import Contact from "@/components/Contact";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const banner: string = "http://g-clef.kr/img/main_img.png";

interface IindexText {
  index_1: string;
  index_2: string;
  index_3: string;
}

export default function Home() {
  const { locale } = useRouter();
  const [indexText, set_indexText] = useState<IindexText>();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/locales/${locale}/index.json`);
      const json = await response.json();
      set_indexText(json);
    })();
  }, [locale]);
  return (
    <>
      <Head>
        <title>Richter Award</title>
      </Head>
      <div className="py-44 lg:px-24 px-8 bg-black flex lg:justify-between lg:items-center lg:flex-row flex-col justify-center">
          <div className="absolute lg:top-80 lg:left-56 top-60 lg:space-y-10 space-y-5">
            <h1 className="text-white lg:text-5xl text-3xl">
              {indexText?.index_1}
              <br />
              <span className="text-red-400 font-bold lg:text-7xl text-5xl">
              {indexText?.index_2}
              </span>
            </h1>
            <p className="text-white lg:text-3xl text-sm">
            {indexText?.index_3}
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
      <Jury/>
      <PastWinners/>
      <Regulation/>
      <Notice/>
      <Contact/>
    </>
  );
}
