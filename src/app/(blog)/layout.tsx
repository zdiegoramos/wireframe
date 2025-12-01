import { BlogWireframe } from "@/components/wireframe/blog-wireframe";
import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "App Wireframe",
	description: "App Wireframe",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className="overscroll-none" lang="en" suppressHydrationWarning>
			<body>
				<BlogWireframe>{children}</BlogWireframe>
			</body>
		</html>
	);
}
