"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogDemo() {
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

	const handleRankChange = (e: { target: { value: any } }) => {
		const value = e.target.value;
		if (value === "" || Number(value) >= 0) {
			setRank(value);
		}
	};

	const handlePercentileChange = (e: { target: { value: any } }) => {
		const value = e.target.value;
		if (value === "" || (Number(value) >= 0 && Number(value) <= 100)) {
			setPercentile(value);
		}
	};

	const handleScoreChange = (e: { target: { value: any } }) => {
		const value = e.target.value;
		if (value === "" || (Number(value) >= 0 && Number(value) <= 15)) {
			setScore(value);
		}
	};

	const handleSaveChanges = () => {
		localStorage.setItem("rank", rank);
		localStorage.setItem("percentile", percentile);
		localStorage.setItem("score", score);

		alert("Scores updated successfully, Pease reload to view chages in Quick Statistics");
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-indigo-800 text-white" variant="outline">Update</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[600px] max-w-[320px]">
				<DialogHeader>
					<DialogTitle>Update Scores</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-2 items-center gap-4">
						<Label htmlFor="rank" className="text-left">
							Update Your Rank
						</Label>
						<Input
							id="rank"
							value={rank}
							onChange={handleRankChange}
							className="w-full"
						/>
					</div>
					<div className="grid grid-cols-2 items-center gap-4">
						<Label htmlFor="percentile" className="text-left">
							Update Percentile{" "}
							<span className="text-destructive">
								(out of 100)
							</span>
						</Label>
						<Input
							id="percentile"
							value={percentile}
							onChange={handlePercentileChange}
							className="w-full"
						/>
					</div>
					<div className="grid grid-cols-2 items-center gap-4">
						<Label htmlFor="score" className="text-left">
							Update Current Score{" "}
							<span className="text-destructive">
								(out of 15)
							</span>
						</Label>
						<Input
							id="score"
							value={score}
							onChange={handleScoreChange}
							className="w-full"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="button" onClick={handleSaveChanges}>
						Save changes
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
