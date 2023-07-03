import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormValues {
  email: string;
  password: string;
  confirm_password: string;
}

export default function Signup() {
  const [end, set_end] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
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
  return (
    <>
      <Head>
        <title>Surroundio | Sign Up</title>
      </Head>
      <div className="bg-black pt-44 pb-10 lg:px-24 px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <h1 className="text-white lg:text-6xl text-3xl mt-16 text-center">
            Sign Up
          </h1>
          <div className="mt-16">
            <form onSubmit={handleSubmit(onVaild, onInValid)}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-14 lg:w-[50rem] mx-auto flex flex-col lg:px-32 gap-5 text-white"
              >
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Please write down your email.",
                    validate: {
                        must: (value) => value.includes("@") || "Email must have '@'"
                    }
                  })}
                  autoComplete="off"
                  className="px-10 lg:py-5 py-3 focus:outline-none focus:bg-[rgba(100,100,100,0.4)] rounded-md bg-[rgba(50,50,50,0.4)] transition lg:text-lg"
                />
                {errors.email ? <p className="text-xs text-red-300">{errors.email.message}</p> : null}
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Please write down your password.",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 chars long.",
                    },
                    validate: {
                        textCheck: (value) => !value.includes(">" || "<" || "?" || "/") || "( < , > , ? , / ) are not allowed."
                    }
                  })}
                  autoComplete="off"
                  className="px-10 lg:py-5 py-3 focus:outline-none focus:bg-[rgba(100,100,100,0.4)] rounded-md bg-[rgba(50,50,50,0.4)] transition lg:text-lg"
                />
                {errors.password ? <p className="text-xs text-red-300">{errors.password.message}</p> : null}
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirm_password", {
                    required: "Please write down your password.",
                    validate: {
                      pwCheck: (value) =>
                        value === watch("password") ||
                        "Password does not match.",
                    },
                  })}
                  className="px-10 lg:py-5 py-3 focus:outline-none focus:bg-[rgba(100,100,100,0.4)] rounded-md bg-[rgba(50,50,50,0.4)] transition lg:text-lg"
                  autoComplete="off"
                />
                {errors.confirm_password ? (
                  <p className="text-xs text-red-300">{errors.confirm_password.message}</p>
                ) : null}
                <input
                  type="submit"
                  value="Sign Up"
                  className="px-10 lg:py-5 py-3 bg-[#59c6f8] focus:outline-none rounded-md transition hover:bg-blue-400 text-lg"
                />
                {end ? 
                <p className="text-sm text-blue-300">Success to add new Account! Go to Login page.</p>
                : null }
                <div className="relative mt-8">
                  <div className="absolute w-full border-t border-gray-500" />
                  <div className="relative -top-3 text-center ">
                    <span className="bg-black px-5 text-sm text-gray-500">
                      Go back to
                      <Link
                        href="/login"
                        className="ml-3 hover:text-white transition font-semibold text-base"
                      >
                        Login
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
