import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "App Shell",
	description: "App Shell",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className="overscroll-none" lang="en" suppressHydrationWarning>
			<body
				className={cn(
					// ADD MARGINS AROUND THE BODY TO ENSURE THE CONTENT
					// OCCUPIES THE VISIBLE AREA. THE NAV, FOOTER AND LEFT SIDE
					// WILL BE POSITIONED OUTSIDE OF THIS AREA AS FIXED ELEMENTS
					"has-data-nav:mt-16",
					"has-data-footer:mb-16",
					"has-data-[left-side=expanded]:ml-52",
					"has-data-[left-side=collapsed]:ml-16",

					// RESPONSIVE NAVBAR AT TOP AND BOTTOM
					"**:data-responsive-nav:h-16",
					"has-data-responsive-nav:mb-16",
					"md:has-data-responsive-nav:mt-16 md:has-data-responsive-nav:mb-0",
					"has-data-responsive-nav:has-data-[left-side=expanded]:**:data-responsive-nav:ml-52",
					"has-data-responsive-nav:has-data-[left-side=collapsed]:**:data-responsive-nav:ml-16",

					// PASS DOWN THE DIMENSIONS FOR THE NAV, FOOTER AND LEFT SIDE
					// TOP NAVIGATION HEIGHT
					"**:data-nav:h-16",
					// ADD LEFT SIDE MARGIN TO TOP NAV IF LEFT SIDE EXISTS
					"has-data-nav:has-data-[left-side=expanded]:**:data-nav:ml-52",
					"has-data-nav:has-data-[left-side=collapsed]:**:data-nav:ml-16",
					// BOTTOM FOOTER HEIGHT
					"**:data-footer:h-16",
					// ADD LEFT SIDE MARGIN TO FOOTER IF LEFT SIDE EXISTS
					"has-data-footer:has-data-[left-side=expanded]:**:data-footer:ml-52",
					"has-data-footer:has-data-[left-side=collapsed]:**:data-footer:ml-16",
					// LEFT SIDE WIDTH
					"**:data-[left-side=expanded]:w-52",
					"**:data-[left-side=collapsed]:w-16",
				)}
			>
				{children}
			</body>
		</html>
	);
}
