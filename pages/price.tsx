import { motion } from "framer-motion";
import Head from "next/head";

interface IPriceList {
    priceTitle: string;
    payType: string;
    price: string | number;
    text: string[]
}
//가격 목록 텍스트 내용
const priceList: IPriceList[] = [
    {
        priceTitle: "Free Forever",
        payType: "Annually",
        price: "Free",
        text: [
            "Download 10 videos in less than 1 minute",
            "Download 3 videos in 5 minutes",
            "Access to cloud storage",
            "Access to shared libraries",
            "Save your preferred mastering mode",
            "Create surround sound",
            "Unlimited preview",
        ]
    },
    {
        priceTitle: "Pay",
        payType: "Monthly",
        price: "$ 11",
        text:   [
            "Unlimited access to Shutterstock Music Library",
            "Download 50 regular videos a month",
            "Download 20 large files exceeding 1GB",
            "Access to shared libraries",
            "Save your preferred mastering mode",
            "Create surround sound",
            "Unlimited preview",
          ],
    },
    {
        priceTitle: "Special Editor",
        payType: "Monthly",
        price: "$ 33",
        text:  [
            "Unlimited access to Shutterstock Music Library",
            "Download 100 regular videos a month",
            "Download 30 large files exceeding 1GB",
            "Access to shared libraries",
            "Save your preferred mastering mode",
            "Create surround sound",
            "Unlimited preview",
          ],
    },
];

export default function Price() {
  return (
    <>
      <Head>
        <title>Surroundio | Price</title>
      </Head>
      <div className="bg-black pt-44 pb-10 lg:px-24 px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <h1 className="text-white lg:text-6xl text-xl">
            Three payment options in a Single plan
          </h1>
          <p className="text-gray-400 lg:text-2xl text-xs">
            We provide sound functionalities and services,
            <br />
            including unlimited access to surrounding and mastering.
          </p>
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6}}
          className="flex justify-center lg:flex-row flex-col items-start lg:space-x-6 mt-8 lg:space-y-0 space-y-2">
            {priceList.map((data, number) => (
                 <div key={number} className="bg-[rgba(50,50,50,0.4)] text-white rounded-md lg:w-1/3 w-full lg:px-10 px-8 py-8">
                 <h1 className="lg:text-3xl text-xl">{data.priceTitle}</h1>
                 <p className="text-xs text-gray-400">{data.payType}</p>
                 <h2 className="lg:mt-10 mt-5 font-bold lg:text-5xl text-2xl">{data.price}</h2>
                 <button className="bg-[#59c6f8] w-full lg:text-base text-sm rounded-md lg:mt-12 mt-5 mb-5 py-2 hover:bg-blue-400 transition">
                   Begin
                 </button>
                 <div className="text-gray-400 lg:text-sm text-xs space-y-3">
                   {data.text.map((text, number) => (
                     <p key={number} className="flex justify-start items-center">
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         strokeWidth="2"
                         stroke="lightgray"
                         className="lg:w-4 lg:h-4 w-3 h-3"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M4.5 12.75l6 6 9-13.5"
                         />
                       </svg>
                       {text}
                     </p>
                   ))}
                 </div>
               </div>
            ))}
           
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
