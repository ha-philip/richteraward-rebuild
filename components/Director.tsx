import { motion } from "framer-motion";

export default function Director() {
  return (
    <>
      <div className="lg:px-24 px-5 bg-[whitesmoke] lg:pt-32 py-14">
        <div className="flex flex-col justify-center items-center space-y-10">
          <span className="lg:text-4xl text-sm font-thin tracking-widest border-b border-red-800 p-3">Message from the Artistic Director</span>
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center lg:space-x-10 items-end lg:mx-24 lg:space-y-0 space-y-10">
            <motion.img
              src="/Sunghoon Simon HWANG (2).jpg"
              className="lg:w-96 w-52 mx-auto"
            />
            <div>
              <p className="lg:text-lg text-xs font-thin tracking-tighter">
                Nowadays, the trend of times is changing very much. <br />We have been contemplating the establishment of an international
                piano competition which has a realistic and meaningful aim. <br />The present international trend is dominating the online
                world, not only in the music world, but in many other areas as well. We organize this international piano competition to find
                young and talented pianists and to build a solid foundation for their activities in this online field. <br />Through our competition,
                we hope that talented pianists will be provided with wonderful opportunities to share their music with many people.
              </p>
              <p className="mt-8 lg:text-xl text-sm tracking-tighter">
              - Pianist Sunghoon Simon Hwang
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
