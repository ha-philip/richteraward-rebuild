import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormValues{
  noticeTitle: string;
  noticeText: string;
}


export default function AddNotice() {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "all",
  });

  const onValid = async (data: any) => {
    const body = { noticeTitle: data.noticeTitle, noticeText: data.noticeText }
    try { //데이터베이스 백엔드
    const DBResponse = await fetch("/api/notice", {
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
  reset();
  }
  return (
    <div className="flex justify-center items-center bg-[whitesmoke]">
      <form onSubmit={handleSubmit(onValid)} className="space-y-5">
        <div>
          <label>제목</label>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md bg-slate-200 transition lg:text-base text-xs"
            autoComplete="off"
            {...register("noticeTitle", {
              required: "Please write down title.",
            })}
          />
           {errors.noticeTitle ? (
            <p className="text-xs mt-3 text-red-500">
              {errors.noticeTitle.message}
            </p>
          ) : null}
        </div>
        <div>
          <label>내용</label>
          <textarea
            className="py-3 px-5 rounded-lg shadow-md bg-slate-200 transition lg:text-base text-xs"
            autoComplete="off"
            {...register("noticeText", {
              required: "Please write down title.",
            })}
          />
           {errors.noticeText ? (
            <p className="text-xs mt-3 text-red-500">
              {errors.noticeText.message}
            </p>
          ) : null}
        </div>
        <input type="submit" className="bg-blue-300" value="Submit"/>
      </form>
    </div>
  )
}