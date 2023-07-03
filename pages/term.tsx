import Head from "next/head";
import { motion } from "framer-motion";
import { terms } from "@/components/Terms";

export default function Term() {
  return (
    <>
      <Head>
        <title>Surroundio | Term</title>
      </Head>
      <div className="bg-black pt-44 pb-10 lg:px-24 px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <h1 className="text-white lg:text-6xl text-3xl mt-16">Term</h1>
          <div className="mt-16">
            {terms.map((data, number) => (
              <motion.div 
              whileHover={{y: -3}}
              key={number} 
              className="mt-14 group">
                <h1 className="lg:text-2xl text-xl text-white">{data.termTitle}</h1>
                {data.termText.map((text, number)=> (
                  <p key={number} className="lg:text-sm text-xs mt-4 text-gray-400 group-hover:text-white">{text}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
