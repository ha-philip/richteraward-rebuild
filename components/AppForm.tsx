import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { cls } from "./utils";

interface FormValues {
  firstName: string;
  lastName: string;
  birthday: string;
  school: string;
  ageProof: string;
  ageProofText: string;
  teamMember: string;
  section: string;
  ageCategory: string;
  email: string;
  phone: string;
  videoLink: string;
  depostisor: string;
  teacher: string;
  teacherEmail: string;
  performingPiece: string;
  performingDuration: string;
}

export default function AppForm() {
  const { locale } = useRouter();
  const [submitLoading, set_submitLoading] = useState<boolean>(false);
  const [submitPopup, set_submitPopup] = useState<boolean>(false);
  const [selectImg, set_selectImg] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "all",
  });

  const onVaild = async (data: any) => {
    set_submitLoading(true);
    const body = {
      firstName: data.firstName,
      lastName: data.lastName,
      birthday: data.birthday,
      school: data.school,
      ageProof: Math.floor(Date.now() / 3600000).toString() + "_" + selectImg,
      teamMember: data.teamMember,
      section: data.section,
      ageCategory: data.ageCategory,
      email: data.email,
      phone: data.phone,
      videoLink: data.videoLink,
      depostisor: data.depostisor,
      teacher: data.teacher,
      teacherEmail: data.teacherEmail,
      performingPiece: data.performingPiece,
      performingDuration: data.performingDuration,
    };
    try {
      const response = await fetch("/api/appForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then(await axios.post("/api/image", data.ageProof)); //이미지 업로드 백엔드
      if (response.status !== 200) {
        console.log("something went wrong");
        //set an error banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log("there was an error submitting", error);
    }
    set_submitLoading(false);
    set_submitPopup(true);
    reset();
    set_selectImg("");
  };
  const popupClose = () => set_submitPopup(false);
  return (
    <>
      <h2 className="bg-black text-white p-3 text-center tracking-widest lg:text-2xl text-base">
        {locale === "en" ? "APPLICATION" : "참가 신청서"}
      </h2>
      <form onSubmit={handleSubmit(onVaild)}>
        <div className="bg-[whitesmoke] lg:h-[38rem] h-[36rem] flex flex-col justify-start lg:p-10 p-3 overflow-y-scroll">
          <h2 className="text-red-800 font-bold text-sm">
            {locale === "en" ? "* Required Field" : "* 필수 입력 항목"}
          </h2>

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en" ? "First Name" : "이름"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-sm text-xs"
            autoComplete="off"
            {...register("firstName", {
              required: "Please write down your name.",
              validate: {
                textCheck: (value) =>
                  !value.includes(">" || "<" || "?" || "/" || "@" || "=") ||
                  "Cannot special text.",
              },
            })}
          />
          {errors.firstName ? (
            <p className="text-xs mt-3 text-red-500">
              {errors.firstName.message}
            </p>
          ) : null}

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en" ? "Last Name" : "성"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-sm text-xs"
            autoComplete="off"
            {...register("lastName", {
              required: "Please write down your surname.",
              validate: {
                textCheck: (value) =>
                  !value.includes(">" || "<" || "?" || "/" || "@" || "=") ||
                  "Cannot special text.",
              },
            })}
          />
          {errors.lastName ? (
            <p className="text-xs mt-3 text-red-500">
              {errors.lastName.message}
            </p>
          ) : null}

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en" ? "Birthday" : "생년월일"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-sm text-xs"
            autoComplete="off"
            {...register("birthday", {
              required: "Please write down your birthday.",
            })}
          />
          {errors.birthday ? (
            <p className="text-xs mt-3 text-red-500">
              {errors.birthday.message}
            </p>
          ) : null}

          <span className="lg:text-sm text-xs mt-10 mb-2 tracking-tight">
            {locale === "en" ? "Current School" : "소속 학교"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-sm text-xs"
            autoComplete="off"
            {...register("school")}
          />
          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en"
              ? "Attachment for the proof your age"
              : "나이 증명서 첨부"}
          </span>
          <div className="flex justify-start items-center lg:gap-5 gap-2">
            <input
              type="text"
              autoComplete="off"
              readOnly
              className={cls(
                "py-3 px-5 rounded-lg shadow-md bg-[#f0f0f0] transition lg:text-sm text-xs tracking-tighter w-3/4",
                errors.ageProof ? "text-red-500" : "text-gray-500"
              )}
              {...register("ageProofText", {
                required: true,
              })}
              value={selectImg === "" ? "Upload your Image file." : selectImg}
            />
            <label
              htmlFor="uploadImg"
              className="cursor-pointer w-1/4 text-center lg:text-sm text-xs bg-red-800 py-3 rounded-lg text-white tracking-wider hover:bg-black transition"
            >
              {locale === "en" ? "File" : "파일"}
            </label>
            <input
              type="file"
              accept="image/*"
              id="uploadImg"
              className="opacity-0 w-[0.1px]"
              {...register("ageProof", {
                required: true,
              })}
              onChange={({ target }: any) => {
                const file = target.files[0].name;
                if (file) {
                  set_selectImg(file);
                  return false;
                }
              }}
            />
          </div>
          <p className="lg:text-xs text-[0.5rem] mt-2 tracking-tight">
            ( Please scan the first page of your passport and upload it here )
          </p>
          <span className="lg:text-sm text-xs mt-10 mb-2 tracking-tight">
            {locale === "en"
              ? "Team Member Personal Information"
              : "팀원 인적사항"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-sm text-xs"
            autoComplete="off"
            {...register("teamMember")}
          />

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en" ? "Section" : "경연부문"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-sm text-xs"
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

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en" ? "Age Category" : "나이별 부문"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-sm text-xs"
            autoComplete="off"
            {...register("ageCategory", {
              required: "Please choose your category.",
            })}
          />
          {errors.ageCategory ? (
            <p className="text-xs mt-3 text-red-500">
              {errors.ageCategory.message}
            </p>
          ) : null}

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en" ? "E-mail" : "이메일"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-sm text-xs"
            autoComplete="off"
            {...register("email", {
              required: "Please write down your Email.",
              validate: {
                must: (value) => value.includes("@") || "Email must have '@'",
              },
            })}
          />
          {errors.email ? (
            <p className="text-xs mt-3 text-red-500">{errors.email.message}</p>
          ) : null}

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en"
              ? "Phone-number ( with the Country Code )"
              : "전화번호"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-sm text-xs"
            autoComplete="off"
            {...register("phone", {
              required: "Please write down your phone number.",
            })}
          />
          {errors.phone ? (
            <p className="text-xs mt-3 text-red-500">{errors.phone.message}</p>
          ) : null}

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en" ? "Video link of your performance" : "비디오 링크"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-sm text-xs"
            autoComplete="off"
            {...register("videoLink", {
              required: "Please write down your link.",
            })}
          />
          {errors.videoLink ? (
            <p className="text-xs mt-3 text-red-500">
              {errors.videoLink.message}
            </p>
          ) : null}

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en"
              ? "Name of the depositor ( Application Fee )"
              : "입금자명"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-sm text-xs"
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

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en" ? "Current Teacher" : "사사 (현재)"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-sm text-xs"
            autoComplete="off"
            {...register("teacher", {
              required: "Please write down your name of current teacher.",
            })}
          />
          {errors.teacher ? (
            <p className="text-xs mt-3 text-red-500">
              {errors.teacher.message}
            </p>
          ) : null}

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en"
              ? "E-mail address of the Current Teacher"
              : "사사 이메일"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-sm text-xs"
            autoComplete="off"
            {...register("teacherEmail", {
              required: "Please write down teacher_email.",
              validate: {
                must: (value) => value.includes("@") || "Email must have '@'",
              },
            })}
          />
          {errors.teacherEmail ? (
            <p className="text-xs mt-3 text-red-500">
              {errors.teacherEmail.message}
            </p>
          ) : null}

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en" ? "Performing Piece" : "연주곡목 / 연주길이"}
          </span>
          <div className="flex gap-5">
            <input
              type="text"
              className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-sm text-xs w-1/2"
              placeholder={locale === "en" ? "Piece" : "연주곡목"}
              autoComplete="off"
              {...register("performingPiece", {
                required: "Please write down your performing piece.",
              })}
            />
            <input
              type="text"
              className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-sm text-xs w-1/2"
              placeholder={
                locale === "en"
                  ? "Duration ( mm : ss )"
                  : "연주길이 ( mm : ss )"
              }
              autoComplete="off"
              {...register("performingDuration", {
                required: "Please write down your performing duration.",
              })}
            />
          </div>
          {errors.performingPiece ? (
            errors.performingDuration ? (
              <p className="text-xs mt-3 text-red-500">
                {errors.performingDuration.message}
              </p>
            ) : (
              <p className="text-xs mt-3 text-red-500">
                {errors.performingPiece.message}
              </p>
            )
          ) : errors.performingDuration ? (
            <p className="text-xs mt-3 text-red-500">
              {errors.performingDuration.message}
            </p>
          ) : null}
          <input
            type="submit"
            disabled={submitLoading}
            className={cls(
              "mt-24 mb-14 mx-auto text-white font-thin tracking-tight lg:text-2xl text-lg lg:w-52 w-36 lg:py-5 py-3 hover:bg-black transition rounded-xl",
              submitLoading ? "bg-black" : "bg-red-800"
            )}
            value={
              submitLoading
                ? locale === "en"
                  ? "Loading..."
                  : "로딩중..."
                : locale === "en"
                ? "SUBMIT"
                : "제출"
            }
          />
        </div>
      </form>
      {submitPopup ? (
        <>
          <motion.div
            className="absolute w-full h-full bg-[rgba(0,0,0,0.6)] top-0 z-40 transtion flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
          <motion.div
          className="fixed top-[40%] z-40 w- bg-[whitesmoke] lg:px-24 px-16 py-10 flex flex-col justify-center items-center gap-10 rounded-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <h1 className="text-gray-800 font-thin tracking-wider">{locale === "en" ? "Application has been completed.": "신청이 완료되었습니다."}</h1>
            <button 
            className="text-lg text-red-800 hover:text-black transition tracking-tighter"
            onClick={popupClose}
            >
              {locale === "en" ? "Check": "확인"}
            </button>
          </motion.div>
          </motion.div>
        </>
      ) : null}
    </>
  );
}
