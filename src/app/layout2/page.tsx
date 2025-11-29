import { Footer } from "@/components/wireframe/footer";
import { Nav } from "@/components/wireframe/nav";
import { SidebarStatic } from "@/components/wireframe/sidebar-static";

export default function HomePage() {
	return (
		<main className="bg-amber-500">
			<Nav />
			<SidebarStatic />
			<div className="h-[1000px] w-20 bg-green-900"></div>
			<Footer />
		</main>
	);
}
