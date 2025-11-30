# Wireframe

The `<Wireframe/>` component ensures that all elements are positioned correctly in the viewport, based on the components present on each route. If `/new` has a left sidebar and a top navbar, the content will be moved down and right, using margins, to prevent the positioned components from covering the content. 

## Installation

1. Add the [`wireframe.tsx`](/src/components/ui/wireframe.tsx) file to your shadcn ui folder `@/components/ui`

2. Extend your TailwindCSS theme variables to add the wireframe variables.

```css
@theme {
	--sticky-nav-height: calc(var(--spacing) * 12);
	--sticky-nav-offset: calc(var(--spacing) * 0);
	--top-nav-height: calc(var(--spacing) * 16);
	--top-nav-offset: calc(var(--spacing) * 0);
	--bottom-nav-height: calc(var(--spacing) * 8);
	--bottom-nav-offset: calc(var(--spacing) * 0);
	--left-sidebar-width-collapsed: calc(var(--spacing) * 16);
	--right-sidebar-width-collapsed: calc(var(--spacing) * 16);
	--left-sidebar-width-expanded: calc(var(--spacing) * 52);
	--right-sidebar-width-expanded: calc(var(--spacing) * 52);
}
```

## Usage

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

2. Create a `<Wireframe/>` component. Current options `<WireframeNav/>`, `<WireframeStickyNav/>`, `<WireframeResponsiveNav/>`,`<WireframeCollapsableSidebar/>`.

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

3. Wrap your content using the `<WireframeContent/>` component and use your `<Wireframe/>` components.

```tsx page.tsx
import { WireframeContent } from "@/components/ui/wireframe";
import { TopNav } from "@/components/wireframe/top-nav";

export default function Page() {
	return (
		<WireframeContent>
			<TopNav />
		</WireframeContent>
	);
}
```