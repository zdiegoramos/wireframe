"use client";

import { useState } from "react";

export function LeftSideWithButton() {
	const [collapsed, setCollapsed] = useState(false);

	function handleClick() {
		setCollapsed(!collapsed);
	}

	return (
		<div
			className="fixed inset-x-0 top-0 bottom-0 z-50 overflow-scroll border-r bg-blue-400 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			data-left-side={collapsed ? "collapsed" : "expanded"}
		>
			<div className="flex min-h-full w-full items-center justify-between">
				<button onClick={handleClick} type="button">
					Click me
				</button>
				{/* <div className="flex flex-col">
					<div className="h-[800px] w-4 bg-red-600">a</div>
					<div className="h-[500px] w-4 bg-blue-600">b</div>
					<div className="h-[500px] w-4 bg-green-600">c</div>
				</div> */}
			</div>
		</div>
	);
}
