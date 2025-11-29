"use client";

import { useEffect, useState } from "react";

export type WireframeCSSVariables = {
	topNavHeight?: string;
	bottomNavHeight?: string;
	leftSidebarWidthCollapsed?: string;
	rightSidebarWidthCollapsed?: string;
	leftSidebarWidthExpanded?: string;
	rightSidebarWidthExpanded?: string;
};

function setProperties(data: [string, string | undefined][]) {
	if (typeof window !== "undefined") {
		for (const [property, value] of data) {
			if (value !== undefined) {
				document.documentElement.style.setProperty(property, value);
			}
		}
	}
}

export function DynamicCSSVariables({
	children,
	wireframe: {
		topNavHeight,
		bottomNavHeight,
		leftSidebarWidthCollapsed,
		rightSidebarWidthCollapsed,
		leftSidebarWidthExpanded,
		rightSidebarWidthExpanded,
	},
}: {
	children: React.ReactNode;
	wireframe: WireframeCSSVariables;
}) {
	const [isReadyToRender, setIsReadyToRender] = useState(false);

	useEffect(() => {
		setIsReadyToRender(false);

		setProperties([
			["--top-nav-height", topNavHeight],
			["--bottom-nav-height", bottomNavHeight],
			["--left-sidebar-width-collapsed", leftSidebarWidthCollapsed],
			["--right-sidebar-width-collapsed", rightSidebarWidthCollapsed],
			["--left-sidebar-width-expanded", leftSidebarWidthExpanded],
			["--right-sidebar-width-expanded", rightSidebarWidthExpanded],
		]);

		setIsReadyToRender(true);
	}, [
		bottomNavHeight,
		topNavHeight,
		leftSidebarWidthCollapsed,
		rightSidebarWidthCollapsed,
		leftSidebarWidthExpanded,
		rightSidebarWidthExpanded,
	]);

	// Avoid rendering before properties are set to prevent layout shifts
	if (isReadyToRender === false) {
		return null;
	}

	return children;
}
