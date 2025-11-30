import { BottomNav } from "@/components/wireframe/bottom-nav";
import { Sidebar } from "@/components/wireframe/sidebar";

export default function Page() {
	return (
		<main className="bg-amber-500">
			<Sidebar />
			<div className="h-[1000px] w-20 bg-green-900" />
			<BottomNav />
		</main>
	);
}
