import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface FormValues {
  name: string;
  surname: string;
  birth: string;
  school: string;
  proof: string;
  team_member: string;
  section: string;
  age_category: string;
  my_email: string;
  phone: string;
  youtube_link: string;
  depostisor: string;
  teacher: string;
  teacher_email: string;
  performing_piece: string;
}

interface IregText {
  reg_title: string;
  reg_titleText_1: string;
  reg_titleText_2: string;
  prizes: string;
  section: string;
  repert: string;
  age: string;
  announce: string;
  awards: string;
  application: string;
  teacher: string;
  detail: string;
  prizes_1: string;
  prizes_2: string;
  section_1: string;
  section_2: string;
  section_3: string;
  section_4: string;
  section_5: string;
  section_6: string;
  repert_1: string;
  repert_2: string;
  repert_3: string;
  repert_4: string;
  repert_5: string;
  repert_6: string;
  age_1: string;
  age_2_1: string;
  age_2_2: string;
  age_3_1: string;
  age_3_2: string;
  age_4_1: string;
  age_4_2: string;
  age_5: string;
  age_6: string;
  announce_1: string;
  announce_2: string;
  announce_3: string;
  awards_1: string;
  awards_2: string;
  application_title: string;
  application_1: string;
  application_1_1: string;
  application_2: string;
  application_2_1: string;
  application_2_2: string;
  application_2_3: string;
  application_2_4: string;
  application_2_5: string;
  application_2_6: string;
  application_2_7: string;
  application_2_8: string;
  application_2_9: string;
  application_2_10: string;
  application_2_11: string;
  application_2_12: string;
  application_2_13: string;
  application_2_14: string;
  teacher_1: string;
  teacher_2: string;
  teacher_3: string;
  teacher_4: string;
  teacher_5: string;
  teacher_6: string;
  teacher_7: string;
  teacher_8: string;
  teacher_9: string;
  teacher_10: string;
  teacher_11: string;
  teacher_12: string;
  detail_1: string;
  detail_2: string;
  detail_3: string;
  detail_4: string;
  detail_5: string;
  detail_6: string;
  detail_7: string;
  detail_8: string;
  detail_9: string;
  detail_10: string;
  detail_11: string;
}

export default function Regulation() {
  const { locale } = useRouter();
  const [regText, set_regText] = useState<IregText>();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/locales/${locale}/regulation.json`);
      const json = await response.json();
      set_regText(json);
    })();
  }, [locale]);

  const [apply, set_apply] = useState(false);
  const getOverlay = () => set_apply(true);
  const closeOverlay = () => set_apply(false);

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
      <div
        className="lg:px-24 px-5 bg-[whitesmoke] lg:pt-32 py-14"
        id="regulation"
      >
        <div className="flex flex-col justify-center items-center space-y-10">
          <span className="lg:text-4xl text-lg font-thin tracking-widest border-b border-red-800 p-3">
            {regText?.reg_title}
          </span>
          <div className="flex flex-col justify-center items-center">
            <p className="lg:text-xl text-xs font-thin text-center">
              {regText?.reg_titleText_1}
              <br />
              {regText?.reg_titleText_2}
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-10">
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  {regText?.prizes}
                </h1>
                <p className="lg:text-3xl text-xl font-bold tracking-tighter text-yellow-600">
                  {regText?.prizes_1}
                </p>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  {regText?.prizes_2}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  {regText?.section}
                </h1>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  {regText?.section_1}
                  <br />
                  {regText?.section_2}
                  <br />
                  {regText?.section_3}
                  <br />
                  {regText?.section_4}
                  <br />
                  <span className="ml-5 lg:text-sm text-xs">
                    {regText?.section_5}
                  </span>
                  <br />
                  <span className="ml-5 lg:text-sm text-xs">
                    {regText?.section_6}
                  </span>
                </p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  {regText?.repert}
                </h1>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  {regText?.repert_1} <br />
                  <br />
                  {regText?.repert_2}
                  <br />
                  {regText?.repert_3}
                  <br />
                  {regText?.repert_4}
                  <br />
                  <br />
                  <span className="lg:text-sm text-xs">
                    {regText?.repert_5}
                  </span>
                  <br />
                  <span className="lg:text-sm text-xs">
                    {regText?.repert_6}
                  </span>
                </p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  {regText?.age}
                </h1>
                <p className="lg:text-sm text-xs tracking-tighter font-thin">
                  {regText?.age_1}
                </p>
                <div className="flex lg:flex-row flex-col justify-between items-center gap-3 font-thin lg:text-lg text-xs text-center">
                  <div>
                    <p>{regText?.age_2_1}</p>
                    <p>{regText?.age_2_2}</p>
                  </div>
                  <div>
                    <p>{regText?.age_3_1}</p>
                    <p>{regText?.age_3_2}</p>
                  </div>
                  <div>
                    <p>{regText?.age_4_1}</p>
                    <p>{regText?.age_4_2}</p>
                  </div>
                </div>
                <p className="lg:text-sm text-xs tracking-tighter font-thin">
                  {regText?.age_5}
                  <br />
                  {regText?.age_6}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  {regText?.announce}
                </h1>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  <span>{regText?.announce_1}</span>
                  <br />
                  <br />
                  {regText?.announce_2}
                  <br />
                  {regText?.announce_3}
                </p>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  {regText?.awards}
                </h1>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  {regText?.awards_1} <br />
                  <br />
                  {regText?.awards_2}
                </p>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  {regText?.application}
                </h1>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  {regText?.application_title}
                </p>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  {regText?.application_1}
                  <br />
                  <span className="lg:text-base text-xs">
                    {regText?.application_1_1}
                  </span>
                  <br />
                  <br />
                  {regText?.application_2}
                  <br />
                  <span className="lg:text-base text-xs">
                    {regText?.application_2_1}
                    <br />
                    {regText?.application_2_2}
                    <br />
                    {regText?.application_2_3}
                    <br />
                    {regText?.application_2_4}
                    <br />
                    <span className="lg:text-sm text-xs">
                      {regText?.application_2_5}
                      <br />
                      {regText?.application_2_6}
                      <br />
                      {regText?.application_2_7}
                      <br />
                      {regText?.application_2_8}
                      <br />
                    </span>
                    {regText?.application_2_9}
                    <br />
                    {regText?.application_2_10}
                    <br />
                    {regText?.application_2_11}
                    <br />
                    {regText?.application_2_12}
                    <br />
                    {regText?.application_2_13}
                    <br />
                    {regText?.application_2_14}
                  </span>
                </p>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  {regText?.teacher}
                </h1>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  {regText?.teacher_1}
                </p>
                <p className="lg:text-base text-xs tracking-tighter font-thin">
                  {regText?.teacher_2}
                  <br />
                  <br />
                  {regText?.teacher_3}
                  <br />
                  {regText?.teacher_4}
                  <br />
                  {regText?.teacher_5}
                </p>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  {regText?.teacher_6}
                </p>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  {regText?.teacher_7}
                  <br />
                  {regText?.teacher_8} <br />
                  {regText?.teacher_9}
                  <br />
                  {regText?.teacher_10}
                  <br />
                  {regText?.teacher_11}
                  <br />
                  {regText?.teacher_12}
                </p>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  {regText?.detail}
                </h1>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  {regText?.detail_1}
                  <br />
                  {regText?.detail_2}
                  <br />
                  {regText?.detail_3}
                  <br />
                  {regText?.detail_4}
                  <br />
                  {regText?.detail_5}
                  <br />
                  {regText?.detail_6}
                  <br />
                  {regText?.detail_7}
                  <br />
                  {regText?.detail_8}
                  <br />
                  {regText?.detail_9}
                  <br />
                  {regText?.detail_10}
                  <br />
                  {regText?.detail_11}
                </p>
              </div>
              <div className="lg:col-span-2 flex justify-center items-center">
                <button
                  onClick={getOverlay}
                  className="bg-red-800 text-white font-thin tracking-tight lg:text-2xl text-lg lg:w-72 w-52 py-5 hover:bg-black transition rounded-xl"
                >
                  {locale === "en" ? "APPLY" : "신청하기"}
                </button>
              </div>
            </div>
            {apply ? (
              <>
                <motion.div
                  className="fixed w-full h-full bg-[rgba(0,0,0,0.6)] top-0 z-30 transtion"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="fixed lg:top-8 top-5 z-30 lg:w-[65%] w-[90%]"
                >
                  <h1
                    onClick={closeOverlay}
                    className="flex justify-end lg:mb-3 mb-1 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </h1>
                  <h2 className="bg-black text-white p-3 text-center tracking-[0.5rem] lg:text-2xl text-base">
                    {locale === "en" ? "APPLICATION" : "참가 신청서"}
                  </h2>
                  <form onSubmit={handleSubmit(onVaild, onInValid)}>
                    <div className="bg-[whitesmoke] lg:h-[38rem] h-[36rem] flex flex-col justify-start lg:p-10 p-3 overflow-y-scroll">
                      <h2 className="text-red-800 font-bold text-sm">
                        * Required Field
                      </h2>

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Name
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("name", {
                          required: "Please write down your name.",
                          validate: {
                            textCheck: (value) =>
                              !value.includes(
                                ">" || "<" || "?" || "/" || "@" || "="
                              ) || "Cannot special text.",
                          },
                        })}
                      />
                      {errors.name ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.name.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Surname
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("surname", {
                          required: "Please write down your surname.",
                          validate: {
                            textCheck: (value) =>
                              !value.includes(
                                ">" || "<" || "?" || "/" || "@" || "="
                              ) || "Cannot special text.",
                          },
                        })}
                      />
                      {errors.surname ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.surname.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Date of Birth
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("birth", {
                          required: "Please write down your birthday.",
                        })}
                      />
                      {errors.birth ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.birth.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold tracking-tight">
                        Current School
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("school")}
                      />

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Attachment for the proof your age
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("proof", {
                          required: "Please upload your file.",
                        })}
                      />
                      <p className="lg:text-xs text-[0.5rem] mt-2 tracking-tight">
                        ( Please scan the first page of your passport and upload
                        it here )
                      </p>
                      {errors.proof ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.proof.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold tracking-tight">
                        Team Member Personal Information
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("team_member")}
                      />

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Section
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("section", {
                          required: "Please choose your section.",
                        })}
                      />
                      {errors.section ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.section.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Age Category
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("age_category", {
                          required: "Please choose your category.",
                        })}
                      />
                      {errors.age_category ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.age_category.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        E-mail Address of the participant
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("my_email", {
                          required: "Please write down your email.",
                          validate: {
                            must: (value) =>
                              value.includes("@") || "Email must have '@'",
                          },
                        })}
                      />
                      {errors.my_email ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.my_email.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Phone-number ( with the Country Code )
                      </span>
                      <input
                        type="number"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("phone", {
                          required: "Please write down your phone number.",
                        })}
                      />
                      {errors.phone ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.phone.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Youtube link of your performance
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("youtube_link", {
                          required: "Please write down your link.",
                        })}
                      />
                      {errors.youtube_link ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.youtube_link.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Name of the depositor ( Application Fee )
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("depostisor", {
                          required: "Please write down depostisor name.",
                        })}
                      />
                      {errors.depostisor ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.depostisor.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Current Teacher
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("teacher", {
                          required:
                            "Please write down your name of current teacher.",
                        })}
                      />
                      {errors.depostisor ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.depostisor.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        E-mail address of the Current Teacher
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("teacher_email", {
                          required: "Please write down teacher_email.",
                          validate: {
                            must: (value) =>
                              value.includes("@") || "Email must have '@'",
                          },
                        })}
                      />
                      {errors.teacher_email ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.teacher_email.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Performing Piece(s) / Duration
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("performing_piece", {
                          required:
                            "Please write down your performing piece or duration.",
                        })}
                      />
                      {errors.performing_piece ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.performing_piece.message}
                        </p>
                      ) : null}

                      <input
                        type="submit"
                        className="mt-24 mb-14 mx-auto bg-red-800 text-white font-thin tracking-tight lg:text-2xl text-lg lg:w-52 w-36 lg:py-5 py-3 hover:bg-black transition rounded-xl"
                        value="SUBMIT"
                      />
                    </div>
                  </form>
                </motion.div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
