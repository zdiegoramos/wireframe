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
				"has-data-[wf-sidebar=expanded]:ml-52",
				"has-data-[wf-sidebar=collapsed]:ml-16",

				// RESPONSIVE NAVBAR HEIGHT AND MARGINS
				"**:data-wf-responsive-nav:h-16",
				"has-data-wf-responsive-nav:mb-16",
				"md:has-data-wf-responsive-nav:mt-16 md:has-data-wf-responsive-nav:mb-0",
				// ADD SIDEBAR MARGIN TO RESPONSIVE NAV IF SIDEBAR EXISTS
				"has-data-wf-responsive-nav:has-data-[wf-sidebar=expanded]:**:data-wf-responsive-nav:ml-52",
				"has-data-wf-responsive-nav:has-data-[wf-sidebar=collapsed]:**:data-wf-responsive-nav:ml-16",

				// PASS DOWN THE DIMENSIONS FOR THE NAV, FOOTER AND SIDEBAR
				// TOP NAVIGATION HEIGHT
				"**:data-wf-nav:h-16",
				// ADD SIDEBAR MARGIN TO TOP NAV IF SIDEBAR EXISTS
				"has-data-wf-nav:has-data-[wf-sidebar=expanded]:**:data-wf-nav:ml-52",
				"has-data-wf-nav:has-data-[wf-sidebar=collapsed]:**:data-wf-nav:ml-16",
				// BOTTOM FOOTER HEIGHT
				"**:data-wf-footer:h-16",
				// ADD SIDEBAR MARGIN TO FOOTER IF SIDEBAR EXISTS
				"has-data-wf-footer:has-data-[wf-sidebar=expanded]:**:data-wf-footer:ml-52",
				"has-data-wf-footer:has-data-[wf-sidebar=collapsed]:**:data-wf-footer:ml-16",
				// SIDEBAR WIDTH
				"**:data-[wf-sidebar=expanded]:w-52",
				"**:data-[wf-sidebar=collapsed]:w-16",
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

function WireframeCollapsableSidebar({
	className,
	children,
	collapsed = false,
	...props
}: React.ComponentProps<"div"> & { collapsed?: boolean }) {
	return (
		<div
			className={cn(
				"fixed inset-y-0 left-0 z-50 overflow-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				className,
			)}
			data-wf-sidebar={collapsed ? "collapsed" : "expanded"}
			{...props}
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
};
