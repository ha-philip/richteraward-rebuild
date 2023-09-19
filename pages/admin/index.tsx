import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AdminMain from "./main";
import { prisma } from "@/server/client";
import { GetServerSideProps } from "next";

interface AdminForm {
    pw: string;
}

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

export default function AdminLogin({posts}: IWriteForms) {
    const [submitLoading, set_submitLoading] = useState<boolean>(false);
    const [isLogin, set_isLogin] = useState<string>();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<AdminForm>({
        mode: "all",
    });


    const onVaild = async (data: any) => {
        set_submitLoading(true);
        set_isLogin("");
        const body = {
            password: data.pw
        }
        try {
            const response = await fetch("/api/adminLogin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
            if (response.status !== 200) {
                console.log("something went wrong");
            }
            response.json().then(data => set_isLogin(data.message));
        } catch (error) {
            console.log("there was an error submitting", error);
        }
        set_submitLoading(false);
        reset();
    }
    return (
        <>
        <Head>
            <title>Ricther Award 관리자</title>
        </Head>
            {isLogin !== "ok" ?
                <div className="bg-cover bg-no-repeat bg-fixed flex justify-center items-start"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('https://cdn.pixabay.com/photo/2022/07/10/01/47/grades-7312021_1280.jpg')`,
                    }}>
                    <form className="flex flex-col mt-80 mb-[50%] gap-3 lg:w-[50vw] w-[90vw]" onSubmit={handleSubmit(onVaild)}>
                        {isLogin === "no" ?
                            <p className="text-red-400 text-sm">비밀번호가 옳지 않습니다.</p>
                            : null}
                        <input type="password" placeholder="관리자 비밀번호"
                            className="p-5 tracking-wider text-xl font-thin rounded-lg focus:bg-slate-200 transition"
                            {...register("pw", {
                                required: true
                            })}
                        />
                        <input type="submit" className="bg-red-800 text-white p-3 tracking-wider text-lg font-thin rounded-lg hover:bg-black transition"
                            value={
                                submitLoading ? "로그인 중..." : "로그인"}
                        />
                    </form>
                </div>
                :
                <AdminMain posts={posts}/>
            }
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const posts = await prisma.writeForm.findMany({
        select: {
            id: true,
            site: true,
            firstName: true,
            lastName: true,
            birthday: true,
            section: true,
            ageCategory: true,
            email: true,
            videoLink: true,
            ageProof: true
        }
    });

    return {
        props: { posts }
    }
}