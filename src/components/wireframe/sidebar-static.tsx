import { WireframeCollapsableSidebar } from "@/components/ui/wireframe";

export function SidebarStatic() {
	return (
		<WireframeCollapsableSidebar collapsed={false} position="left">
			<div className="bg-(image:--crossed-gradient) flex min-h-full w-full items-center justify-between bg-lime-500/40">
				Sidebar
			</div>
		</WireframeCollapsableSidebar>
	);
}
