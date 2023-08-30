//import axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues{
  notice_title: string;
  img_file: string;
}


export default function Noticeform() {

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


  /*const handleSubmit = async () => {
    if (!imgFile) return;
    const formData = new FormData();
    formData.append("myImage", imgFile);
    const body = { notice_title, imgFile: imgFile.name }
    alert("신청서가 등록되었습니다.");
    try {
      //데이터베이스 백엔드
      const DBResponse = await fetch("/api/notice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      //.then(await axios.post("/api/image", formData)); //이미지 업로드 백엔드
      if (DBResponse.status !== 200) {
        console.log("something went wrong");
        //set an error banner here
      }
      
    } catch (error) {
      console.log("there was an error submitting", error);
    }
  }*/
  const onValid = async (data: any) => {
    const body = { notice_title: data.notice_title, imgFile: data.img_file[0].name }
    alert(body);
    try { //데이터베이스 백엔드
    const DBResponse = await fetch("/api/notice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
    //.then(await axios.post("/api/image", formData)); //이미지 업로드 백엔드
    if (DBResponse.status !== 200) {
      console.log("something went wrong");
      //set an error banner here
    }
    
  } catch (error) {
    console.log("there was an error submitting", error);
  }
  reset();
  }
  return (
    <div className="mt-24 flex justify-center items-center">
      <form onSubmit={handleSubmit(onValid)} method="POST" className="space-y-5">
        <div>
          <label>할일</label>
          <input
            type="text"
            className="py-3 px-5 rounded-lg shadow-md bg-slate-200 transition lg:text-base text-xs"
            autoComplete="off"
            {...register("notice_title", {
              required: "Please write down title.",
            })}
          />
           {errors.notice_title ? (
            <p className="text-xs mt-3 text-red-500">
              {errors.notice_title.message}
            </p>
          ) : null}
        </div>
        <div className="w-40 aspect-video flex items-center justify-center border-2 border-black">
          {selectImg ? <img src={selectImg} alt="" /> : <span>Select Img</span>}
        </div>
        <div >
          <label>파일</label>
            <input
            type="file" accept="image/*"
            className="py-3 px-5 rounded-lg shadow-md bg-slate-200 transition lg:text-base text-xs"
            autoComplete="off"
            {...register("img_file", {
              required: "Please upload image file.",
            })}
            onChange={
              ({ target }: any) => {
                const file = target.files[0];
                if(file) {set_selectImg(URL?.createObjectURL(file)); return false;}
              }
            }
          />
        </div>
        <input type="submit" className="bg-blue-300" value="Submit"/>
      </form>
    </div>
  )
}
/*

*/