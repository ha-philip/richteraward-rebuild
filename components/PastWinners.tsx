import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import { pastWinners } from "./Descriptions";

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
  const [visible, set_visible] = useState(0);
  const [back, set_back] = useState(false);
  const nextCard = () => {
    set_visible((prev) => (prev === 2 ? 2 : prev + 1));
    set_back(false);
  }
  const prevCard = () => {
    set_visible((prev) => (prev === 0 ? 0 : prev - 1));
    set_back(true);
  }
  const [winnerList, set_winnerList] = useState(pastWinners[0].grandPrize);
  const getMyAwards = (year: number, award: string) => {
    if (year === 0) {
      switch (award) {
        case "GRAND PRIZE":
          set_winnerList(pastWinners[0].grandPrize);
          break;
        case "1ST PRIZE":
          set_winnerList(pastWinners[0].firstPrize);
          break;
        case "2ND PRIZE":
          set_winnerList(pastWinners[0].secondPrize);
          break;
        case "3RD PRIZE":
          set_winnerList(pastWinners[0].thridPrize);
          break;
        case "SPECIAL PRIZE":
          set_winnerList(pastWinners[0].specialPrize);
          break;
      }
    } else if (year === 1) {
      switch (award) {
        case "GRAND PRIZE":
          set_winnerList(pastWinners[1].grandPrize);
          break;
        case "1ST PRIZE":
          set_winnerList(pastWinners[1].firstPrize);
          break;
        case "2ND PRIZE":
          set_winnerList(pastWinners[1].secondPrize);
          break;
        case "3RD PRIZE":
          set_winnerList(pastWinners[1].thridPrize);
          break;
        case "SPECIAL PRIZE":
          set_winnerList(pastWinners[1].specialPrize);
          break;
      }
    } else if (year === 2) {
      switch (award) {
        case "GRAND PRIZE":
          set_winnerList(pastWinners[2].grandPrize);
          break;
        case "1ST PRIZE":
          set_winnerList(pastWinners[2].firstPrize);
          break;
        case "2ND PRIZE":
          set_winnerList(pastWinners[2].secondPrize);
          break;
        case "3RD PRIZE":
          set_winnerList(pastWinners[2].thridPrize);
          break;
        case "SPECIAL PRIZE":
          set_winnerList(pastWinners[2].specialPrize);
          break;
      }
    }
    set_winnerCard(true);
  }
  const [winnerCard, set_winnerCard] = useState<boolean>(false);

  return (
    <>
      <div className="lg:px-3 px-1 bg-[whitesmoke] lg:pt-32 py-14" id="past">
        <div className="flex flex-col justify-center items-center space-y-10">
          <span className="lg:text-4xl text-lg font-thin tracking-widest border-b border-red-800 p-3">
            {locale == "en" ? "Past Winners" : "역대 수상자"}
          </span>
          <h2 className="border-b border-red-800 p-2 lg:text-lg text-xs font-bold tracking-tighter">{2020 + visible}</h2>
          <div
            className="flex flex-col w-full justify-center items-center relative lg:h-72 h-28 overflow-hidden"
          >
            <AnimatePresence mode="wait" custom={back}>
              {[0, 1, 2].map((i) => i === visible ? (
                <motion.div
                  custom={back}
                  variants={boxVar}
                  initial="entry"
                  animate="center"
                  exit="hide"
                  key={visible}
                  className="absolute flex justify-between lg:gap-4 gap-1 top-0 z-10">
                  {["GRAND PRIZE", "1ST PRIZE", "2ND PRIZE", "3RD PRIZE", "SPECIAL PRIZE"].map((awardName, number) => (
                    <motion.div
                      className="bg-black shadow-xl text-white flex justify-center items-end lg:w-48 w-16 lg:h-72 h-28 p-3 lg:text-xs text-[0.5rem] cursor-pointer"
                      onClick={() => getMyAwards(i, awardName)}
                      key={number}>
                      {awardName}
                    </motion.div>
                  ))}
                </motion.div>
              ) : null
              )}
            </AnimatePresence>
            <div className="absolute flex justify-between w-full lg:top-[8rem] top-[3rem]">
              <button onClick={prevCard}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={visible === 0 ? `none` : `rgb(153, 27, 27)`} className="lg:w-12 lg:h-12 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button onClick={nextCard}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={visible === 2 ? `none` : `rgb(153, 27, 27)`} className="lg:w-12 lg:h-12 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {winnerCard ?
          <motion.div
            className="fixed w-full h-full bg-[rgba(0,0,0,0.6)] top-0 z-30 flex justify-center items-center transtion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => set_winnerCard(false)}
          >
            {Object.values(winnerList).map((value, number) => 
              <p className="text-white" key={number}>{JSON.stringify(value)}</p>
            )}
          </motion.div>
          : null}
    </>
  );
}
