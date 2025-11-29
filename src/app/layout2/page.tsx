import { BottomNav } from "@/components/wireframe/bottom-nav";
import { SidebarStatic } from "@/components/wireframe/sidebar-static";
import { TopNav } from "@/components/wireframe/top-nav";

export default function HomePage() {
	return (
		<main className="bg-amber-500">
			<TopNav />
			<SidebarStatic />
			<div className="h-[1000px] w-20 bg-green-900" />
			<BottomNav />
		</main>
	);
}
