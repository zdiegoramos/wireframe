import { cn } from "@/lib/utils";

function Wireframe({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				// ADD MARGINS AROUND TO ENSURE THE CONTENT
				// OCCUPIES THE VISIBLE AREA. THE NAV, FOOTER AND SIDEBAR
				// WILL BE POSITIONED OUTSIDE OF THIS AREA AS FIXED ELEMENTS
				// ADD TOP AND BOTTOM MARGINS IF NAV EXIST
				"has-data-wf-top-nav:mt-16",
				"has-data-wf-bottom-nav:mb-16",
				// ADD SIDEBAR MARGIN IF SIDEBAR EXISTS
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
				"**:data-wf-top-nav:h-16",
				"**:data-wf-top-nav:top-0",
				// ADD SIDEBAR MARGIN TO TOP NAV IF SIDEBAR EXISTS
				"has-data-wf-top-nav:has-data-[wf-left-sidebar=expanded]:**:data-wf-top-nav:ml-52",
				"has-data-wf-top-nav:has-data-[wf-right-sidebar=expanded]:**:data-wf-top-nav:mr-52",
				"has-data-wf-top-nav:has-data-[wf-left-sidebar=collapsed]:**:data-wf-top-nav:ml-16",
				"has-data-wf-top-nav:has-data-[wf-right-sidebar=collapsed]:**:data-wf-top-nav:mr-16",
				// BOTTOM FOOTER HEIGHT
				"**:data-wf-bottom-nav:h-16",
				"**:data-wf-bottom-nav:bottom-0",
				// ADD SIDEBAR MARGIN TO FOOTER IF SIDEBAR EXISTS
				"has-data-wf-bottom-nav:has-data-[wf-left-sidebar=expanded]:**:data-wf-bottom-nav:ml-52",
				"has-data-wf-bottom-nav:has-data-[wf-right-sidebar=expanded]:**:data-wf-bottom-nav:mr-52",
				"has-data-wf-bottom-nav:has-data-[wf-left-sidebar=collapsed]:**:data-wf-bottom-nav:ml-16",
				"has-data-wf-bottom-nav:has-data-[wf-right-sidebar=collapsed]:**:data-wf-bottom-nav:mr-16",
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
	WireframeResponsiveNav,
	WireframeCollapsableSidebar,
	type WireframeCollapsableSidebarPosition,
};
