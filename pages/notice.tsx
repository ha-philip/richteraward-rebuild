
export default function Notice() {
  return (
     <div className="mt-96">
        <form action="/api/posts" method="POST">
            <div>
                <label>할일</label>
                <input type="text" name="title" className="border border-red-500"/>
            </div>
            <div >
                <label>날짜</label>
                <input type="text" name="date" className="border border-red-500"/>
            </div>
            <button type="submit" className="bg-blue-300">Submit</button>
        </form>
    </div>
  )
}
