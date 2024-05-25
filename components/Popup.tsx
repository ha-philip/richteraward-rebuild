import { useState } from "react";

export default function Popup({ noticePost }: INoticeForms) {
  const [getPopup, set_getPopup] = useState<boolean>(true);
  const current = Date.now();
  const a_month_of_milliSecond = 2592000000;
  const noticeDate: INoticePost[] = [];
  noticePost.map((data) => {
    if (
      current - a_month_of_milliSecond <= getDateTimeFormat(data.createdAt) &&
      getDateTimeFormat(data.createdAt) <= current
    ) {
      noticeDate.push(data);
    }
  });
  return (
    <>
      {getPopup && (
        <div className="bg-black fixed top-1/2 left-1/2 text-white lg:w-[60vw] w-[95vw] pt-10 border border-gray-500 z-20 -translate-x-1/2 -translate-y-1/2">
          <h1 className="pb-5 mx-5 lg:text-2xl text-xl font-thin tracking-wider border-b border-gray-500 relative">
            '{noticeDate[0].noticeTitle}'
            <p className="text-xs mt-3 text-gray-300 tracking-normal">
              {noticeDate[0].updatedAt.substring(0, 10)}
            </p>
            <button
              className="absolute -top-6 right-0"
              onClick={() => set_getPopup(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </h1>
          <p className="lg:h-[28rem] h-[18rem] p-5 font-thin text-sm overflow-y-scroll pb-5 whitespace-pre-wrap">
            {noticeDate[0].formatnoticeText}
          </p>
        </div>
      )}
    </>
  );
}

const getDateTimeFormat = (datetime: string) => {
  const milliiFormat = new Date(datetime.slice(0, 10));
  return milliiFormat.getTime();
};
