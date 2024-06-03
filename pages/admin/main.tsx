import Link from "next/link";
import { useEffect, useState } from "react";
import { cls } from "@/components/utils";
import { motion } from "framer-motion";
import AddNotice from "./AddNotice";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { getRegulation } from "@/server/firebaseCRUD";

export default function AdminMain({ noticePost, onNotice }: IAdminPosts) {
  const [formState, set_formState] = useState<"참가자" | "공지">("참가자");
  const [regulationForm, setRegulationForm] = useState<IRegulation[]>([]);
  const [addNotice, set_addNotice] = useState<boolean>(false);
  const [selectedNotice, set_selectedNotice] = useState<null | number>(null);
  const [updateText, set_updateText] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<AdminFormValues>({
    mode: "all",
  });
  const [loading, set_loading] = useState<boolean>(false);
  const history = useRouter();

  const onNoticeClicked = (noticeId: number) => {
    history.push(`/admin/?id=${noticeId}`);
    set_selectedNotice(noticeId);
  };
  const selectedNoticeClose = () => {
    set_selectedNotice(null);
    set_updateText(false);
    reset();
    history.push(`/admin`);
  };
  useEffect(() => {}, [onNotice]);

  const getUpdateText = () => {
    let yes = confirm("본문을 수정하시겠습니까?");
    if (yes) {
      set_updateText(true);
    } else {
      return false;
    }
  };

  const onValid = async (data: any) => {
    set_loading(true);
    const body = { id: Number(data.id), noticeText: data.updateText };
    try {
      //데이터베이스 백엔드
      const DBResponse = await fetch("/api/noticeUpdate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (DBResponse.status !== 200) {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log("there was an error submitting", error);
    }
    alert("공지가 수정되었습니다.");
    selectedNoticeClose();
    set_loading(false);
    history.replace("/admin");
  };

  const noticeDelete = async (id: number) => {
    set_loading(true);
    const body = { id: id };
    try {
      //데이터베이스 백엔드
      const DBResponse = await fetch("/api/noticeDelete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (DBResponse.status !== 200) {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log("there was an error submitting", error);
    }
    alert("공지가 삭제되었습니다.");
    selectedNoticeClose();
    set_loading(false);
    history.replace("/admin");
  };

  useEffect(() => {
    getRegulation().then((response) => setRegulationForm(response));
  }, []);
  return (
    <>
      <div className="bg-[whitesmoke] flex flex-col justify-center items-center py-[10rem]">
        <div className="flex justify-between items-center w-full px-10 mb-10 text-sm">
          <div className="flex justify-start items-center gap-10">
            <span className="cursor-pointer  w-24">
              <h2
                onClick={() => set_formState("참가자")}
                className={cls(
                  "text-center mb-1 transition",
                  formState === "참가자"
                    ? "font-bold text-red-800 scale-[1.02]"
                    : "font-normal mb-1"
                )}
              >
                참가자
              </h2>
              {formState === "참가자" && (
                <motion.hr
                  layoutId="MenuChange"
                  className="border border-red-800"
                />
              )}
            </span>
            <span className="cursor-pointer w-24">
              <h2
                onClick={() => set_formState("공지")}
                className={cls(
                  "text-center mb-1 transition",
                  formState === "공지"
                    ? "font-bold text-red-800 scale-[1.02]"
                    : "font-normal mb-1"
                )}
              >
                공지
              </h2>
              {formState === "공지" && (
                <motion.hr
                  layoutId="MenuChange"
                  className="border border-red-800"
                />
              )}
            </span>
          </div>
          <button
            onClick={() => {
              set_addNotice(true);
            }}
            className="px-3 py-1 bg-red-800 text-white hover:bg-black transition"
          >
            공지작성
          </button>
        </div>
        {formState === "참가자" ? (
          <div
            className="grid shadow-xl text-xs overflow-x-scroll max-w-[95vw] bg-white gap-y-5 text-center pt-5 place-items-center"
            style={{
              gridTemplateColumns:
                "100px 100px 100px 100px 250px 200px 150px 400px 100px 150px 150px 130px 130px 150px 100px",
            }}
          >
            <span className="font-bold">신청일</span>
            <span className="font-bold">이름</span>
            <span className="font-bold">성</span>
            <span className="font-bold">생년월일</span>
            <span className="font-bold">경연부문</span>
            <span className="font-bold">나이부문</span>
            <span className="font-bold">이메일</span>
            <span className="font-bold">비디오링크</span>
            <span className="font-bold">전화번호</span>
            <span className="font-bold">팀 인적사항</span>
            <span className="font-bold">학교</span>
            <span className="font-bold">입금자명</span>
            <span className="font-bold">지도자</span>
            <span className="font-bold">지도자 이메일</span>
            <span className="font-bold">증명사진</span>
            <hr
              style={{ gridColumn: "span 15 / span 15" }}
              className="border-[0.8px] border-gray-400 w-full"
            />
            {regulationForm.length !== 0
              ? regulationForm.map((data, number) => (
                  <>
                    <span key={number}>2024-02-02</span>
                    <span>{data.regInfo.firstName}</span>
                    <span>{data.regInfo.lastName}</span>
                    <span>{data.regInfo.birthday}</span>
                    <span>{data.regInfo.section}</span>
                    <span>{data.regInfo.ageCategory}</span>
                    <span>{data.regInfo.email}</span>
                    <span>
                      {data.regInfo.videoLink.map((d, n) => (
                        <Link
                          href={d}
                          key={n}
                          className="bg-red-800 mx-1 px-3 py-1 rounded-md text-white hover:bg-red-600 transition"
                        >
                          링크{n + 1}
                        </Link>
                      ))}
                    </span>
                    <span>{data.regInfo.phone}</span>
                    <span>{data.regInfo.teamMember}</span>
                    <span>{data.regInfo.school}</span>
                    <span>{data.regInfo.depostisor}</span>
                    <span>{data.regInfo.teacher}</span>
                    <span>{data.regInfo.teacherEmail}</span>
                    <Link
                      href={data.regInfo.ageProof}
                      target="_blank"
                      className="bg-red-800 mx-1 px-3 py-1 rounded-md text-white hover:bg-red-600 transition"
                    >
                      이미지보기
                    </Link>
                    <hr
                      style={{ gridColumn: "span 15 / span 15" }}
                      className="border-[0.3px] border-gray-200 w-full"
                    />
                  </>
                ))
              : "loading"}
          </div>
        ) : (
          <>
            <div className="bg-white shadow-2xl flex flex-col w-[95vw]">
              {noticePost?.map((data) => (
                <>
                  <div
                    key={data.id}
                    className="hover:bg-slate-100 hover:text-slate-600 transition flex justify-between px-12 py-5 cursor-pointer"
                    onClick={() => onNoticeClicked(data.id)}
                  >
                    <span className="tracking-tight text-xs">
                      {data.noticeTitle}
                    </span>
                    <span className="tracking-tight text-xs">
                      {data.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </>
              ))}
            </div>
          </>
        )}
      </div>
      {addNotice ? (
        <>
          <motion.div
            className="fixed w-full h-full bg-[rgba(0,0,0,0.6)] top-0 z-30 transtion flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => history.push("/admin")}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="z-40 w-[70vw] flex flex-col mt-10"
            >
              <h1
                onClick={() => set_addNotice(false)}
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
              <h2 className="bg-red-800 p-3 text-center text-sm tracking-widest text-white font-thin">
                공지 작성
              </h2>
              <AddNotice />
            </motion.div>
          </motion.div>
        </>
      ) : null}
      {selectedNotice === null ? null : (
        <motion.div
          className="fixed w-full h-full bg-[rgba(0,0,0,0.6)] top-0 z-30 transtion flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1
            onClick={selectedNoticeClose}
            className="w-[60vw] flex justify-end lg:mb-3 mb-1 cursor-pointer"
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
          <form onSubmit={handleSubmit(onValid)}>
            <div className="bg-black text-white w-[60vw] pt-10 border border-gray-500">
              <h1 className="pb-5 mx-5 text-2xl font-thin tracking-wider border-b border-gray-500">
                {onNotice[0].noticeTitle}
                <p className="text-xs mt-3 text-gray-300 tracking-normal">
                  {onNotice[0].updatedAt.substring(0, 10)}
                </p>
              </h1>
              <div className="h-[28rem]">
                {updateText ? (
                  <>
                    <input
                      type="hidden"
                      value={onNotice[0].id}
                      {...register("id")}
                    />
                    <textarea
                      placeholder="본문"
                      className="p-5 font-thin text-sm overflow-y-scroll text-black resize-none w-full h-full"
                      {...register("updateText", {
                        required: true,
                      })}
                    />
                  </>
                ) : (
                  <>
                    <p
                      onClick={getUpdateText}
                      className="p-5 font-thin text-sm overflow-y-scroll whitespace-pre-wrap hover:bg-gray-900 transition cursor-pointer w-full h-full"
                    >
                      {onNotice[0].formatnoticeText}
                    </p>
                  </>
                )}
              </div>
              <div className="flex items-center justify-between p-3 border-t border-gray-500 text-sm font-light">
                <input
                  type="submit"
                  className={cls(
                    "px-6 py-2 transition",
                    updateText || !loading
                      ? "bg-blue-400 hover:bg-blue-800"
                      : "bg-blue-800 text-gray-500"
                  )}
                  disabled={!updateText || loading}
                  value="수정"
                />

                <input
                  type="button"
                  className={cls(
                    "px-6 py-2 transition",
                    !loading
                      ? "bg-red-400 hover:bg-red-800"
                      : "bg-red-800 text-gray-500"
                  )}
                  onClick={() => noticeDelete(onNotice[0].id)}
                  disabled={loading}
                  value="삭제"
                />
              </div>
            </div>
          </form>
        </motion.div>
      )}
    </>
  );
}
