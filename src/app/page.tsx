import { ResponsiveNav } from "@/components/wireframe/responsive-nav";
import { Sidebar } from "@/components/wireframe/sidebar";

export default function Page() {
	return (
		<main className="bg-(image:--crossed-gradient) flex min-h-full flex-col items-center justify-center bg-stone-100">
			<ResponsiveNav />
			<Sidebar />
			<div className="h-[1000px] border-2 border-black bg-white px-2 font-bold">
				CONTENT
			</div>
		</main>
	);
}
