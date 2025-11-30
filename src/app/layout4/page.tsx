import {
	DynamicWireframeVariables,
	type WireframeCSSVariables,
} from "@/components/dynamic-css-variables";
import { ResponsiveNav } from "@/components/wireframe/responsive-nav";
import { Sidebar } from "@/components/wireframe/sidebar";

export default function Page() {
	const wireframeConfig = {
		topNavHeight: "100px",
		bottomNavHeight: "50px",
		leftSidebarWidthCollapsed: "80px",
		rightSidebarWidthCollapsed: "50px",
		leftSidebarWidthExpanded: "300px",
		rightSidebarWidthExpanded: "200px",
	} satisfies WireframeCSSVariables;

	return (
		<DynamicWireframeVariables wireframeConfig={wireframeConfig}>
			<main className="bg-amber-500">
				<ResponsiveNav />
				<Sidebar />
				<div className="h-[1000px] w-20 bg-green-900" />
			</main>
		</DynamicWireframeVariables>
	);
}
