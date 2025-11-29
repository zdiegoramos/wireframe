"use client";

import { useState } from "react";

export function LeftSideWithButton() {
	const [collapsed, setCollapsed] = useState(false);

	function handleClick() {
		setCollapsed(!collapsed);
	}

	return (
		<div
			className="fixed inset-x-0 top-0 z-50 flex h-full justify-center border-r bg-blue-400"
			data-left-side={collapsed ? "collapsed" : "expanded"}
		>
			<div className="flex h-full w-full items-center justify-between">
				<button onClick={handleClick} type="button">
					Click me
				</button>
			</div>
		</div>
	);
}
