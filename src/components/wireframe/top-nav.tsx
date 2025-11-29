import { WireframeNav } from "@/components/ui/wireframe";

export function TopNav() {
	return (
		<WireframeNav>
			<div className="flex h-full w-full items-center justify-between bg-fuchsia-500/40">
				<div className="flex h-full items-center gap-2">Logo</div>
				<nav className="flex h-full items-center gap-4">Link 1</nav>
			</div>
		</WireframeNav>
	);
}
