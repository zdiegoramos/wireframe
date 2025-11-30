import { StickyNav } from "@/components/wireframe/sticky-nav";

export default function HomePage() {
	return (
		<main className="bg-(image:--crossed-gradient) flex min-h-full flex-col items-center justify-center bg-stone-100">
			<div className="h-20 w-full bg-red-300">HEADER</div>
			<StickyNav />
			<div className="sticky top-2 h-20 w-20 bg-amber-500">hello</div>
			<div className="h-[1000px] border-2 border-black bg-white px-2 font-bold">
				CONTENT
			</div>
		</main>
	);
}
