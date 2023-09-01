import { useRouter } from "next/router";

export default function PastJury() {
    const { locale } = useRouter();
    return (
        <div className="my-72">
            <h1>{locale === "en" ? "Hello" : "안녕"}</h1>
        </div>
    );
}