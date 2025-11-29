"use client";

import { useState } from "react";
import { WireframeCollapsableSidebar } from "@/components/ui/wireframe";

export function Sidebar() {
	const [collapsed, setCollapsed] = useState(false);

	function handleClick() {
		setCollapsed(!collapsed);
	}

	return (
		<WireframeCollapsableSidebar collapsed={collapsed}>
			<div className="flex min-h-full w-full items-center justify-between bg-pink-500/40">
				<button onClick={handleClick} type="button">
					Click me
				</button>
				{/* <div className="flex flex-col">
					<div className="h-[800px] w-4 bg-red-600">a</div>
					<div className="h-[500px] w-4 bg-blue-600">b</div>
					<div className="h-[500px] w-4 bg-green-600">c</div>
				</div> */}
			</div>
		</WireframeCollapsableSidebar>
	);
}
