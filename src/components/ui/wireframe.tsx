import { cn } from "@/lib/utils";

function Wireframe({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				// ADD MARGINS AROUND TO ENSURE THE CONTENT
				// OCCUPIES THE VISIBLE AREA. THE NAV, FOOTER AND SIDEBAR
				// WILL BE POSITIONED OUTSIDE OF THIS AREA AS FIXED ELEMENTS
				"has-data-wf-nav:mt-16",
				"has-data-wf-footer:mb-16",
				"has-data-[wf-left-sidebar=expanded]:ml-52",
				"has-data-[wf-right-sidebar=expanded]:mr-52",
				"has-data-[wf-left-sidebar=collapsed]:ml-16",
				"has-data-[wf-right-sidebar=collapsed]:mr-16",

				// RESPONSIVE NAVBAR HEIGHT AND MARGINS
				"**:data-wf-responsive-nav:h-16",
				"has-data-wf-responsive-nav:mb-16",
				"md:has-data-wf-responsive-nav:mt-16 md:has-data-wf-responsive-nav:mb-0",
				// ADD SIDEBAR MARGIN TO RESPONSIVE NAV IF SIDEBAR EXISTS
				"has-data-wf-responsive-nav:has-data-[wf-left-sidebar=expanded]:**:data-wf-responsive-nav:ml-52",
				"has-data-wf-responsive-nav:has-data-[wf-right-sidebar=expanded]:**:data-wf-responsive-nav:mr-52",
				"has-data-wf-responsive-nav:has-data-[wf-left-sidebar=collapsed]:**:data-wf-responsive-nav:ml-16",
				"has-data-wf-responsive-nav:has-data-[wf-right-sidebar=collapsed]:**:data-wf-responsive-nav:mr-16",

				// PASS DOWN THE DIMENSIONS FOR THE NAV, FOOTER AND SIDEBAR
				// TOP NAVIGATION HEIGHT
				"**:data-wf-nav:h-16",
				// ADD SIDEBAR MARGIN TO TOP NAV IF SIDEBAR EXISTS
				"has-data-wf-nav:has-data-[wf-left-sidebar=expanded]:**:data-wf-nav:ml-52",
				"has-data-wf-nav:has-data-[wf-right-sidebar=expanded]:**:data-wf-nav:mr-52",
				"has-data-wf-nav:has-data-[wf-left-sidebar=collapsed]:**:data-wf-nav:ml-16",
				"has-data-wf-nav:has-data-[wf-right-sidebar=collapsed]:**:data-wf-nav:mr-16",
				// BOTTOM FOOTER HEIGHT
				"**:data-wf-footer:h-16",
				// ADD SIDEBAR MARGIN TO FOOTER IF SIDEBAR EXISTS
				"has-data-wf-footer:has-data-[wf-left-sidebar=expanded]:**:data-wf-footer:ml-52",
				"has-data-wf-footer:has-data-[wf-right-sidebar=expanded]:**:data-wf-footer:mr-52",
				"has-data-wf-footer:has-data-[wf-left-sidebar=collapsed]:**:data-wf-footer:ml-16",
				"has-data-wf-footer:has-data-[wf-right-sidebar=collapsed]:**:data-wf-footer:mr-16",
				// SIDEBAR WIDTH AND POSITIONING
				"**:data-wf-left-sidebar:left-0",
				"**:data-wf-right-sidebar:right-0",
				"**:data-[wf-left-sidebar=expanded]:w-52",
				"**:data-[wf-right-sidebar=expanded]:w-52",
				"**:data-[wf-left-sidebar=collapsed]:w-16",
				"**:data-[wf-right-sidebar=collapsed]:w-16",
				className,
			)}
			{...props}
		/>
	);
}

function WireframeFooter({
	className,
	children,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn("fixed inset-x-0 bottom-0 z-50", className)}
			data-wf-footer
			{...props}
		>
			{children}
		</div>
	);
}

function WireframeNav({
	className,
	children,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn("fixed inset-x-0 top-0 z-50", className)}
			data-wf-nav
			{...props}
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

type WireframeCollapsableSidebarSide = "left" | "right";

function WireframeCollapsableSidebar({
	className,
	children,
	collapsed = false,
	side = "left",
	...props
}: React.ComponentProps<"div"> & {
	collapsed?: boolean;
	side?: WireframeCollapsableSidebarSide;
}) {
	return (
		<div
			className={cn(
				"fixed inset-y-0 z-50 overflow-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				className,
			)}
			{...{
				...props,
				[`data-wf-${side}-sidebar`]: `${collapsed ? "collapsed" : "expanded"}`,
			}}
		>
			{children}
		</div>
	);
}

export {
	Wireframe,
	WireframeNav,
	WireframeFooter,
	WireframeResponsiveNav,
	WireframeCollapsableSidebar,
	type WireframeCollapsableSidebarSide,
};
