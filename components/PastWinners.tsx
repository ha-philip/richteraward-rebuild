import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

const boxVar = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,

  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2
    }
  },
  hide: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    transition: {
      duration: 0.2
    }
  })
};

export default function PastWinners() {
  const { locale } = useRouter();
  const [visible, set_visible] = useState(1);
  const [back, set_back] = useState(false);
  const nextCard = () => {
    set_visible((prev) => (prev === 3 ? 3 : prev + 1));
    set_back(false);
  }
  const prevCard = () => {
    set_visible((prev) => (prev === 1 ? 1 : prev - 1));
    set_back(true);
  }
  return (
    <>
      <div className="lg:px-3 px-1 bg-[whitesmoke] lg:pt-32 py-14" id="past">
        <div className="flex flex-col justify-center items-center space-y-10">
          <span className="lg:text-4xl text-lg font-thin tracking-widest border-b border-red-800 p-3">
            {locale == "en" ?  "Past Winners" : "이전 수상자" }
            </span>
          <h2 className="border-b border-red-800 p-2 lg:text-lg text-xs font-bold tracking-tighter">{2019 + visible}</h2>
          <div
            className="flex flex-col w-full justify-center items-center relative lg:h-72 h-28 overflow-hidden"
          >
            <AnimatePresence mode="wait" custom={back}>
              {[1, 2, 3].map((i) => i === visible ? (
                <motion.div
                  custom={back}
                  variants={boxVar}
                  initial="entry"
                  animate="center"
                  exit="hide"
                  key={visible}
                  className="absolute flex justify-between lg:gap-4 gap-1 top-0">
                  {[...Array(5)].map((data) => (
                    <motion.div
                      className="bg-black shadow-xl text-white flex justify-center items-end lg:w-48 w-16 lg:h-72 h-28 p-3 lg:text-xs text-[0.5rem] cursor-pointer">
                      {2019 + visible} winner
                    </motion.div>
                  ))}
                </motion.div>
              ) : null
              )}
            </AnimatePresence>
            <div className="absolute flex justify-between w-full lg:top-[8rem] top-[3rem] z-10">
              <button onClick={prevCard}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={visible === 1 ? `none` : `rgb(153, 27, 27)`}  className="lg:w-12 lg:h-12 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button onClick={nextCard}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={visible === 3 ? `none` : `rgb(153, 27, 27)`} className="lg:w-12 lg:h-12 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
