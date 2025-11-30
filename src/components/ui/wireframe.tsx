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
				"has-data-wf-top-nav:mt-(--top-nav-height)",
				"has-data-wf-bottom-nav:mb-(--bottom-nav-height)",
				// ADD SIDEBAR MARGIN IF SIDEBAR EXISTS
				"has-data-[wf-left-sidebar=expanded]:ml-(--left-sidebar-width-expanded)",
				"has-data-[wf-right-sidebar=expanded]:mr-(--right-sidebar-width-expanded)",
				"has-data-[wf-left-sidebar=collapsed]:ml-(--left-sidebar-width-collapsed)",
				"has-data-[wf-right-sidebar=collapsed]:mr-(--right-sidebar-width-collapsed)",

				// RESPONSIVE NAVBAR HEIGHT AND MARGINS
				"**:data-wf-responsive-nav:h-(--bottom-nav-height)",
				"has-data-wf-responsive-nav:mb-(--bottom-nav-height)",
				"md:has-data-wf-responsive-nav:mt-(--top-nav-height) md:has-data-wf-responsive-nav:mb-0 md:**:data-wf-responsive-nav:h-(--top-nav-height)",
				// ADD SIDEBAR MARGIN TO RESPONSIVE NAV IF SIDEBAR EXISTS
				"has-data-wf-responsive-nav:has-data-[wf-left-sidebar=expanded]:**:data-wf-responsive-nav:ml-(--left-sidebar-width-expanded)",
				"has-data-wf-responsive-nav:has-data-[wf-right-sidebar=expanded]:**:data-wf-responsive-nav:mr-(--right-sidebar-width-expanded)",
				"has-data-wf-responsive-nav:has-data-[wf-left-sidebar=collapsed]:**:data-wf-responsive-nav:ml-(--left-sidebar-width-collapsed)",
				"has-data-wf-responsive-nav:has-data-[wf-right-sidebar=collapsed]:**:data-wf-responsive-nav:mr-(--right-sidebar-width-collapsed)",

				// PASS DOWN THE DIMENSIONS FOR THE NAV, FOOTER AND SIDEBAR
				// TOP NAVIGATION HEIGHT
				"**:data-wf-top-nav:h-(--top-nav-height)",
				"**:data-wf-top-nav:top-0",
				// ADD SIDEBAR MARGIN TO TOP NAV IF SIDEBAR EXISTS
				"has-data-wf-top-nav:has-data-[wf-left-sidebar=expanded]:**:data-wf-top-nav:ml-(--left-sidebar-width-expanded)",
				"has-data-wf-top-nav:has-data-[wf-right-sidebar=expanded]:**:data-wf-top-nav:mr-(--right-sidebar-width-expanded)",
				"has-data-wf-top-nav:has-data-[wf-left-sidebar=collapsed]:**:data-wf-top-nav:ml-(--left-sidebar-width-collapsed)",
				"has-data-wf-top-nav:has-data-[wf-right-sidebar=collapsed]:**:data-wf-top-nav:mr-(--right-sidebar-width-collapsed)",
				// BOTTOM FOOTER HEIGHT
				"**:data-wf-bottom-nav:h-(--bottom-nav-height)",
				"**:data-wf-bottom-nav:bottom-0",
				// ADD SIDEBAR MARGIN TO FOOTER IF SIDEBAR EXISTS
				"has-data-wf-bottom-nav:has-data-[wf-left-sidebar=expanded]:**:data-wf-bottom-nav:ml-(--left-sidebar-width-expanded)",
				"has-data-wf-bottom-nav:has-data-[wf-right-sidebar=expanded]:**:data-wf-bottom-nav:mr-(--right-sidebar-width-expanded)",
				"has-data-wf-bottom-nav:has-data-[wf-left-sidebar=collapsed]:**:data-wf-bottom-nav:ml-(--left-sidebar-width-collapsed)",
				"has-data-wf-bottom-nav:has-data-[wf-right-sidebar=collapsed]:**:data-wf-bottom-nav:mr-(--right-sidebar-width-collapsed)",
				// SIDEBAR WIDTH AND POSITIONING
				"**:data-wf-left-sidebar:left-0",
				"**:data-wf-right-sidebar:right-0",
				"**:data-[wf-left-sidebar=expanded]:w-(--left-sidebar-width-expanded)",
				"**:data-[wf-right-sidebar=expanded]:w-(--right-sidebar-width-expanded)",
				"**:data-[wf-left-sidebar=collapsed]:w-(--left-sidebar-width-collapsed)",
				"**:data-[wf-right-sidebar=collapsed]:w-(--right-sidebar-width-collapsed)",

				// CONTENT
				"has-data-wf-top-nav:has-data-wf-bottom-nav:min-h-[calc(100vh-var(--top-nav-height)-var(--bottom-nav-height))]",
				"has-data-wf-top-nav:min-h-[calc(100vh-var(--top-nav-height))]",
				"has-data-wf-bottom-nav:min-h-[calc(100vh-var(--bottom-nav-height))]",
				"has-data-wf-responsive-nav:min-h-[calc(100vh-var(--bottom-nav-height))] md:has-data-wf-responsive-nav:min-h-[calc(100vh-var(--top-nav-height))]",
				// HACK TO FIX CHILDREN HEIGHT 100% ISSUE
				"relative",
			)}
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

function WireframeStickyNav({
	className,
	children,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"sticky inset-x-0 top-0 z-50 h-(--sticky-nav-height) w-full",
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
			className={cn("fixed inset-x-0 z-50", className)}
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
				"fixed inset-x-0 bottom-0 z-50 md:top-0 md:bottom-auto",
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
	WireframeStickyNav,
	WireframeResponsiveNav,
	WireframeCollapsableSidebar,
	type WireframeCollapsableSidebarPosition,
};
