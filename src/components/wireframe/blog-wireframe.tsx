import { Wireframe } from "@/components/ui/wireframe";

export function BlogWireframe({ children }: { children: React.ReactNode }) {
	return (
		<Wireframe
			cssVariables={{
				// STICKY NAV
				"--sticky-nav-height": "calc(var(--spacing) * 12)",
				"--sticky-nav-top-offset": "calc(var(--spacing) * 0)",

				// TOP NAV
				"--top-nav-height": "calc(var(--spacing) * 8)",
				"--top-nav-left-offset": "calc(var(--spacing) * 0)",
				"--top-nav-right-offset": "calc(var(--spacing) * 0)",
				"--top-nav-top-offset": "calc(var(--spacing) * 0)",
				"--top-nav-bottom-offset": "calc(var(--spacing) * 0)",

				// BOTTOM NAV
				"--bottom-nav-height": "calc(var(--spacing) * 8)",
				"--bottom-nav-left-offset": "calc(var(--spacing) * 0)",
				"--bottom-nav-right-offset": "calc(var(--spacing) * 0)",
				"--bottom-nav-top-offset": "calc(var(--spacing) * 0)",
				"--bottom-nav-bottom-offset": "calc(var(--spacing) * 0)",

				// LEFT SIDEBAR
				"--left-sidebar-width-collapsed": "calc(var(--spacing) * 16)",
				"--left-sidebar-width-expanded": "calc(var(--spacing) * 40)",
				"--left-sidebar-left-offset": "calc(var(--spacing) * 0)",
				"--left-sidebar-right-offset": "calc(var(--spacing) * 0)",
				"--left-sidebar-top-offset": "calc(var(--spacing) * 0)",
				"--left-sidebar-bottom-offset": "calc(var(--spacing) * 0)",

				// RIGHT SIDEBAR
				"--right-sidebar-width-expanded": "calc(var(--spacing) * 52)",
				"--right-sidebar-width-collapsed": "calc(var(--spacing) * 16)",
				"--right-sidebar-left-offset": "calc(var(--spacing) * 0)",
				"--right-sidebar-right-offset": "calc(var(--spacing) * 0)",
				"--right-sidebar-top-offset": "calc(var(--spacing) * 0)",
				"--right-sidebar-bottom-offset": "calc(var(--spacing) * 0)",
			}}
			navCorners={{
				bottomLeft: "navbar",
				bottomRight: "navbar",
				topLeft: "navbar",
				topRight: "navbar",
			}}
			responsiveNavCorners={{
				left: "navbar",
				right: "navbar",
			}}
		>
			{children}
		</Wireframe>
	);
}
