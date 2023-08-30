//import axios from "axios";
import { useEffect, useState } from "react";

export default function Noticeform() {
  const [notice_title, setTitle] = useState("");
  const [selectImg, set_selectImg] = useState("");
  const [imgFile, set_imgFile] = useState<File>();


  useEffect(() => { }, [notice_title, imgFile]);

  const handleSubmit = async () => {
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
  }
  return (
    <div className="mt-24 flex justify-center items-center">
      <form onSubmit={handleSubmit} method="POST">
        <div>
          <label>할일</label>
          <input type="text" name="notice_title" id="notice_title" className="border border-red-500" onChange={(t) => setTitle(t.target.value)} />
        </div>
        <div className="w-40 aspect-video flex items-center justify-center border-2 border-black">
          {selectImg ? <img src={selectImg} alt="" /> : <span>Select Img</span>}
        </div>
        <div >
          <label>파일</label>
          <input type="file" accept="image/*" name="notice_date" id="notice_date"
            className="border border-red-500"
            onChange={
              ({ target }: any) => {
                const file = target.files[0];
                set_selectImg(URL.createObjectURL(file));
                set_imgFile(file);
              }
            } />
        </div>
        <button type="submit" className="bg-blue-300">Submit</button>
      </form>
    </div>
  )
}
/*

*/