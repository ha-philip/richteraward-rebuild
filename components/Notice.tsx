export default function Notice() {

    return (
        <>
            <div className="lg:px-48 px-5 bg-[whitesmoke] lg:pt-32 py-14" id="notice">
                <div className="flex flex-col justify-center items-center space-y-10">
                    <span className="lg:text-4xl text-lg font-thin tracking-widest border-b border-red-800 p-3">Notice</span>
                    <div className="bg-white shadow-2xl flex flex-col w-full">
                    {[...Array(7)].map((data, number) => (
                        <div className="hover:bg-slate-100 hover:text-slate-600 transition flex justify-between lg:px-12 px-5 py-5 cursor-pointer" key={number}>
                            <span className="tracking-tight lg:text-sm text-xs">"New Notice"</span>
                            <span className="tracking-tight lg:text-sm text-xs">2022.06.01</span>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    );
}