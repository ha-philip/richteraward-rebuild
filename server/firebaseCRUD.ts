import {
    addDoc,
    arrayRemove,
    arrayUnion,
    collection,
    deleteDoc,
    doc,
    documentId,
    getDocs,
    limit,
    orderBy,
    query,
    updateDoc,
    where,
  } from "firebase/firestore";
  import { db } from "./firebase";

const regRef = collection(db, "regulation");

//참가자 신청 DB 저장
export const addRegulation = async (regData: FormValues) => {
    await addDoc(collection(db, "regulation"), {
        firstName: regData.firstName,
        lastName: regData.lastName,
        birthday: regData.birthday,
        school: regData.school,
        ageProof: regData.ageProof,
        teamMember: regData.teamMember,
        section: regData.section,
        ageCategory: regData.ageCategory,
        email: regData.email,
        phone: regData.phone,
        videoLink: regData.videoLink,
        depostisor: regData.depostisor,
        teacher: regData.teacher,
        teacherEmail: regData.teacherEmail,
        performingPiece: regData.performingPiece,
        performingDuration: regData.performingDuration,
        createAt: regData.createAt
    });
  };
  //참가자 정보 불러오기
export const getRegulation = async () => {
    const resultArray: any = [];
    const regQuery = query(
        regRef,
        orderBy("createAt", "asc")
      );
      const result = await getDocs(regQuery); //문서화
      result.docs.map((data) => {
        resultArray.push({ regId: data.id, regInfo: data.data() }); //필드 고유의 id값과 필드 내용을 배열에 담기
      });
      return resultArray;
  };