import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { UserDropDown } from "./UserDropdown";

export default function Nav() {
	return (
		<nav className="h-[8vh] flex items-center border-b px-6 justify-between">
            <Link href="/" className="font-extrabold">
            WhatBytes
            </Link>
			<div className="flex items-center gap-x-2">
				<ThemeToggle />
				<UserDropDown />
			</div>
		</nav>
	);
}
