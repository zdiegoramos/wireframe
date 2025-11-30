import { Wireframe } from "@/components/ui/wireframe";

export function HomeWireframe({ children }: { children: React.ReactNode }) {
	return (
		<Wireframe
			vars={
				{
					"--sticky-nav-height": "calc(var(--spacing) * 12)",
					"--sticky-nav-offset": "calc(var(--spacing) * 0)",
					"--top-nav-height": "calc(var(--spacing) * 16)",
					"--top-nav-offset": "calc(var(--spacing) * 0)",
					"--bottom-nav-height": "calc(var(--spacing) * 8)",
					"--bottom-nav-offset": "calc(var(--spacing) * 0)",
					"--left-sidebar-width-collapsed": "calc(var(--spacing) * 16)",
					"--right-sidebar-width-collapsed": "calc(var(--spacing) * 16)",
					"--left-sidebar-width-expanded": "calc(var(--spacing) * 52)",
					"--right-sidebar-width-expanded": "calc(var(--spacing) * 52)",
				} as React.CSSProperties
			}
		>
			{children}
		</Wireframe>
	);
}
