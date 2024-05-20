//신청서 폼
interface FormValues {
    firstName: string;
    lastName: string;
    birthday: string;
    school: string;
    ageProof: any;
    ageProofText: string;
    teamMember: string;
    section: string;
    ageCategory: string;
    email: string;
    phone: string;
    videoLink: string[];
    depostisor: string;
    teacher: string;
    teacherEmail: string;
    performingPiece: string;
    performingDuration: string;
  }
  //오시는 길
  interface IcontactText {
    manager: string;
    email: string;
    location: string;
    location_text1: string;
    location_text2: string;
  }
  //인트로
  interface IintroText {
    intro_title: string;
    intro_1: string;
    intro_2: string;
    intro_3: string;
  }
  //심사위원 데이터
  interface IJury {
    id: string;
    name: string;
    country: string;
    photo: string | undefined;
    description: string;
  }
  //공지사항
  interface INoticeForms {
    noticePost: {
        id: string;
        noticeTitle: string;
        formatnoticeText: string;
        createdAt: string;
        updatedAt: string;
    }[]
}
//신청 방법 텍스트
interface IregText {
    reg_title: string;
    reg_titleText_1: string;
    reg_titleText_2: string;
    prizes: string;
    section: string;
    repert: string;
    age: string;
    announce: string;
    awards: string;
    application: string;
    teacher: string;
    detail: string;
    prizes_1: string;
    prizes_2: string;
    section_1: string;
    section_2: string;
    section_3: string;
    section_4: string;
    section_5: string;
    section_6: string;
    repert_1: string;
    repert_2: string;
    repert_3: string;
    repert_4: string;
    repert_5: string;
    repert_6: string;
    repert_7: string;
    repert_8: string;
    age_1: string;
    age_2_1: string;
    age_2_2: string;
    age_3_1: string;
    age_3_2: string;
    age_4_1: string;
    age_4_2: string;
    age_5_1: string;
    age_5_2: string;
    age_6_1: string;
    age_6_2: string;
    age_7: string;
    age_8: string;
    announce_1: string;
    announce_2: string;
    announce_3: string;
    awards_1: string;
    awards_2: string;
    application_title: string;
    application_1: string;
    application_1_1: string;
    application_2: string;
    application_2_1: string;
    application_2_2: string;
    application_2_3: string;
    application_2_4: string;
    application_2_5: string;
    application_2_6: string;
    application_2_7: string;
    application_2_8: string;
    application_2_9: string;
    application_2_10: string;
    application_2_11: string;
    application_2_12: string;
    application_2_13: string;
    application_2_14: string;
    teacher_1: string;
    teacher_2: string;
    teacher_3: string;
    teacher_4: string;
    teacher_5: string;
    teacher_6: string;
    teacher_7: string;
    teacher_8: string;
    teacher_9: string;
    teacher_10: string;
    teacher_11: string;
    vote_1: string;
    vote_2: string;
    vote_3: string;
    detail_1: string;
    detail_2: string;
    detail_3: string;
    detail_4: string;
    detail_5: string;
    detail_6: string;
    detail_7: string;
    detail_8: string;
    detail_9: string;
    detail_10: string;
    detail_11: string;
  }
  //공지사항 입력
  interface NoticeFormValues{
    noticeTitle: string;
    noticeText: string;
  }
  //관리자 로그인 폼
  interface AdminForm {
    pw: string;
}
//신청자 목록 테이블
interface IAdminPosts {
    appformPost: {
        id: number;
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
    }[],
    noticePost: {
        id:number;
        noticeTitle:string;
        noticeText:string;
        createdAt:string;
        updatedAt:string;
      }[],
      onNotice: {
        id: number;
        noticeTitle: string;
        formatnoticeText: string;
        createdAt: string;
        updatedAt: string;
      }[]
}
//공지사항 수정
interface AdminFormValues {
    id: number;
    updateText: string;
  }
//인덱스
interface IindexText {
    index_1: string;
    index_2: string;
    index_3: string;
  }
  
  interface INoticeForms {
    noticePost: {
      id:string;
      noticeTitle:string;
      formatnoticeText:string;
      createdAt:string;
      updatedAt:string;
    }[]
  }