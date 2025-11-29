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
		<html
			className="overscroll-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			lang="en"
			suppressHydrationWarning
		>
			<body
				className={cn(
					"relative overscroll-none bg-pink-400",
					// ADD MARGINS AROUND THE BODY TO ENSURE THE CONTENT
					// OCCUPIES THE VISIBLE AREA. THE NAV, FOOTER AND LEFT SIDE
					// WILL BE POSITIONED OUTSIDE OF THIS AREA AS FIXED ELEMENTS
					"has-data-nav:mt-16",
					"has-data-footer:mb-16",
					"has-data-[left-side=expanded]:ml-52",
					"has-data-[left-side=collapsed]:ml-16",

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
				{/* Make the safe areas top/bottom the same color as the background */}
				<div className="pointer-events-none fixed top-0 right-0 left-0 z-99999 h-[env(safe-area-inset-top)] bg-background" />
				<div className="pointer-events-none fixed right-0 bottom-0 left-0 z-99999 h-[env(safe-area-inset-bottom)] bg-background" />
				{/* Calculate the margins around the content */}
				<div className="mt-[env(safe-area-inset-top)] mr-[env(safe-area-inset-right)] mb-[env(safe-area-inset-bottom)] ml-[env(safe-area-inset-left)]">
					{children}
				</div>
			</body>
		</html>
	);
}
