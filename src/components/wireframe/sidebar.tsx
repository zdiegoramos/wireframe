"use client";

import { useState } from "react";
import {
	WireframeCollapsableSidebar,
	type WireframeCollapsableSidebarPosition,
} from "@/components/ui/wireframe";

export function Sidebar() {
	const [collapsed, setCollapsed] = useState(false);
	const [position, setPosition] =
		useState<WireframeCollapsableSidebarPosition>("left");

	function handleClick() {
		setCollapsed(!collapsed);
	}

	return (
		<WireframeCollapsableSidebar collapsed={collapsed} position={position}>
			<div className="flex min-h-full w-full items-center justify-between bg-pink-500/40">
				<div className="flex flex-col gap-4">
					<button onClick={handleClick} type="button">
						Click me
					</button>
					<select
						onChange={(e) =>
							setPosition(e.target.value as WireframeCollapsableSidebarPosition)
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
		</WireframeCollapsableSidebar>
	);
}
