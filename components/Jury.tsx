import { motion } from "framer-motion";
import { useState } from "react";
import { jury } from "./Descriptions";

export default function Jury() {
  const [juryCard, set_juryCard] = useState<string | null>(null);
  const getOverlay = (id: string) => {
    set_juryCard(id);
  }
  const overlayClose = () => {
    set_juryCard(null);
  }
  return (
    <>
      <div className="lg:px-24 px-5 bg-[whitesmoke] lg:pt-32 py-14">
        <div className="flex flex-col justify-center items-center space-y-10">
          <span className="lg:text-4xl text-sm font-thin tracking-widest border-b border-red-800 p-3">Jury Members</span>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
            {jury.map((data, number) => (
              <motion.div
                key={number}
                layoutId={data.id}
                whileHover={{ scale: 1.05, zIndex: 2 }}
                className="lg:w-64 lg:h-96 w-32 h-52 mx-auto bg-cover bg-no-repeat relative cursor-pointer shadow-xl"
                style={{ backgroundImage: `url(${data.photo})` }}
                onClick={() => getOverlay(data.id)}
              >
                <div
                  className="w-full h-full bg-[rgba(0,0,0,0.6)] absolute flex justify-start items-end hover:bg-[rgba(0,0,0,0.2)] transition">
                  <h4 className="text-left lg:text-base text-[0.5rem] lg:p-10 p-3 text-white font-thin tracking-tighter">{data.name}</h4>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
      {juryCard ?
        <>
          <motion.div
            className="fixed w-full h-full bg-[rgba(0,0,0,0.6)] top-0 z-20 flex justify-center items-center transtion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => overlayClose()}
          >
            <div
              className="fixed flex bg-black">

              {juryCard === jury[0].id &&
                <>
                  <motion.div layoutId={juryCard} style={{ backgroundImage: `url(${jury[0].photo})` }} className="lg:w-72 lg:h-[28rem] w-32 h-52 bg-cover bg-no-repeat" />
                  <div className="text-white p-3 font-thin tracking-tight lg:w-[40rem] w-64 lg:h-[28rem] h-52 lg:text-sm text-[0.5rem] overflow-y-scroll">
                    <p className="mb-5 lg:text-lg text-xs">{jury[0].name} ( {jury[0].country} )</p>
                    <p className="lg:text-sm text-[0.5rem] lg:p-5 p-2">{jury[0].description}</p>
                  </div>
                </>}
                {juryCard === jury[1].id &&
                <>
                  <motion.div layoutId={juryCard} style={{ backgroundImage: `url(${jury[1].photo})` }} className="lg:w-72 lg:h-[28rem] w-32 h-52 bg-cover bg-no-repeat" />
                  <div className="text-white p-3 font-thin tracking-tight lg:w-[40rem] w-64 lg:h-[28rem] h-52 lg:text-sm text-[0.5rem] overflow-y-scroll">
                    <p className="mb-5 lg:text-lg text-xs">{jury[1].name} ( {jury[1].country} )</p>
                    <p className="lg:text-sm text-[0.5rem] lg:p-5 p-2">{jury[1].description}</p>
                  </div>
                </>}
                {juryCard === jury[2].id &&
                <>
                  <motion.div layoutId={juryCard} style={{ backgroundImage: `url(${jury[2].photo})` }} className="lg:w-72 lg:h-[28rem] w-32 h-52 bg-cover bg-no-repeat" />
                  <div className="text-white p-3 font-thin tracking-tight lg:w-[40rem] w-64 lg:h-[28rem] h-52 lg:text-sm text-[0.5rem] overflow-y-scroll">
                    <p className="mb-5 lg:text-lg text-xs">{jury[2].name} ( {jury[2].country} )</p>
                    <p className="lg:text-sm text-[0.5rem] lg:p-5 p-2">{jury[2].description}</p>
                  </div>
                </>}
                {juryCard === jury[3].id &&
                <>
                  <motion.div layoutId={juryCard} style={{ backgroundImage: `url(${jury[3].photo})` }} className="lg:w-72 lg:h-[28rem] w-32 h-52 bg-cover bg-no-repeat" />
                  <div className="text-white p-3 font-thin tracking-tight lg:w-[40rem] w-64 lg:h-[28rem] h-52 lg:text-sm text-[0.5rem] overflow-y-scroll">
                    <p className="mb-5 lg:text-lg text-xs">{jury[3].name} ( {jury[3].country} )</p>
                    <p className="lg:text-sm text-[0.5rem] lg:p-5 p-2">{jury[3].description}</p>
                  </div>
                </>}
            </div>
          </motion.div>

        </>
        : null}
    </>
  );
}