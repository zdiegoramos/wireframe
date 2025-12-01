import type { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

const defaultConfig: ClassValue[] = [
	// ADD MARGINS AROUND TO ENSURE THE CONTENT
	// OCCUPIES THE VISIBLE AREA. THE NAV, FOOTER AND SIDEBAR
	// WILL BE POSITIONED OUTSIDE OF THIS AREA AS FIXED ELEMENTS
	// ADD TOP AND BOTTOM MARGINS IF NAV EXIST
	"has-data-wf-top-nav:mt-[calc(var(--top-nav-height)+var(--top-nav-top-offset))]",
	"has-data-wf-bottom-nav:**:data-wf-content:pb-[calc(var(--bottom-nav-height)+var(--bottom-nav-bottom-offset))]",
	// ADD SIDEBAR MARGIN IF SIDEBAR EXISTS
	"has-data-[wf-left-sidebar=expanded]:ml-[calc(var(--left-sidebar-width-expanded)+var(--left-sidebar-left-offset))]",
	"has-data-[wf-right-sidebar=expanded]:mr-[calc(var(--right-sidebar-width-expanded)+var(--right-sidebar-right-offset))]",
	"has-data-[wf-left-sidebar=collapsed]:ml-[calc(var(--left-sidebar-width-collapsed)+var(--left-sidebar-left-offset))]",
	"has-data-[wf-right-sidebar=collapsed]:mr-[calc(var(--right-sidebar-width-collapsed)+var(--right-sidebar-right-offset))]",

	// RESPONSIVE NAVBAR HEIGHT AND MARGINS
	// MOBILE
	"has-data-wf-responsive-nav:**:data-wf-content:pb-[calc(var(--bottom-nav-height)+var(--bottom-nav-bottom-offset))]",
	// DESKTOP
	"min-wf-responsive-nav:has-data-wf-responsive-nav:mt-[calc(var(--top-nav-height)+var(--top-nav-top-offset))] min-wf-responsive-nav:has-data-wf-responsive-nav:**:data-wf-content:pb-0",
	// SIDEBAR WIDTH AND POSITIONING

	// CONTENT
	"has-data-wf-top-nav:has-data-wf-bottom-nav:min-h-[calc(100vh-var(--top-nav-height)-var(--bottom-nav-height)-var(--top-nav-top-offset)-var(--bottom-nav-bottom-offset))]",
	"has-data-wf-top-nav:min-h-[calc(100vh-var(--top-nav-height)-var(--top-nav-top-offset))]",
	"has-data-wf-bottom-nav:min-h-[calc(100vh-var(--bottom-nav-height)-var(--bottom-nav-bottom-offset))]",
	"has-data-wf-responsive-nav:min-h-[calc(100vh-var(--bottom-nav-height)-var(--bottom-nav-bottom-offset))] min-wf-responsive-nav:has-data-wf-responsive-nav:min-h-[calc(100vh-var(--top-nav-height)-var(--top-nav-top-offset))]",
	// HACK TO FIX CHILDREN HEIGHT 100% ISSUE
	"relative",
];

const defaultVars: React.CSSProperties = {
	"--sticky-nav-height": "calc(var(--spacing) * 12)",
	"--sticky-nav-top-offset": "calc(var(--spacing) * 0)",
	"--sticky-nav-left-offset": "calc(var(--spacing) * 0)",
	"--sticky-nav-right-offset": "calc(var(--spacing) * 0)",
	"--top-nav-height": "calc(var(--spacing) * 16)",
	"--top-nav-top-offset": "calc(var(--spacing) * 0)",
	"--top-nav-left-offset": "calc(var(--spacing) * 0)",
	"--top-nav-right-offset": "calc(var(--spacing) * 0)",
	"--bottom-nav-height": "calc(var(--spacing) * 8)",
	"--bottom-nav-bottom-offset": "calc(var(--spacing) * 0)",
	"--bottom-nav-left-offset": "calc(var(--spacing) * 0)",
	"--bottom-nav-right-offset": "calc(var(--spacing) * 0)",
	"--left-sidebar-width-collapsed": "calc(var(--spacing) * 16)",
	"--right-sidebar-width-collapsed": "calc(var(--spacing) * 16)",
	"--left-sidebar-width-expanded": "calc(var(--spacing) * 52)",
	"--right-sidebar-width-expanded": "calc(var(--spacing) * 52)",
	"--right-sidebar-right-offset": "calc(var(--spacing) * 3)",
	"--right-sidebar-top-offset": "calc(var(--spacing) * 3)",
	"--right-sidebar-bottom-offset": "calc(var(--spacing) * 3)",
	"--left-sidebar-left-offset": "calc(var(--spacing) * 5)",
	"--left-sidebar-top-offset": "calc(var(--spacing) * 5)",
	"--left-sidebar-bottom-offset": "calc(var(--spacing) * 5)",
} as React.CSSProperties;

const responsiveNavCornersConfig = {
	navbar: {
		left: [
			"has-data-wf-responsive-nav:has-data-wf-left-sidebar:**:data-wf-left-sidebar:mb-(--bottom-nav-height) min-wf-responsive-nav:has-data-wf-responsive-nav:has-data-wf-left-sidebar:**:data-wf-left-sidebar:mt-(--top-nav-height) min-wf-responsive-nav:has-data-wf-responsive-nav:has-data-wf-left-sidebar:**:data-wf-left-sidebar:mb-0",
		],
		right: [
			"has-data-wf-responsive-nav:has-data-wf-right-sidebar:**:data-wf-right-sidebar:mb-(--bottom-nav-height) min-wf-responsive-nav:has-data-wf-responsive-nav:has-data-wf-right-sidebar:**:data-wf-right-sidebar:mt-(--top-nav-height) min-wf-responsive-nav:has-data-wf-responsive-nav:has-data-wf-right-sidebar:**:data-wf-right-sidebar:mb-0",
		],
	},
	sidebar: {
		left: [
			"has-data-wf-responsive-nav:has-data-[wf-left-sidebar=expanded]:**:data-wf-responsive-nav:ml-[calc(var(--left-sidebar-width-expanded)+var(--left-sidebar-left-offset))]",
			"has-data-wf-responsive-nav:has-data-[wf-left-sidebar=collapsed]:**:data-wf-responsive-nav:ml-[calc(var(--left-sidebar-width-collapsed)+var(--left-sidebar-left-offset))]",
		],
		right: [
			"has-data-wf-responsive-nav:has-data-[wf-right-sidebar=expanded]:**:data-wf-responsive-nav:mr-[calc(var(--right-sidebar-width-expanded)+var(--right-sidebar-right-offset))]",
			"has-data-wf-responsive-nav:has-data-[wf-right-sidebar=collapsed]:**:data-wf-responsive-nav:mr-[calc(var(--right-sidebar-width-collapsed)+var(--right-sidebar-right-offset))]",
		],
	},
} as const;

const navCornersConfig = {
	navbar: {
		topLeft: [
			"has-data-wf-top-nav:has-data-wf-left-sidebar:**:data-wf-left-sidebar:mt-(--top-nav-height)",
		],
		topRight: [
			"has-data-wf-top-nav:has-data-wf-right-sidebar:**:data-wf-right-sidebar:mt-(--top-nav-height)",
		],
		bottomLeft: [
			"has-data-wf-bottom-nav:has-data-wf-left-sidebar:**:data-wf-left-sidebar:mb-(--bottom-nav-height)",
		],
		bottomRight: [
			"has-data-wf-bottom-nav:has-data-wf-right-sidebar:**:data-wf-right-sidebar:mb-(--bottom-nav-height)",
		],
	},
	sidebar: {
		topLeft: [
			"has-data-wf-top-nav:has-data-[wf-left-sidebar=expanded]:**:data-wf-top-nav:ml-[calc(var(--left-sidebar-width-expanded)+var(--left-sidebar-left-offset))]",
			"has-data-wf-top-nav:has-data-[wf-left-sidebar=collapsed]:**:data-wf-top-nav:ml-[calc(var(--left-sidebar-width-collapsed)+var(--left-sidebar-left-offset))]",
		],
		topRight: [
			"has-data-wf-top-nav:has-data-[wf-right-sidebar=expanded]:**:data-wf-top-nav:mr-[calc(var(--right-sidebar-width-expanded)+var(--right-sidebar-right-offset))]",
			"has-data-wf-top-nav:has-data-[wf-right-sidebar=collapsed]:**:data-wf-top-nav:mr-[calc(var(--right-sidebar-width-collapsed)+var(--right-sidebar-right-offset))]",
		],
		bottomLeft: [
			"has-data-wf-bottom-nav:has-data-[wf-left-sidebar=expanded]:**:data-wf-bottom-nav:ml-[calc(var(--left-sidebar-width-expanded)+var(--left-sidebar-left-offset))]",
			"has-data-wf-bottom-nav:has-data-[wf-left-sidebar=collapsed]:**:data-wf-bottom-nav:ml-[calc(var(--left-sidebar-width-collapsed)+var(--left-sidebar-left-offset))]",
		],
		bottomRight: [
			"has-data-wf-bottom-nav:has-data-[wf-right-sidebar=expanded]:**:data-wf-bottom-nav:mr-[calc(var(--right-sidebar-width-expanded)+var(--right-sidebar-right-offset))]",
			"has-data-wf-bottom-nav:has-data-[wf-right-sidebar=collapsed]:**:data-wf-bottom-nav:mr-[calc(var(--right-sidebar-width-collapsed)+var(--right-sidebar-right-offset))]",
		],
	},
} as const;

type WireframeCornerOptions = "navbar" | "sidebar";

function Wireframe({
	className,
	children,
	config,
	cssVariables,
	navCorners,
	responsiveNavCorners,
	...props
}: React.ComponentProps<"div"> & {
	config?: ClassValue[];
	cssVariables?: React.CSSProperties;
	navCorners?: {
		topLeft?: WireframeCornerOptions;
		topRight?: WireframeCornerOptions;
		bottomLeft?: WireframeCornerOptions;
		bottomRight?: WireframeCornerOptions;
	};
	responsiveNavCorners?: {
		left?: WireframeCornerOptions;
		right?: WireframeCornerOptions;
	};
}) {
	return (
		<div
			className={cn(
				...(config ?? defaultConfig),
				navCornersConfig[navCorners?.topLeft ?? "sidebar"].topLeft,
				navCornersConfig[navCorners?.topRight ?? "sidebar"].topRight,
				navCornersConfig[navCorners?.bottomLeft ?? "sidebar"].bottomLeft,
				navCornersConfig[navCorners?.bottomRight ?? "sidebar"].bottomRight,
				responsiveNavCornersConfig[responsiveNavCorners?.left ?? "sidebar"]
					.left,
				responsiveNavCornersConfig[responsiveNavCorners?.right ?? "sidebar"]
					.right,
				className,
			)}
			style={{ ...(cssVariables ?? defaultVars) }}
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
				"sticky inset-x-0 top-(--sticky-nav-top-offset) right-(--sticky-nav-right-offset) left-(--sticky-nav-left-offset) z-50 h-(--sticky-nav-height) w-full",
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
					? "top-(--top-nav-top-offset) right-(--top-nav-right-offset) left-(--top-nav-left-offset) h-(--top-nav-height)"
					: "right-(--bottom-nav-right-offset) bottom-(--bottom-nav-bottom-offset) left-(--bottom-nav-left-offset) h-(--bottom-nav-height)",
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
				"fixed inset-x-0 right-(--bottom-nav-right-offset) bottom-(--bottom-nav-bottom-offset) left-(--bottom-nav-left-offset) z-50 h-(--bottom-nav-height) min-wf-responsive-nav:top-(--top-nav-top-offset) min-wf-responsive-nav:right-(--top-nav-right-offset) min-wf-responsive-nav:bottom-auto min-wf-responsive-nav:left-(--top-nav-left-offset) min-wf-responsive-nav:h-(--top-nav-height)",
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
							"top-(--left-sidebar-top-offset) bottom-(--left-sidebar-bottom-offset) left-(--left-sidebar-left-offset)",
							collapsed
								? "w-(--left-sidebar-width-collapsed)"
								: "w-(--left-sidebar-width-expanded)",
						]
					: [
							"top-(--right-sidebar-top-offset) right-(--right-sidebar-right-offset) bottom-(--right-sidebar-bottom-offset)",
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
