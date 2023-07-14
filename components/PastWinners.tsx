import { motion } from "framer-motion";

export default function PastWinners() {
  return (
    <>
      <div className="lg:px-24 px-5 bg-[whitesmoke] lg:pt-32 py-14">
        <div className="flex flex-col justify-center items-center space-y-10">
          <span className="lg:text-4xl text-sm font-thin tracking-widest border-b border-red-800 p-3">Past Winners</span>
          <h2 className="border-b border-red-800 p-2 lg:text-lg text-xs font-bold tracking-tighter">2020</h2>
          <div className="grid grid-cols-5 lg:gap-6 gap-3">
            {[...Array(5)].map((data, number) => (
              <motion.div 
              whileHover={{scale: 1.05}}
              key={number} 
              className="bg-black shadow-xl text-white flex justify-center items-end lg:w-48 w-16 lg:h-72 h-28 p-3 lg:text-xs text-[0.5rem]">Winner {number + 1}
              </motion.div>
            ))}
          </div>
          <h2 className="border-b border-red-800 p-2 lg:text-lg text-xs font-bold tracking-tighter pt-10">2021</h2>
          <div className="grid grid-cols-5 lg:gap-6 gap-3">
            {[...Array(5)].map((data, number) => (
              <motion.div 
              whileHover={{scale: 1.05}}
              key={number} 
              className="bg-black shadow-xl text-white flex justify-center items-end lg:w-48 w-16 lg:h-72 h-28 p-3 lg:text-xs text-[0.5rem]">Winner {number + 1}
              </motion.div>
            ))}
          </div>
          <h2 className="border-b border-red-800 p-2 lg:text-lg text-xs font-bold tracking-tighter pt-10">2022</h2>
          <div className="grid grid-cols-5 lg:gap-6 gap-3">
            {[...Array(5)].map((data, number) => (
              <motion.div 
              whileHover={{scale: 1.05}}
              key={number} 
              className="bg-black shadow-xl text-white flex justify-center items-end lg:w-48 w-16 lg:h-72 h-28 p-3 lg:text-xs text-[0.5rem]">Winner {number + 1}
              </motion.div>
            ))}
          </div>
          </div>
        </div>
    </>
  );
}
