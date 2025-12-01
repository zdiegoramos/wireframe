# Wireframe

The `<Wireframe/>` component ensures that all elements are positioned correctly in the viewport, based on the components present on each route. If `/new` has a left sidebar and a top navbar, the content will be moved down and right, using margins, to prevent the positioned components from covering the content. 

## Installation

1. Add the [`wireframe/index.tsx`](/src/components/ui/wireframe/index.tsx) file to your shadcn ui folder `@/components/ui`

2. Add the responsive nav breakpoint variable to your TailwindCSS configuration.

```css
@theme {
	--breakpoint-wf-responsive-nav: 40rem;
}
```

This controls when at which breakpoint the responsive nav moves from the bottom to the top

3. Set the desired dimensions and offsets for your wireframe in the style tag of the `<Wireframe>` component. You can also configue how the corners will be handled. Settings these values is optional. If you set a value it will overwrite the default value.

```tsx
import { Wireframe } from "@/components/ui/wireframe";

export function HomeWireframe({ children }: { children: React.ReactNode }) {
	return (
		<Wireframe
			navCorners={{
				bottomLeft: "navbar",
				bottomRight: "navbar",
				topLeft: "sidebar",
				topRight: "sidebar",
			}}
			responsiveNavCorners={{
				left: "navbar",
				right: "sidebar",
			}}
			cssVariables={{
				"--sticky-nav-height": "calc(var(--spacing) * 12)",
				"--sticky-nav-top-offset": "calc(var(--spacing) * 0)",
				"--top-nav-height": "calc(var(--spacing) * 16)",
				"--top-nav-top-offset": "calc(var(--spacing) * 0)",
				"--top-nav-left-offset": "calc(var(--spacing) * 0)",
				"--top-nav-right-offset": "calc(var(--spacing) * 0)",
				"--top-nav-bottom-offset": "calc(var(--spacing) * 0)",
				"--bottom-nav-height": "calc(var(--spacing) * 8)",
				"--bottom-nav-top-offset": "calc(var(--spacing) * 0)",
				"--bottom-nav-left-offset": "calc(var(--spacing) * 0)",
				"--bottom-nav-right-offset": "calc(var(--spacing) * 0)",
				"--bottom-nav-bottom-offset": "calc(var(--spacing) * 0)",
				"--left-sidebar-width-collapsed": "calc(var(--spacing) * 16)",
				"--right-sidebar-width-collapsed": "calc(var(--spacing) * 16)",
				"--left-sidebar-width-expanded": "calc(var(--spacing) * 52)",
				"--right-sidebar-width-expanded": "calc(var(--spacing) * 52)",
				"--right-sidebar-right-offset": "calc(var(--spacing) * 0)",
				"--right-sidebar-top-offset": "calc(var(--spacing) * 0)",
				"--right-sidebar-bottom-offset": "calc(var(--spacing) * 0)",
				"--right-sidebar-left-offset": "calc(var(--spacing) * 0)",
				"--left-sidebar-left-offset": "calc(var(--spacing) * 0)",
				"--left-sidebar-top-offset": "calc(var(--spacing) * 0)",
				"--left-sidebar-bottom-offset": "calc(var(--spacing) * 0)",
				"--left-sidebar-right-offset": "calc(var(--spacing) * 0)",
			}}
		>
			{children}
		</Wireframe>
	);
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

## Using multiple `<Wireframe/>`s

The `<Wireframe/>` components are self contained so you can create multiple wireframes with differrent variables. You may define them using this naming convention `{name}-wireframe.tsx`. This is useful, if for example, you want your navbar to have an offset in the landing page, and also have another navbar in your dashboard page with no offset.

```tsx
// @/components/ui/home-wireframe.tsx
import { Wireframe } from "@/components/ui/wireframe";

export function HomeWireframe({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Wireframe
			cssVariables={
				{
					"--sticky-nav-height": "calc(var(--spacing) * 12)",
					// ...
				} as React.CSSProperties
			}
		>
			{children}
		</Wireframe>
	);
}
```

```tsx
// Home page.tsx
import { HomeWireframe } from "@/components/ui/home-wireframe";

export default function Page() {
	return (
		<HomeWireframe>{children}</HomeWireframe>
	);
}
```

```tsx
// @/components/ui/dashboard-wireframe
import { Wireframe } from "@/components/ui/wireframe";

export function DashboardWireframe({ children }: { children: React.ReactNode }) {
	return (
		<Wireframe
			cssVariables={
				{
					"--sticky-nav-height": "calc(var(--spacing) * 12)",
					// ...
				} as React.CSSProperties
			}
		>
			{children}
		</Wireframe>
	);
}
```

```tsx layout.tsx
// Dashboard layout.tsx
import { DashboardWireframe } from "@/components/ui/dashboard-wireframe";

export default function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<DashboardWireframe>{children}</DashboardWireframe>
	);
}
```

Warning: If you have multiple `<Wireframe/>`s, you can't return a `<Wireframe/>` at the root layout because if will be in conflict with other `<Wireframe/>`s.

## Nested Wireframes

Nested wireframes are not recommended, but if you need to have nested `<Wireframe/>`s duplicate the `<Wireframe/>` component and rename the namespace `wf`, for all `data-` attirbutes.

Update all instances of the following:

```
data-wf-${position}-sidebar
data-wf-responsive-nav
data-wf-${position}-nav
data-wf-sticky-nav
data-wf-content
```

In the `<Wireframe/>` config and all the `<Wireframe/>` components.

For example:

```
data-wf2-${position}-sidebar
data-wf2-responsive-nav
data-wf2-${position}-nav
data-wf2-sticky-nav
data-wf2-content
```

This will prevent conflicts between the wireframes.
