import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

export default function Login() {
  const [end, set_end] = useState<boolean>(false);
  const [keep, set_keep] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "all",
  });
  const onVaild = () => {
    set_end(true);
  };
  const onInValid = (err: any) => {
    set_end(false);
  };
  const onkeepID = () => {
    set_keep((prev) => !prev);
  };
  return (
    <>
      <Head>
        <title>Surroundio | Login</title>
      </Head>
      <div className="bg-black pt-44 pb-10 lg:px-24 px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <h1 className="text-white lg:text-6xl text-3xl mt-16 text-center">
            Login
          </h1>
          <div className="mt-16">
            <form onSubmit={handleSubmit(onVaild, onInValid)}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-14 lg:w-[50rem] mx-auto flex flex-col lg:px-32 gap-5 text-white"
              >
                <div className="flex lg:justify-between lg:gap-5 lg:flex-row flex-col gap-2">
                  <button className="flex justify-center items-center gap-3 bg-white rounded-md py-3 px-5 text-gray-600 lg:text-sm text-xs lg:w-1/2 hover:bg-slate-200 transition">
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      fill="black"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    Enter With Google
                  </button>
                  <button className="flex justify-center items-center gap-3 bg-white rounded-md py-3 px-5 text-gray-600 lg:text-sm text-xs lg:w-1/2 hover:bg-slate-200 transition">
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      fill="black"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Enter With FaceBook
                  </button>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Please write down your email.",
                  })}
                  autoComplete="off"
                  className="px-10 lg:py-5 py-3 focus:outline-none focus:bg-[rgba(100,100,100,0.4)] rounded-md bg-[rgba(50,50,50,0.4)] transition lg:text-lg text-sm"
                />
                {errors.email ? (
                  <p className="text-xs text-red-300">{errors.email.message}</p>
                ) : null}
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Please write down your password.",
                  })}
                  autoComplete="off"
                  className="px-10 lg:py-5 py-3 focus:outline-none focus:bg-[rgba(100,100,100,0.4)] rounded-md bg-[rgba(50,50,50,0.4)] transition lg:text-lg text-sm"
                />
                {errors.password ? (
                  <p className="text-xs text-red-300">
                    {errors.password.message}
                  </p>
                ) : null}
                <div className="">
                  <label
                    htmlFor="keepID"
                    className="flex justify-start items-center space-x-4 cursor-pointer"
                  >
                    {keep ? (
                      <>
                        <svg
                          fill="#59c6f8"
                          className="w-4 h-4"
                          viewBox="0 -0.5 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m24 24h-24v-24h18.4v2.4h-16v19.2h20v-8.8h2.4v11.2zm-19.52-12.42 1.807-1.807 5.422 5.422 13.68-13.68 1.811 1.803-15.491 15.491z" />
                        </svg>
                        <p className="select-none text-blue-300 text-xs">Keep me signed in</p>
                      </>
                    ) : (
                      <>
                        <svg
                          fill="white"
                          viewBox="0 -0.5 25 25"
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m24 24h-24v-24h24.8v24zm-1.6-2.4v-19.2h-20v19.2z" />
                        </svg>
                        <p className="select-none text-xs">Keep me signed in</p>
                      </>
                    )}
                  </label>
                  <input
                    type="checkbox"
                    className="hidden"
                    id="keepID"
                    onChange={onkeepID}
                  />
                </div>
                <input
                  type="submit"
                  value="Sign in"
                  className="px-10 lg:py-5 py-3 bg-[#59c6f8] focus:outline-none rounded-md transition hover:bg-blue-400 text-lg"
                />
                {end ? (
                  <p className="text-sm text-red-400">
                    Invalid Email or Password.
                  </p>
                ) : null}
                <div className="relative mt-8">
                  <div className="absolute w-full border-t border-gray-500" />
                  <div className="relative -top-3 text-center ">
                    <span className="bg-black px-5 text-sm text-gray-500">
                      No Account?
                      <Link
                        href="/signup"
                        className="ml-3 hover:text-white transition font-semibold text-base"
                      >
                        Sign Up
                      </Link>
                    </span>
                  </div>
                </div>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
}
