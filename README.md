# Wireframe

The `<Wireframe/>` component ensures that all elements are positioned correctly in the viewport, based on the components present on each route. If `/new` has a left sidebar and a top navbar, the content will be moved down and right, using margins, to prevent the positioned components from covering the content. 

Instructions

1. Add the `<Wireframe/>` component to your layout. 

```tsx layout.tsx
import { Wireframe } from "@/components/ui/wireframe";

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>
				<Wireframe>{children}</Wireframe>
			</body>
		</html>
	);
}
```

2. Create a `<Wireframe/>` component. Current options `<WireframeNav/>`, `<WireframeResponsiveNav/>`,`<WireframeCollapsableSidebar/>`.

```tsx /components/wireframe/top-nav.tsx
import { WireframeNav } from "@/components/ui/wireframe";

export function TopNav() {
	return (
		<WireframeNav>
			<div className="flex h-full w-full items-center justify-between">
				<div>Logo</div>
			</div>
		</WireframeNav>
	);
}
```

3. Use your `<Wireframe/>` components.

```tsx page.tsx
import { TopNav } from "@/components/wireframe/top-nav";

export default function HomePage() {
	return (
		<main>
			<TopNav />
		</main>
	);
}
```