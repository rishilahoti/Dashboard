import CourseUpdateButton from "./CourseUpdateButton";

export default function Course() {
    return(
        <section className="flex w-full min-h-[90px] justify-center items-center lg:gap-10 gap-3 rounded-xl border border-gray-200 p-2 lg:p-4">
            <div className="flex w-fit justify-center items-center ">
                HTML
            </div>
            <div className="flex w-full flex-col gap-1">
                <h2 className="md:text-[18px] text-[12px] font-semibold">
                    Hyper Text Markup Language
                </h2>
                <div className="md:text-[10px] text-[8px] font-semibold flex">
                    <p className="text-slate-500">Question: 08 | Duration: 15 mins | Submitted on 1 Sept 2024</p>
                </div>
            </div>
            <div className="">
                <CourseUpdateButton/>
            </div>
        </section>
    )
}