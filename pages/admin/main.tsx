

interface IWriteForms {
    posts: {
        id: string;
        firstName: string;
        lastName: string;
        ageProof: string;
    }[]
}

export default function AdminMain({ posts }: IWriteForms) {
    return (
        <>
            <div className="bg-[whitesmoke] flex justify-center items-center">
                <div className="lg:w-[70vw] w-90vw my-72 bg-white shadow-xl">
                    <div className="flex justify-between items-center border-b border-black lg:gap-10 lg:px-10 px-3 py-5">
                        <span className="w-[30vw] text-center">이름</span>
                        <span className="w-[30vw] text-center">성</span>
                        <span className="w-[40vw] text-center">증명사진</span>
                    </div>
                    {posts?.map((data) => (
                        <div key={data.id} className="flex justify-between items-center lg:gap-10 lg:px-10 px-3 py-10">
                            <div className="w-[30vw] text-center">{data.firstName}</div>
                            <div className="w-[30vw] text-center">{data.lastName}</div>
                            <div className="w-[40vw] flex justify-center items-center">
                                <img src={`/images/${data.ageProof}`} alt={data.ageProof}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

