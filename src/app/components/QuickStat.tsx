export default function QuickStat() {
    return(
        <section className="flex w-full min-h-[90px] justify-center items-center lg:gap-10 gap-3 rounded-xl border border-gray-200 p-2 lg:p-4">
            <div className="flex w-full flex-col border-r-2">
                <h2 className="md:text-[18px] text-[12px] font-normal">
                    🏆1
                </h2>
                <div className="md:text-[12px] text-[8px] font-bold flex">
                    <p className="pl-[25px] text-stone-500">Your Rank</p>
                </div>
            </div>
            <div className="flex w-full flex-col border-r-2">
                <h2 className="md:text-[18px] text-[12px] font-normal">
                    📋99%
                </h2>
                <div className="md:text-[12px] text-[8px] font-bold flex">
                    <p className="pl-[25px] text-stone-500">Percentile</p>
                </div>
            </div>
            <div className="flex w-full flex-col ">
                <h2 className="md:text-[18px] text-[12px] font-normal">
                    ✅10/15
                </h2>
                <div className="md:text-[12px] text-[8px] font-bold flex">
                    <p className="pl-[25px] text-stone-500">Correct Answers</p>
                </div>
            </div>
        </section>
    )
}