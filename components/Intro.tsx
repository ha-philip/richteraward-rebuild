
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IintroText {
  intro_title: string;
  intro_1: string;
  intro_2: string;
  intro_3: string;
}

export default function Intro() {
  const { locale } = useRouter();
  const [introText, set_introText] = useState<IintroText>();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/locales/${locale}/intro.json`);
      const json = await response.json();
      set_introText(json);
    })();
  }, [locale]);
  return (
    <>
      <div className="lg:px-36 bg-black lg:py-52 py-36">
        <div className="flex lg:flex-row flex-col lg:justify-start justify-center items-center lg:space-y-0 space-y-10">
          <div className="flex-col justify-center items-center space-y-3">
            <h1 className="text-white lg:text-4xl text-2xl tracking-tighter lg:text-left text-center">"{introText?.intro_title}"</h1>
            <motion.img
              src="https://crosseyedpianist.files.wordpress.com/2015/03/998237_356756677791046_1918624410_n.jpg"
              className="lg:w-[40rem] w-52"
            />
          </div>
          <p className="text-white lg:text-xl tracking-tight text-xs lg:mx-0 mx-16 font-thin">
            {introText?.intro_1}<br/>
            {introText?.intro_2}<br/>
            {introText?.intro_3}
          </p>
        </div>
      </div>
    </>
  );
}
