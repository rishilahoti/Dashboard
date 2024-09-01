"use client";



import { TrendingUp } from "lucide-react";
import {
	Label,
	PolarGrid,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart,
} from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useState, useEffect } from "react";

export const description = "A radial chart with a custom shape";

const chartConfig = {
	safari: {
		label: "Safari",
		color: "#ff5722",
	},
} satisfies ChartConfig;

export default function Component() {
	const [score, setScore] = useState("10");
	useEffect(() => {
		const savedScore = localStorage.getItem("score") || "10";
		setScore(savedScore);
	}, []);
	return (
		<Card className="flex flex-col">
			<CardHeader className="pb-0">
				<CardTitle className="text-sm font-bold">Question Analysis</CardTitle>
				<CardDescription><span className="font-semibold">You scored {score}</span></CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square max-h-[250px]"
				>
					<RadialBarChart
						endAngle={100}
						innerRadius={80}
						outerRadius={140}
					>
						<PolarGrid
							gridType="circle"
							radialLines={false}
							stroke="none"
							className="first:fill-muted last:fill-background"
							polarRadius={[86, 74]}
						/>
						<RadialBar dataKey="visitors" background />
						<PolarRadiusAxis
							tick={false}
							tickLine={false}
							axisLine={false}
						>
							<Label
								content={({ viewBox }) => {
									if (
										viewBox &&
										"cx" in viewBox &&
										"cy" in viewBox
									) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor="middle"
												dominantBaseline="middle"
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className="fill-foreground text-4xl font-bold"
												>
													{score}
												</tspan>
											</text>
										);
									}
								}}
							/>
						</PolarRadiusAxis>
					</RadialBarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}

