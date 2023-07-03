import Head from "next/head";
import { motion } from "framer-motion";
import { terms } from "@/components/Terms";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Surroundio | Contact</title>
      </Head>
      <div className="bg-black pt-44 pb-10 lg:px-24 px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <h1 className="text-white lg:text-6xl text-3xl mt-16">Contact Us</h1>
          <div className="mt-16">
              <motion.div 
              initial={{ opacity: 0,}}
              animate={{ opacity: 1}}
              transition={{ delay: 0.6}}
              className="mt-14"
              >
                <h1 className="lg:text-3xl text-xl text-white">E-Mail</h1>
                <p className="lg:text-base text-sm mt-4 text-gray-300">Info@Surround-Ai.Com</p>
                <h1 className="lg:text-3xl text-xl text-white mt-16">Address</h1>
                <p className="lg:text-base text-sm mt-4 text-gray-300">InnoWork Center A703, 7th Floor, Nonhyeon-Ro, Gangnam-Gu, Seoul (Yeoksam-Dong, Songam 2 Building)</p>
                <div className="flex justify-center items-center w-[90%] mx-auto mt-24">
                    <motion.img src="https://developers.google.com/static/codelabs/maps-platform/full-stack-store-locator/img/58a6680e9c8e7396.png?hl=ko"/> 
                </div>
              </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
