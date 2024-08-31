export default function QuickStat() {
	return (
		<section className="flex flex-col w-full min-h-[90px] justify-center rounded-xl border border-gray-200 gap-y-3 p-2">
			<div className="font-normal pl-2">
                Quick Statistics
            </div>
			<div className="flex w-full justify-center  gap-6">
				<div className="flex w-full flex-col border-r-2 pr-4">
					<h2 className="md:text-[18px] text-[12px] font-normal">
						🏆 1
					</h2>
					<div className="md:text-[12px] md:pl-[30px] pl-[20px] text-[8px] font-bold text-stone-500">
						Your Rank
					</div>
				</div>
				<div className="flex w-full flex-col  border-r-2 pr-4">
					<h2 className="md:text-[18px] text-[12px] font-normal">
						📋 99%
					</h2>
					<div className="md:text-[12px] md:pl-[30px] pl-[20px] text-[8px] font-bold text-stone-500">
						Percentile
					</div>
				</div>
				<div className="flex w-full flex-col ">
					<h2 className="md:text-[18px] text-[12px] font-normal">
						✅ 10/15
					</h2>
					<div className="md:text-[12px] text-[8px] md:pl-[30px] pl-[20px] font-bold text-stone-500">
						Correct Answers
					</div>
				</div>
			</div>
		</section>
	);
}
