
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <>
      <div className="lg:px-36 bg-black pb-24">
        <div className="flex lg:flex-row flex-col lg:justify-start justify-center items-center lg:space-y-0 space-y-10">
          <div className="flex-col justify-center items-center space-y-3">
            <h1 className="text-white lg:text-4xl text-2xl tracking-tighter lg:text-left text-center">"Sviatoslav Richter"</h1>
            <motion.img
              src="https://crosseyedpianist.files.wordpress.com/2015/03/998237_356756677791046_1918624410_n.jpg"
              className="lg:w-[40rem] w-52"
            />
          </div>
          <p className="text-white lg:text-xl tracking-tight text-xs lg:mx-0 mx-16 font-thin">
            International Piano Competition is open to pianists of all nationalities and
            it is an online International Piano Competition, to which participants must submit their videos.<br/>
            Our International Piano Competition will be held online in order to find gifted young pianists.<br/>
            It is desgined to provide opportunities to build international career, not only offline but also online.
          </p>
        </div>
      </div>
    </>
  );
}
