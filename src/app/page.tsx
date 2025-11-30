import { ResponsiveNav } from "@/components/wireframe/responsive-nav";
import { Sidebar } from "@/components/wireframe/sidebar";

export default function HomePage() {
	return (
		<main className="bg-(image:--crossed-gradient) flex min-h-full items-center justify-center">
			<ResponsiveNav />
			<Sidebar />
			<div className="border-2 border-black bg-white px-2">CONTENT</div>
		</main>
	);
}
