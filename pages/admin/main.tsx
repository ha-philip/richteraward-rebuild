

interface IWriteForms {
    posts: {
        id: string,
        site: string,
        firstName: string,
        lastName: string,
        birthday: string,
        section: string,
        ageCategory: string,
        email: string,
        videoLink: string,
        ageProof: string
    }[]
}

export default function AdminMain({ posts }: IWriteForms) {
    return (
        <>
            <div className="bg-[whitesmoke] flex justify-center items-center">
                <div className="grid w-[95vw] my-72 bg-white shadow-xl text-xs grid-cols-10 gap-4 overflow-x-scroll py-5">
                        <span className="text-center">순번</span>
                        <span className="text-center">신청사이트</span>
                        <span className="text-center">이름</span>
                        <span className="text-center">성</span>
                        <span className="text-center">생년월일</span>
                        <span className="text-center">경연부문</span>
                        <span className="text-center">나이부문</span>
                        <span className="text-center">이메일</span>
                        <span className="text-center">비디오링크</span>
                        <span className="w-[24rem] text-center">증명사진</span>
                    {posts?.map((data) => (
                        <>
                            <div className="text-center" key={data.id}>{data.id}</div>
                            <div className="text-center">{data.site}</div>
                            <div className="text-center">{data.firstName}</div>
                            <div className="text-center">{data.lastName}</div>
                            <div className="text-center">{data.birthday}</div>
                            <div className="text-center">{data.section}</div>
                            <div className="text-center">{data.ageCategory}</div>
                            <div className="text-center">{data.email}</div>
                            <div className="text-center">{data.videoLink}</div>
                            <div className="w-[24rem] flex justify-center items-center">
                                <img src={`/images/${data.ageProof}`} alt={data.ageProof}/>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

