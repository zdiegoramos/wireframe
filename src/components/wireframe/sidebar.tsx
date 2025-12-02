"use client";

import { useState } from "react";
import {
	WireframeSidebar,
	type WireframeSidebarPosition,
} from "@/components/ui/wireframe";

export function Sidebar() {
	const [collapsed, setCollapsed] = useState(false);
	const [position, setPosition] = useState<WireframeSidebarPosition>("left");

	function handleClick() {
		setCollapsed(!collapsed);
	}

	return (
		<WireframeSidebar collapsed={collapsed} position={position}>
			<div className="bg-(image:--crossed-gradient) flex min-h-full w-full items-center justify-center bg-pink-500/40">
				<div className="flex flex-col gap-4">
					<button onClick={handleClick} type="button">
						Click me
					</button>
					<div className="border-2 border-black bg-white px-2 font-bold">
						SIDEBAR
					</div>
					<select
						onChange={(e) =>
							setPosition(e.target.value as WireframeSidebarPosition)
						}
						value={position}
					>
						<option value="left">Left</option>
						<option value="right">Right</option>
					</select>
				</div>
				{/* <div className="flex flex-col">
					<div className="h-[800px] w-4 bg-red-600">a</div>
					<div className="h-[500px] w-4 bg-blue-600">b</div>
					<div className="h-[500px] w-4 bg-green-600">c</div>
				</div> */}
			</div>
		</WireframeSidebar>
	);
}
