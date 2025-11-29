import { cn } from "@/lib/utils";

export function Wireframe({ children }: { children: React.ReactNode }) {
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

				// RESPONSIVE NAVBAR AT TOP AND BOTTOM
				"**:data-wf-responsive-nav:h-16",
				"has-data-wf-responsive-nav:mb-16",
				"md:has-data-wf-responsive-nav:mt-16 md:has-data-wf-responsive-nav:mb-0",
				"has-data-wf-responsive-nav:has-data-[wf-sidebar=expanded]:**:data-wf-responsive-nav:ml-52",
				"has-data-wf-responsive-nav:has-data-[wf-sidebar=collapsed]:**:data-wf-responsive-nav:ml-16",
				// PASS DOWN THE DIMENSIONS FOR THE NAV, FOOTER AND LEFT SIDE
				// TOP NAVIGATION HEIGHT
				"**:data-wf-nav:h-16",
				// ADD LEFT SIDE MARGIN TO TOP NAV IF LEFT SIDE EXISTS
				"has-data-wf-nav:has-data-[wf-sidebar=expanded]:**:data-wf-nav:ml-52",
				"has-data-wf-nav:has-data-[wf-sidebar=collapsed]:**:data-wf-nav:ml-16",
				// BOTTOM FOOTER HEIGHT
				"**:data-wf-footer:h-16",
				// ADD LEFT SIDE MARGIN TO FOOTER IF LEFT SIDE EXISTS
				"has-data-wf-footer:has-data-[wf-sidebar=expanded]:**:data-wf-footer:ml-52",
				"has-data-wf-footer:has-data-[wf-sidebar=collapsed]:**:data-wf-footer:ml-16",
				// LEFT SIDE WIDTH
				"**:data-[wf-sidebar=expanded]:w-52",
				"**:data-[wf-sidebar=collapsed]:w-16",
			)}
		>
			{children}
		</div>
	);
}
