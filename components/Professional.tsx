import NavBar from "@/components/NavBar";
import { motion } from "framer-motion";
import Head from "next/head";

const professionBanner: string = "https://wallpapercave.com/wp/lwfQm84.jpg";

interface IPriceList {
  proTitle: string;
  proText: string;
}
//텍스트 목록
const priceList: IPriceList[] = [
  {
    proTitle: "For All Sound Content",
    proText:
      "Surroundio is a bespoke sound studio dedicated to you. A single click and touch is all it takes to create surround sound and to mix and master sound effects, all automatically. Upgrade the quality of all video content you have on your phone, including professional lectures, outdoor filming, and concert recording with the 1/100 fraction of the previous cost.",
  },
  {
    proTitle: "Professional results with massive DB and AI",
    proText:
      "Just because it's affordable and simple to use doesn't mean that it will be of low quality. Our Artificial Intelligence (AI) system performs accurate analysis of the characteristics of your content to deliver the best sound mode out of over 500,000 references in database provided by professional sound masters. Users are allowed to search for their preferred mode to obtain a variety of outstanding results all the time.",
  },
  {
    proTitle: "Unlimited access to high-quality Shutterstock music library",
    proText:
      "Paid members will be given unlimited access to the Shutterstock music library on the platform. Shutterstock never fails to offer highly selective, top-notch music and your privilege of adding unlimited high-quality music to your video content is available only in Surroundio.",
  },
];

export default function Professional() {
  return (
    <>
      <div
        className="p-6 lg:mt-[15rem] mt-[8rem] bg-no-repeat bg-cover bg-fixed"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1) ), url(${professionBanner})`,
        }}
      >
        <h1 className="text-white lg:text-6xl text-xl text-center">
          Professional sound Created Instantly
        </h1>
        <div className="flex justify-center lg:flex-row flex-col items-start lg:space-x-6 lg:space-y-0 space-y-2 lg:mt-24 mt-16 z-10">
          {priceList.map((data, number) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={number}
              className="bg-[rgba(0,0,0,0.6)] text-white rounded-md lg:w-1/3 w-full lg:px-10 px-8 py-[2rem] lg:min-h-[22rem] lg:max-h-[35rem]"
            >
              <h1 className="lg:text-xl text-lg">{data.proTitle}</h1>
              <p className="lg:text-sm text-xs text-gray-400 mt-8">{data.proText}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
