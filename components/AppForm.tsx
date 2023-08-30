import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  firstName: string;
  lastName: string;
  birthday: string;
  school: string;
  ageProof: string;
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
  const [end, set_end] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "all",
  });

  const onVaild: SubmitHandler<FormValues> = async (data) => {
    set_end(true);   
    alert("신청서가 등록되었습니다.");
    try {
      const response = await fetch("/api/appForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.status !== 200) {
        console.log("something went wrong");
        //set an error banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log("there was an error submitting", error);
    }
    reset();
  };
  const onInValid = (err: any) => {
    set_end(false);
  };
  return (
    <>
      <h2 className="bg-black text-white p-3 text-center tracking-widest lg:text-2xl text-base">
        {locale === "en" ? "APPLICATION" : "참가 신청서"}
      </h2>
      <form onSubmit={handleSubmit(onVaild, onInValid)}>
        <div className="bg-[whitesmoke] lg:h-[38rem] h-[36rem] flex flex-col justify-start lg:p-10 p-3 overflow-y-scroll">
          <h2 className="text-red-800 font-bold text-sm">* Required Field</h2>

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
          {locale === "en" ? "First Name" : "이름"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
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
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
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
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
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
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
            autoComplete="off"
            {...register("school")}
          />

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en" ? "Attachment for the proof your age" : "나이 증명서 첨부"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
            autoComplete="off"
            {...register("ageProof", {
              required: "Please upload your file.",
            })}
          />
          <p className="lg:text-xs text-[0.5rem] mt-2 tracking-tight">
            ( Please scan the first page of your passport and upload it here )
          </p>
          {errors.ageProof ? (
            <p className="text-xs mt-3 text-red-500">
              {errors.ageProof.message}
            </p>
          ) : null}

          <span className="lg:text-sm text-xs mt-10 mb-2 tracking-tight">
            {locale === "en" ? "Team Member Personal Information" : "팀원 인적사항"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
            autoComplete="off"
            {...register("teamMember")}
          />

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en" ? "Section" : "경연부문"}
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

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en" ? "Age Category" : "나이별 부문"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
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
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
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
            {locale === "en" ? "Phone-number ( with the Country Code )" : "전화번호"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
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
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
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
            {locale === "en" ? "Name of the depositor ( Application Fee )" : "입금자명"}
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

          <span className="lg:text-sm text-xs mt-10 mb-2 text-red-800 tracking-tight">
            {locale === "en" ? "Current Teacher" : "사사 (현재)"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
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
            {locale === "en" ? "E-mail address of the Current Teacher" : "사사 이메일"}
          </span>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
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
              className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs w-1/2"
              placeholder={locale === "en" ? "Piece" : "연주곡목"}
              autoComplete="off"
              {...register("performingPiece", {
                required:
                  "Please write down your performing piece.",
              })}
            />
            <input
              type="text"
              className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs w-1/2"
              placeholder={locale === "en" ? "Duration ( mm : ss )" : "연주길이 ( mm : ss )"}
              autoComplete="off"
              {...register("performingDuration", {
                required:
                  "Please write down your performing duration.",
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
            className="mt-24 mb-14 mx-auto bg-red-800 text-white font-thin tracking-tight lg:text-2xl text-lg lg:w-52 w-36 lg:py-5 py-3 hover:bg-black transition rounded-xl"
            value={locale === "en" ? "SUBMIT" : "제출"}
          />
        </div>
      </form>
    </>
  );
}
