"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export default function ProgressDemo() {
	return (
		<section className="flex flex-col w-full justify-center items-start lg:gap-5 gap-3 rounded-xl border border-gray-200 p-8">
			<h1 className="text-xl font-semibold">
				Syllabus Wise Analysis
			</h1>
			<div className="w-full px-2">
				<span>HTML Tools, Forms, History</span>
				<div className="mb-4 py-2 flex items-center justify-between">
					<Progress value={80} className="w-[80%]" indicatorColor="bg-blue-600" accentColor="bg-blue-100"/>
					<span className="text-blue-600">80%</span>
				</div>
				<span>Tags & References in HTML</span>
				<div className="mb-4 py-2 flex items-center justify-between">
					<Progress value={60} className="w-[80%]" indicatorColor="bg-orange-500"  accentColor="bg-orange-100"/>
					<span className="text-orange-500">60%</span>
				</div>
				<span>Tables & References in HTML</span>
				<div className="mb-4 py-2 flex items-center justify-between">
					<Progress value={24} className="w-[80%]" indicatorColor="bg-rose-500"  accentColor="bg-rose-100"/>
					<span className="text-rose-500">24%</span>
				</div>
				<span>Tables & CSS Basics</span>
				<div className="py-2 flex items-center justify-between">
					<Progress value={96} className="w-[80%]" indicatorColor="bg-green-500"  accentColor="bg-green-100"/>
					<span className="text-green-500">96%</span>
				</div>
			</div>
		</section>
	);
}
