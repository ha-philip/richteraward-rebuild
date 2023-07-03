import Head from "next/head";
import { motion } from "framer-motion";
import { digitals } from "@/components/Terms";

export default function Digital() {
  return (
    <>
      <Head>
        <title>Surroundio | Digital</title>
      </Head>
      <div className="bg-black pt-44 pb-10 lg:px-24 px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <h1 className="text-white lg:text-6xl text-3xl mt-16">Term of Use: Digital</h1>
          <div className="mt-16 mb-36">
              <motion.div 
              whileHover={{y: -3}}
              className="mt-14 group">
                <h1 className="lg:text-2xl text-xl text-white">{digitals.digTitle}</h1>
                {digitals.digText.map((text, number)=> (
                  <p key={number} className="lg:text-lg text-sm mt-4 text-gray-300">{text}</p>
                ))}
              </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
