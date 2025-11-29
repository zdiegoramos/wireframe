import { Footer } from "@/components/wireframe/footer";
import { Nav } from "@/components/wireframe/nav";

export default function HomePage() {
	return (
		<main className="bg-amber-500">
			<Nav />
			<div className="h-[1000px] w-20 bg-green-900" />
			<Footer />
		</main>
	);
}
