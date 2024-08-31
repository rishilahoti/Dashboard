"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
	const pathname = usePathname();

	return (
		<div className="hidden lg:block h-screen pr-1 border-r-2 sticky">
			<div className="flex flex-col pt-5">
				<div className="flex flex-col gap-y-4">
					<Link href="#" passHref>
						<div
							className={`${
								pathname === ""
									? "bg-gray-100 text-blue-700 font-semibold"
									: "hover:bg-blue-100 hover:text-blue-700"
							} py-2 px-4 rounded-r-full w-full`}
						>
							Dashboard
						</div>
					</Link>
					<Link href="/" passHref>
						<div
							className={`${
								pathname === "/"
									? "bg-gray-100 text-blue-700 font-semibold"
									: "hover:bg-blue-100 hover:text-blue-700"
							} py-2 px-4 rounded-r-full w-full `}
						>
							Skill Test
						</div>
					</Link>
					<Link href="/" passHref>
						<div
							className={`${
								pathname === ""
									? "bg-blue-100 text-blue-700 "
									: "hover:bg-blue-100 hover:text-blue-700"
							} py-2 px-4 rounded-r-full w-full`}
						>
							Internship
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
