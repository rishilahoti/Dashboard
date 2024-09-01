"use client"
import ComparisionGraph from "./components/ComparisionGraph";
import Course from "./components/Course";
import QuickStat from "./components/QuickStat";
import SideBar from "./components/SideBar";
import SyllabusWise from "./components/SyllabusWise";
import RadialCard from "./components/RadialCard";

export default function Home() {
	return (
		<div className="flex flex-col md:flex-row h-screen">
			<div className="hidden md:block w-1/6">
				<SideBar />
			</div>
			<div className="flex-1 flex flex-col p-3 h-screen">
				<div className="w-full h-12 p-2">
					<p className="font-semibold">Skill Test</p>
				</div>
				<div className="flex-1 flex flex-col md:flex-row">
					<div className="flex-1 p-2">
						<div className="flex items-center justify-center mb-2">
							<Course />
						</div>
						<div className="flex items-center justify-center mb-2">
							<QuickStat/>
						</div>
						<div className="h-4/5">
							<ComparisionGraph />
						</div>
					</div>
					<div className="flex-1 p-2">
						<div >
							<SyllabusWise />
						</div>
						<div className="mt-2">
							<RadialCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
