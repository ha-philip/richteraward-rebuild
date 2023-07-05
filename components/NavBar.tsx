import { useRouter } from "next/router";
import { cls } from "./utils";
import { motion, useAnimation, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navVarient = {
  top: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  scroll: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
};

const ScrollUp = {
  top: {
    opacity: "0",
  },
  scroll: {
    opacity: "1",
  },
};

export default function NavigationBar() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const buttonAnimation = useAnimation();
  const [lanToggle, set_lanToggle] = useState<"KR" | "EN">("EN");
  const [toggleMenu, set_toggleMenu] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
        buttonAnimation.start("scroll");
      } else {
        navAnimation.start("top");
        buttonAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation, buttonAnimation]);

  const mobileMenu = () => {
    set_toggleMenu((prev) => !prev);
  };
  console.log(router);

  return (
    <>
      <div>
        <motion.nav
          variants={navVarient}
          animate={navAnimation}
          transition={{ duration: 0.1 }}
          initial={"top"}
          className="fixed top-0 w-full z-50 flex flex-col"
        >
          <div className="flex justify-between items-center xl:px-24 lg:px-24 px-5 py-8 ">
            <Link href="/">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="/mainlogo.png"
                className="lg:w-40 w-28"
              />
            </Link>
            <div className="lg:flex hidden justify-between text-sm items-center text-white space-x-10 ">
              <Link
                href="/regulation"
                className={cls(
                  "flex flex-col items-center space-y-2 ",
                  router.pathname === "/regulation"
                    ? "text-red-400"
                    : "hover:text-red-400 transition-colors"
                )}
              >
                <span>MAIN</span>
              </Link>
              <Link
                href="/jury"
                className={cls(
                  "flex flex-col items-center space-y-2 ",
                  router.pathname === "/jury"
                    ? "text-red-400"
                    : "hover:text-red-400 transition-colors"
                )}
              >
                <span>WELCOME</span>
              </Link>
              <Link
                href="/contact"
                className={cls(
                  "flex flex-col items-center space-y-2 ",
                  router.pathname === "/contact"
                    ? "text-red-400"
                    : "hover:text-red-400 transition-colors"
                )}
              >
                <span>INFORMATION</span>
              </Link>
              <Link
                href="/notice"
                className={cls(
                  "flex flex-col items-center space-y-2 ",
                  router.pathname === "/notice"
                    ? "text-red-400"
                    : "hover:text-red-400 transition-colors"
                )}
              >
                <span>JURY</span>
              </Link>
              <Link
                href="/past"
                className={cls(
                  "flex flex-col items-center space-y-2 ",
                  router.pathname === "/past"
                    ? "text-red-400"
                    : "hover:text-red-400 transition-colors"
                )}
              >
                <span>CONTACT</span>
              </Link>
              <Link
                href="/past"
                className={cls(
                  "flex flex-col items-center space-y-2 ",
                  router.pathname === "/past"
                    ? "text-red-400"
                    : "hover:text-red-400 transition-colors"
                )}
              >
                <span>NOTICE</span>
              </Link>
              <Link
                href="/past"
                className={cls(
                  "flex flex-col items-center space-y-2 ",
                  router.pathname === "/past"
                    ? "text-red-400"
                    : "hover:text-red-400 transition-colors"
                )}
              >
                <span>PAST WINNERS</span>
              </Link>
            </div>
            <div className="lg:flex hidden justify-between items-center text-white text-xl">
              <button
                onClick={() => set_lanToggle("KR")}
                className={cls(
                  "border-r border-white px-4 transition text-sm",
                  lanToggle === "KR" ? "text-red-400" : "hover:text-red-400"
                )}
              >
                한국어
              </button>
              <button
                onClick={() => set_lanToggle("EN")}
                className={cls(
                  "border-l border-white px-4 transition text-sm",
                  lanToggle === "EN" ? "text-red-400" : "hover:text-red-400"
                )}
              >
                ENGLISH
              </button>
            </div>
            <button className="text-white lg:hidden block" onClick={mobileMenu}>
              {toggleMenu ? (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </motion.svg>
              )}
            </button>
          </div>
          {toggleMenu ? (
            <motion.div className={`text-white lg:hidden flex flex-col text-xs`}>
              <Link
                href="/regulation"
                className={cls(
                  "text-right px-5 py-5",
                  router.pathname === "/regulation"
                    ? "text-red-400"
                    : "hover:text-red-400 transition-colors"
                )}
              >
                <span>MAIN</span>
              </Link>
              <Link
                href="/jury"
                className={cls(
                  "text-right px-5 py-5",
                  router.pathname === "/regulation"
                    ? "text-red-400"
                    : "hover:text-red-400 transition-colors"
                )}
              >
                <span>WELCOME</span>
              </Link>
              <Link
                href="/contact"
                className={cls(
                  "text-right px-5 py-5",
                  router.pathname === "/regulation"
                    ? "text-red-400"
                    : "hover:text-red-400 transition-colors"
                )}
              >
                <span>INFORMATION</span>
              </Link>
              <Link
                href="/notice"
                className={cls(
                  "text-right px-5 py-5",
                  router.pathname === "/regulation"
                    ? "text-red-400"
                    : "hover:text-red-400 transition-colors"
                )}
              >
                <span>JURY</span>
              </Link>
              <Link
                href="/past"
                className={cls(
                  "text-right px-5 py-5",
                  router.pathname === "/regulation"
                    ? "text-red-400"
                    : "hover:text-red-400 transition-colors"
                )}
              >
                <span>CONTACT</span>
              </Link>
              <Link
                href="/past"
                className={cls(
                  "text-right px-5 py-5",
                  router.pathname === "/regulation"
                    ? "text-red-400"
                    : "hover:text-red-400 transition-colors"
                )}
              >
                <span>NOTICE</span>
              </Link>
              <Link
                href="/past"
                className={cls(
                  "text-right px-5 py-5",
                  router.pathname === "/regulation"
                    ? "text-red-400"
                    : "hover:text-red-400 transition-colors"
                )}
              >
                <span>PAST WINNERS</span>
              </Link>
              <div className="flex justify-end items-center text-white text-sm py-3">
              <button
                onClick={() => set_lanToggle("KR")}
                className={cls(
                  "border-r border-white px-4 transition",
                  lanToggle === "KR" ? "text-red-400" : "hover:text-red-400"
                )}
              >
                한국어
              </button>
              <button
                onClick={() => set_lanToggle("EN")}
                className={cls(
                  "border-l border-white px-4 transition",
                  lanToggle === "EN" ? "text-red-400" : "hover:text-red-400"
                )}
              >
                ENGLISH
              </button>
            </div>
            </motion.div>
          ) : null}
        </motion.nav>
      </div>
      <motion.button
        onClick={scrollToTop}
        variants={ScrollUp}
        initial={{ opacity: 0 }}
        animate={buttonAnimation}
        transition={{ duration: 0.1 }}
        className="fixed bottom-4 right-4 bg-white lg:p-5 p-3 rounded-full hover:bg-gray-300 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </motion.button>
    </>
  );
}
