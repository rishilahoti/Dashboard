/* eslint-disable @next/next/no-img-element */
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export function UserDropDown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="rounded-sm border h-10 px-2 py-2 flex items-center gap-x-3">
					<MenuIcon className="h-5 w-5" />
					<img
						src={"/images/default.jpg"}
						alt="default user image"
						className="rounded-full h-8 w-8 hidden lg:block"
					/>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[200px]">
				<DropdownMenuItem>
					<Link className="w-full " href={"/"}>
						Hello
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
                    <Link className="w-full " href={"/"}>
						Settings
					</Link>
                </DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
