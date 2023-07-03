import { motion } from "framer-motion";
import Link from "next/link";

interface IFooterMenu {
  linkName: string;
  linkText: string;
}

const footerMenu:IFooterMenu[] = [
  {
    linkName: "about",
    linkText: "About Us"
  },
  {
    linkName: "term",
    linkText: "Term"
  },
  {
    linkName: "digital",
    linkText: "Digital"
  },
  {
    linkName: "privacy",
    linkText: "Privacy"
  },
  {
    linkName: "contact",
    linkText: "Contact"
  }
];

export default function Footer() {
  return (
    <div className="flex lg:px-24 lg:py-36 lg:justify-between lg:flex-row lg:space-y-0 space-y-5 flex-col py-20 px-16 bg-black items-center">
      <div className="flex items-center lg:space-x-16 lg:flex-row flex-col lg:space-y-0 space-y-5">
        <motion.img
          src="https://surroundio.org/wp-content/uploads/2023/05/surround_logo.png"
          className="lg:w-64 w-52"
        />
        <div className="flex flex-col space-y-5">
          <div className="text-white flex lg:flex-row lg:space-x-8 lg:text-lg lg:space-y-0 flex-col text-center space-y-5">
            {footerMenu.map((data, number) => (
              <Link key={number} href={`/${data.linkName}`}>{data.linkText}</Link>
            ))}
          </div>
          <span className="lg:text-sm text-xs text-gray-400">Surroundio copyright © 2022 Nationalux Canada, All rights reserved.</span>
        </div>
      </div>

      <div>
        <select className="lg:text-lg text-sm pl-5 pr-36 py-3 text-white bg-black border border-white focus:outline-none">
          <option selected>ENGLISH</option>
          <option>한국어</option>
        </select>
      </div>
    </div>
  );
}
