"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import React, { useState, useEffect } from "react";

export const description = "A linear line chart";

const chartData = [
	{ percentile: 0, student: 0 },
	{ percentile: 25, student: 2 },
	{ percentile: 50, student: 6 },
    { percentile: 65, student: 10 },
	{ percentile: 75, student: 14 },
	{ percentile: 100, student: 0 },
];

const chartConfig = {
	student: {
		label: "Number of Student:",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

export default function Component() {
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
		<Card>
			<CardHeader>
				<CardTitle>Comparision Graph</CardTitle>
				<CardDescription>You scored <span className="font-bold">{percentile}%</span> </CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={true} />
						<XAxis
							dataKey="percentile"
							tickLine={true}
							axisLine={true}
							tickMargin={8}
						/>
						<ChartTooltip
							cursor={true}
							content={<ChartTooltipContent />}
						/>
						<Line
							dataKey="student"
							type="linear"
							stroke="var(--color-student)"
							strokeWidth={2}
							dot={true}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
