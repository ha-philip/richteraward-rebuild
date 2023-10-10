import { useRouter } from "next/router";
import Noticeform from "./Noticeform";

interface INoticeForms {
    noticePost: {
      id:string;
      noticeTitle:string;
      noticeText:string;
      createdAt:any;
      updatedAt:any;
    }[]
  }

export default function Notice({noticePost}: INoticeForms) {
    const { locale } = useRouter();
    return (
        <>
            <div className="lg:px-48 px-5 bg-[whitesmoke] lg:pt-32 py-14" id="notice">
                <div className="flex flex-col justify-center items-center space-y-10">
                    <span className="lg:text-4xl text-lg font-thin tracking-widest border-b border-red-800 p-3">
                        {locale === "en" ? "Notice" : "공지사항"}
                    </span>
                    <div className="bg-white shadow-2xl flex flex-col w-full">
                    {noticePost?.map((data) => (
                        <div className="hover:bg-slate-100 hover:text-slate-600 transition flex justify-between lg:px-12 px-5 py-5 cursor-pointer" key={data.id}>
                            <span className="tracking-tight lg:text-sm text-xs">{data.noticeText}</span>
                            <span className="tracking-tight lg:text-sm text-xs">{data.createdAt}</span>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    );
}