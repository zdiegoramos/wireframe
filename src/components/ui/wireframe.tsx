import { cn } from "@/lib/utils";

function Wireframe({
	className,
	children,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				// ADD MARGINS AROUND TO ENSURE THE CONTENT
				// OCCUPIES THE VISIBLE AREA. THE NAV, FOOTER AND SIDEBAR
				// WILL BE POSITIONED OUTSIDE OF THIS AREA AS FIXED ELEMENTS
				// ADD TOP AND BOTTOM MARGINS IF NAV EXIST
				"has-data-wf-top-nav:mt-[calc(var(--top-nav-height)+var(--top-nav-offset))]",
				"has-data-wf-bottom-nav:**:data-wf-content:pb-[calc(var(--bottom-nav-height)+var(--bottom-nav-offset))]",
				// ADD SIDEBAR MARGIN IF SIDEBAR EXISTS
				"has-data-[wf-left-sidebar=expanded]:ml-(--left-sidebar-width-expanded)",
				"has-data-[wf-right-sidebar=expanded]:mr-(--right-sidebar-width-expanded)",
				"has-data-[wf-left-sidebar=collapsed]:ml-(--left-sidebar-width-collapsed)",
				"has-data-[wf-right-sidebar=collapsed]:mr-(--right-sidebar-width-collapsed)",

				// RESPONSIVE NAVBAR HEIGHT AND MARGINS
				// MOBILE
				"has-data-wf-responsive-nav:**:data-wf-content:pb-[calc(var(--bottom-nav-height)+var(--bottom-nav-offset))]",
				// DESKTOP
				"md:has-data-wf-responsive-nav:mt-[calc(var(--top-nav-height)+var(--top-nav-offset))] md:has-data-wf-responsive-nav:**:data-wf-content:pb-0",
				// ADD SIDEBAR MARGIN TO RESPONSIVE NAV IF SIDEBAR EXISTS
				"has-data-wf-responsive-nav:has-data-[wf-left-sidebar=expanded]:**:data-wf-responsive-nav:ml-(--left-sidebar-width-expanded)",
				"has-data-wf-responsive-nav:has-data-[wf-right-sidebar=expanded]:**:data-wf-responsive-nav:mr-(--right-sidebar-width-expanded)",
				"has-data-wf-responsive-nav:has-data-[wf-left-sidebar=collapsed]:**:data-wf-responsive-nav:ml-(--left-sidebar-width-collapsed)",
				"has-data-wf-responsive-nav:has-data-[wf-right-sidebar=collapsed]:**:data-wf-responsive-nav:mr-(--right-sidebar-width-collapsed)",

				// PASS DOWN THE DIMENSIONS FOR THE NAV, FOOTER AND SIDEBAR
				// TOP NAVIGATION HEIGHT
				// ADD SIDEBAR MARGIN TO TOP NAV IF SIDEBAR EXISTS
				"has-data-wf-top-nav:has-data-[wf-left-sidebar=expanded]:**:data-wf-top-nav:ml-(--left-sidebar-width-expanded)",
				"has-data-wf-top-nav:has-data-[wf-right-sidebar=expanded]:**:data-wf-top-nav:mr-(--right-sidebar-width-expanded)",
				"has-data-wf-top-nav:has-data-[wf-left-sidebar=collapsed]:**:data-wf-top-nav:ml-(--left-sidebar-width-collapsed)",
				"has-data-wf-top-nav:has-data-[wf-right-sidebar=collapsed]:**:data-wf-top-nav:mr-(--right-sidebar-width-collapsed)",
				// BOTTOM FOOTER HEIGHT
				// ADD SIDEBAR MARGIN TO FOOTER IF SIDEBAR EXISTS
				"has-data-wf-bottom-nav:has-data-[wf-left-sidebar=expanded]:**:data-wf-bottom-nav:ml-(--left-sidebar-width-expanded)",
				"has-data-wf-bottom-nav:has-data-[wf-right-sidebar=expanded]:**:data-wf-bottom-nav:mr-(--right-sidebar-width-expanded)",
				"has-data-wf-bottom-nav:has-data-[wf-left-sidebar=collapsed]:**:data-wf-bottom-nav:ml-(--left-sidebar-width-collapsed)",
				"has-data-wf-bottom-nav:has-data-[wf-right-sidebar=collapsed]:**:data-wf-bottom-nav:mr-(--right-sidebar-width-collapsed)",
				// SIDEBAR WIDTH AND POSITIONING

				// CONTENT
				"has-data-wf-top-nav:has-data-wf-bottom-nav:min-h-[calc(100vh-var(--top-nav-height)-var(--bottom-nav-height)-var(--top-nav-offset)-var(--bottom-nav-offset))]",
				"has-data-wf-top-nav:min-h-[calc(100vh-var(--top-nav-height)-var(--top-nav-offset))]",
				"has-data-wf-bottom-nav:min-h-[calc(100vh-var(--bottom-nav-height)-var(--bottom-nav-offset))]",
				"has-data-wf-responsive-nav:min-h-[calc(100vh-var(--bottom-nav-height)-var(--bottom-nav-offset))] md:has-data-wf-responsive-nav:min-h-[calc(100vh-var(--top-nav-height)-var(--top-nav-offset))]",
				// HACK TO FIX CHILDREN HEIGHT 100% ISSUE
				"relative",
			)}
			style={
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
			<div
				// INNER WRAPPER TO COVER THE WHOLE AREA
				// OTHERWISE, CHILDREN WON'T BE ABLE TO SET
				// HEIGHT TO 100%
				className={cn("absolute inset-0", className)}
				{...props}
			>
				{children}
			</div>
		</div>
	);
}

function WireframeContent({ children, ...props }: React.ComponentProps<"div">) {
	return (
		<div data-wf-content {...props}>
			{children}
		</div>
	);
}

function WireframeStickyNav({
	className,
	children,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"sticky inset-x-0 top-(--sticky-nav-offset) z-50 h-(--sticky-nav-height) w-full",
				className,
			)}
			data-wf-sticky-nav
			{...props}
		>
			{children}
		</div>
	);
}

function WireframeNav({
	className,
	children,
	position = "top",
	...props
}: React.ComponentProps<"div"> & {
	position?: "top" | "bottom";
}) {
	return (
		<div
			className={cn(
				"fixed inset-x-0 z-50",
				position === "top"
					? "top-(--top-nav-offset) h-(--top-nav-height)"
					: "bottom-(--bottom-nav-offset) h-(--bottom-nav-height)",
				className,
			)}
			{...{
				...props,
				[`data-wf-${position}-nav`]: "",
			}}
		>
			{children}
		</div>
	);
}

function WireframeResponsiveNav({
	className,
	children,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"fixed inset-x-0 bottom-(--bottom-nav-offset) z-50 h-(--bottom-nav-height) md:top-(--top-nav-offset) md:bottom-auto md:h-(--top-nav-height)",
				className,
			)}
			data-wf-responsive-nav
			{...props}
		>
			{children}
		</div>
	);
}

type WireframeCollapsableSidebarPosition = "left" | "right";

function WireframeCollapsableSidebar({
	className,
	children,
	collapsed = false,
	position = "left",
	...props
}: React.ComponentProps<"div"> & {
	collapsed?: boolean;
	position?: WireframeCollapsableSidebarPosition;
}) {
	return (
		<div
			className={cn(
				"fixed inset-y-0 z-50 overflow-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				position === "left"
					? [
							"left-0",
							collapsed
								? "w-(--left-sidebar-width-collapsed)"
								: "w-(--left-sidebar-width-expanded)",
						]
					: [
							"right-0",
							collapsed
								? "w-(--right-sidebar-width-collapsed)"
								: "w-(--right-sidebar-width-expanded)",
						],
				className,
			)}
			{...{
				...props,
				[`data-wf-${position}-sidebar`]: `${collapsed ? "collapsed" : "expanded"}`,
			}}
		>
			{children}
		</div>
	);
}

export {
	Wireframe,
	WireframeNav,
	WireframeContent,
	WireframeStickyNav,
	WireframeResponsiveNav,
	WireframeCollapsableSidebar,
	type WireframeCollapsableSidebarPosition,
};
