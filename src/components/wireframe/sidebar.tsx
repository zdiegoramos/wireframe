"use client";

import { useState } from "react";
import {
	WireframeCollapsableSidebar,
	type WireframeCollapsableSidebarSide,
} from "@/components/ui/wireframe";

export function Sidebar() {
	const [collapsed, setCollapsed] = useState(false);
	const [side, setSide] = useState<WireframeCollapsableSidebarSide>("left");

	function handleClick() {
		setCollapsed(!collapsed);
	}

	return (
		<WireframeCollapsableSidebar collapsed={collapsed} side={side}>
			<div className="flex min-h-full w-full items-center justify-between bg-pink-500/40">
				<div className="flex flex-col gap-4">
					<button onClick={handleClick} type="button">
						Click me
					</button>
					<select
						onChange={(e) =>
							setSide(e.target.value as WireframeCollapsableSidebarSide)
						}
						value={side}
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
