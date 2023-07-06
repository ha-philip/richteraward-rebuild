import { motion } from "framer-motion";

export default function Regulation() {
  return (
    <>
      <div className="lg:px-24 px-5 bg-[whitesmoke] lg:pt-32 py-14">
        <div className="flex flex-col justify-center items-center space-y-10">
          <span className="lg:text-4xl text-sm font-thin tracking-widest border-b border-red-800 p-3">Regulation of competition</span>
          <div className="grid lg:grid-cols-5 grid-cols-3 gap-6">
            {[...Array(15)].map((data, number) => (
              <motion.div 
              whileHover={{scale: 1.1}}
              key={number} 
              className="bg-black shadow-xl text-white flex justify-center items-end lg:w-48 w-20 lg:h-72 h-32 p-3 text-xs">Winner {number + 1}
              </motion.div>
            ))}
          </div>
          </div>
        </div>
    </>
  );
}
