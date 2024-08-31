import React, { useEffect, useState } from "react";

export default function QuickStat() {
    const [rank, setRank] = useState("1");
	const [percentile, setPercentile] = useState("99");
	const [score, setScore] = useState("10");
	useEffect(() => {
		const savedRank = localStorage.getItem("rank") || "1";
		const savedPercentile = localStorage.getItem("percentile") || "99";
		const savedScore = localStorage.getItem("score") || "10";
		setRank(savedRank);
		setPercentile(savedPercentile);
		setScore(savedScore);
	}, []);
	return (
		<section className="flex flex-col w-full min-h-[90px] justify-center rounded-xl border border-gray-200 gap-y-3 p-2">
			<div className="font-normal pl-2">Quick Statistics</div>
			<div className="flex w-full justify-center gap-6">
				<div className="flex w-full flex-col border-r-2 pr-4">
					<h2 className="md:text-[18px] text-[12px] font-normal">
						🏆 {rank}
					</h2>
					<div className="md:text-[12px] md:pl-[30px] pl-[20px] text-[8px] font-bold text-stone-500">
						Your Rank
					</div>
				</div>
				<div className="flex w-full flex-col border-r-2 pr-4">
					<h2 className="md:text-[18px] text-[12px] font-normal">
						📋 {percentile}
					</h2>
					<div className="md:text-[12px] md:pl-[30px] pl-[20px] text-[8px] font-bold text-stone-500">
						Percentile
					</div>
				</div>
				<div className="flex w-full flex-col">
					<h2 className="md:text-[18px] text-[12px] font-normal">
						✅ {score}
					</h2>
					<div className="md:text-[12px] text-[8px] md:pl-[30px] pl-[20px] font-bold text-stone-500">
						Correct Answers
					</div>
				</div>
			</div>
		</section>
	);
}
