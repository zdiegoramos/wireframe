import { Wireframe } from "@/components/ui/wireframe";

export function DashboardWireframe({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Wireframe
			cssVariables={{
				// STICKY NAV
				"--sticky-nav-height": 12,

				// TOP NAV
				"--top-nav-height": 16,

				// BOTTOM NAV
				"--bottom-nav-height": 8,

				// LEFT SIDEBAR
				"--left-sidebar-width-collapsed": 16,
				"--left-sidebar-width-expanded": 52,

				// RIGHT SIDEBAR
				"--right-sidebar-width-expanded": 52,
				"--right-sidebar-width-collapsed": 16,
			}}
		>
			{children}
		</Wireframe>
	);
}
