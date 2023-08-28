import { useEffect, useState } from "react";

export default function Noticeform() {
    const [notice_title, setTitle] = useState("");
    const [notice_date, setDate] = useState("");
    useEffect(() => {}, [notice_title, notice_date]);

    const handleSubmit = async (e: any) => {
      e.preventDefault();
      const body = { notice_title, notice_date }
      try {
        const response = await fetch('/api/notice', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        })
        if (response.status !== 200) {
          console.log('something went wrong');
          //set an error banner here
        }
        //check response, if success is false, dont take them to success page
      } catch (error) {
        console.log('there was an error submitting', error);
      }
      }
  return (
     <div className="mt-24 flex justify-center items-center">
        <form onSubmit={(e) => handleSubmit(e)} method="POST">
            <div>
                <label>할일</label>
                <input type="text" name="notice_title" id="notice_title" className="border border-red-500" onChange={(t) => setTitle(t.target.value)}/>
            </div>
            <div >
                <label>날짜</label>
                <input type="text" name="notice_date" id="notice_date" className="border border-red-500" onChange={(d) => setDate(d.target.value)}/>
            </div>
            <button type="submit" className="bg-blue-300">Submit</button>
        </form>
    </div>
  )
}
/*

*/