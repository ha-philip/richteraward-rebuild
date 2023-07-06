import { motion } from "framer-motion";
import Link from "next/link";

interface IFooterMenu {
  linkName: string;
  linkText: string;
}

const footerMenu: IFooterMenu[] = [
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
    <div className="flex lg:px-36 lg:py-18 lg:justify-between lg:flex-row lg:space-y-0 space-y-5 flex-col py-20 px-16 bg-black items-center">
        <motion.img
          src="/mainlogo.png"
          className="lg:w-52 w-32"
        />
        <span className="lg:text-sm text-xs text-gray-400">Richter-Award copyright © 2022 Nationalux Canada, All rights reserved.</span>
    </div>
  );
}
