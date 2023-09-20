import Link from "next/link";
import styled from "styled-components";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 100px 150px 150px 150px 150px 300px 150px 300px 300px 150px 150px 150px 150px 150px 300px 150px;
    width: 95vw;
    margin: 18rem 0;
    overflow-x: scroll;
    background-color: white;
    text-align: center;
    :nth-child(-n+16) {
        border-bottom: 1px solid lightgray;
        padding-bottom: 1.25rem;
        font-weight: bold;
    }
`;

interface IWriteForms {
    posts: {
        id: string;
        site: string;
        firstName: string;
        lastName: string;
        birthday: string;
        section: string;
        ageCategory: string;
        email: string;
        videoLink: string;
        phone: string;
        teamMember: string;
        school: string;
        depostisor: string;
        teacher: string;
        teacherEmail: string;
        performingPiece: string;
        ageProof: string;
    }[]
}

export default function AdminMain({ posts }: IWriteForms) {
    return (
        <>
            <div className="bg-[whitesmoke] flex justify-center items-center">
                <GridContainer className="shadow-xl text-xs py-5">
                        <span>순번</span>
                        <span>신청사이트</span>
                        <span>이름</span>
                        <span>성</span>
                        <span>생년월일</span>
                        <span>경연부문</span>
                        <span>나이부문</span>
                        <span>이메일</span>
                        <span>비디오링크</span>
                        <span>전화번호</span>
                        <span>팀 인적사항</span>
                        <span>학교</span>
                        <span>입금자명</span>
                        <span>지도자</span>
                        <span>지도자 이메일</span>
                        <span>증명사진</span>
                    {posts?.map((data) => (
                        <>
                            <div className="text-center py-5" key={data.id}>{data.id}</div>
                            <div className="text-center py-5">{data.site}</div>
                            <div className="text-center py-5">{data.firstName}</div>
                            <div className="text-center py-5">{data.lastName}</div>
                            <div className="text-center py-5">{data.birthday}</div>
                            <div className="text-center py-5">{data.section}</div>
                            <div className="text-center py-5">{data.ageCategory}</div>
                            <div className="text-center py-5">{data.email}</div>
                            <Link href={data.videoLink} target="_blank" className="text-center py-5 hover:text-red-800">{data.videoLink}</Link>
                            <div className="text-center py-5">{data.phone}</div>
                            <div className="text-center py-5">{data.teamMember}</div>
                            <div className="text-center py-5">{data.school}</div>
                            <div className="text-center py-5">{data.depostisor}</div>
                            <div className="text-center py-5">{data.teacher}</div>
                            <div className="text-center py-5">{data.teacherEmail}</div>
                            <Link className="text-center py-5 text-red-500 hover:text-red-700 hover:scale-105 font-bold transition" target="_blank" href={`/images/${data.ageProof}`} download={data.ageProof}>다운로드</Link>
                        </>
                    ))}
                </GridContainer>
                </div>
            </>
    );
}

