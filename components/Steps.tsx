import { motion } from "framer-motion";

interface ISteps {
  name: string;
  text: string;
  photo: string;
}
//스텝 텍스트 내용
const steps: ISteps[] = [
  {
    name: "ANALYZE",
    text: "Touch the sound mode in the list of options on the left or place the mouse on it.",
    photo: "https://wallpapercave.com/wp/wp2955247.jpg",
  },
  {
    name: "MASTER",
    text: "Listen to them and click on your favorite sound mode. If you want to search more, enter your preferred genre or mood in the Search box.",
    photo:
      "https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg",
  },
  {
    name: "LISTEN",
    text: "Click Save and you're done!!! Your sound has already changed and saved in the cloud to share it with others.",
    photo:
      "https://t3.ftcdn.net/jpg/05/29/37/22/360_F_529372232_2Z75XLUgwHQQmtsgeWwGdpdCx4inCPbP.jpg",
  },
  {
    name: "SELECT",
    text: "Select the second category and enter your preferred genre or mood to use the Shutterstock music library.",
    photo:
      "https://www.pixelstalk.net/wp-content/uploads/2016/06/Wallpaper-1920x1080-Download.jpg",
  },
];

export function Steps() {
  return (
    <>
          <h1 className="text-white lg:text-6xl text-xl lg:mt-[20rem] mt-[10rem] text-center">
            Made Easy With A Simple 3 - Step Process
          </h1>
          <div className="lg:space-y-[15rem] space-y-[6rem] lg:mt-24 mt-16 ">
      {steps.map((data, number) => (
        <div
          key={number}
          className="text-white flex lg:items-start lg:space-x-7 lg:space-y-0 lg:flex-row flex-col"
        >
          <div className="lg:w-1/3 w-full">
            <h1 className="lg:text-4xl text-xl">{data.name}</h1>
            <p className="lg:text-lg text-xs text-gray-400">{data.text}</p>
          </div>
          <div className="lg:w-2/3 w-full lg:mt-0 mt-5">
            <motion.img
              src={data.photo}
              whileHover={{ rotate: 2 }}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      ))}
      </div>
    </>
  );
}
