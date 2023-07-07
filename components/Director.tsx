import { motion } from "framer-motion";

interface IJury {
    name: string;
    country: string;
    photo: string;
}

const jury: IJury[] = [
  {
    name: "Pietro Borgonovo",
    country: "Italy",
    photo: "/pietro.jpeg"
  },
  {
    name: "Sunghoon Simon Hwang",
    country: "South Korea",
    photo: "/simon.jpeg"
  },
  {
    name: "Graham Scott",
    country: "United Kingdom",
    photo: "/scott.jpeg"
  },
  {
    name: "Olivier Moulin",
    country: "France",
    photo: "/oliver.jpeg"
  }
];

export default function Director() {
  return (
    <>
      <div className="lg:px-24 px-5 bg-[whitesmoke] lg:pt-32 py-14">
        <div className="flex flex-col justify-center items-center space-y-10">
          <span className="lg:text-4xl text-sm font-thin tracking-widest border-b border-red-800 p-3">Jury Members</span>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
            {jury.map((data, number) => (
              <motion.div
              key={number}
                whileHover={{ scale: 1.05, zIndex: 2 }}
                className="lg:w-64 lg:h-96 w-32 h-52 mx-auto bg-cover bg-no-repeat relative cursor-pointer shadow-xl"
                style={{ backgroundImage: `url(${data.photo})` }}
              >
                <div
                  className="w-full h-full bg-[rgba(0,0,0,0.6)] absolute flex justify-start items-end hover:bg-[rgba(0,0,0,0.2)] transition">
                  <h4 className="text-left lg:text-base text-[0.5rem] lg:p-10 p-3 text-white font-thin tracking-tighter">{data.name}<br />({data.country})</h4>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}