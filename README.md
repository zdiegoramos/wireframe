# Wireframe

The `<Wireframe/>` component ensures that all elements are positioned correctly in the viewport, based on the components present on each route. If `/new` has a left sidebar and a top navbar, the content will be moved down and right, using margins, to prevent the positioned components from covering the content. 

## Installation

1. Add the [`wireframe.tsx`](/src/components/ui/wireframe.tsx) file to your shadcn ui folder `@/components/ui`

2. Add the responsive nav breakpoint variable to your TailwindCSS configuration.

```css
@theme {
	--breakpoint-wf-responsive-nav: 40rem; /* sm: 40rem (640px) */
}
```

This controls when at which [breakpoint](https://tailwindcss.com/docs/responsive-design#overview) the responsive nav moves from the bottom to the top

3. Configure your `<Wireframe>`.

Set the desired dimensions and offsets for your sidebars and navbars by passing `cssVariables`.

Configure how the corners behave by passing `navCorners` and/or `responsiveNavCorners` for non-responsive and responsive navbars, respectivelly. For non-responsive navs, you can choose to display either the `navbar` or `sidebar` for each corner. For responsive navs you can choose to display either the  `navbar` or `sidebar` on the left side or right side corners.

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
					// STICKY NAV
					"--sticky-nav-height": "calc(var(--spacing) * 12)",
					"--sticky-nav-top-offset": "calc(var(--spacing) * 0)",

					// TOP NAV
					"--top-nav-height": "calc(var(--spacing) * 16)",
					"--top-nav-left-offset": "calc(var(--spacing) * 0)",
					"--top-nav-right-offset": "calc(var(--spacing) * 0)",
					"--top-nav-top-offset": "calc(var(--spacing) * 0)",
					"--top-nav-bottom-offset": "calc(var(--spacing) * 0)",

					// BOTTOM NAV
					"--bottom-nav-height": "calc(var(--spacing) * 8)",
					"--bottom-nav-left-offset": "calc(var(--spacing) * 0)",
					"--bottom-nav-right-offset": "calc(var(--spacing) * 0)",
					"--bottom-nav-top-offset": "calc(var(--spacing) * 0)",
					"--bottom-nav-bottom-offset": "calc(var(--spacing) * 0)",

					// LEFT SIDEBAR
					"--left-sidebar-width-collapsed": "calc(var(--spacing) * 16)",
					"--left-sidebar-width-expanded": "calc(var(--spacing) * 52)",
					"--left-sidebar-left-offset": "calc(var(--spacing) * 0)",
					"--left-sidebar-right-offset": "calc(var(--spacing) * 0)",
					"--left-sidebar-top-offset": "calc(var(--spacing) * 0)",
					"--left-sidebar-bottom-offset": "calc(var(--spacing) * 0)",

					// RIGHT SIDEBAR
					"--right-sidebar-width-expanded": "calc(var(--spacing) * 52)",
					"--right-sidebar-width-collapsed": "calc(var(--spacing) * 16)",
					"--right-sidebar-left-offset": "calc(var(--spacing) * 0)",
					"--right-sidebar-right-offset": "calc(var(--spacing) * 0)",
					"--right-sidebar-top-offset": "calc(var(--spacing) * 0)",
					"--right-sidebar-bottom-offset": "calc(var(--spacing) * 0)",
			}}
		>
			{children}
		</Wireframe>
	);
}
```

Configuring your `<Wireframe/>` is optional. If you set a value it will overwrite the default value.

## Usage

1. Add the `<Wireframe/>` component to your layout. 

```tsx layout.tsx
import { Wireframe } from "@/components/ui/wireframe";

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html>
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

Here's an example with a blog and a dashboard `<Wireframe/>`:

### Blog Wireframe

```tsx
// @/components/ui/wireframe/blog-wireframe.tsx
import { Wireframe } from "@/components/ui/wireframe";

export function BlogWireframe({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Wireframe
			cssVariables={{
				"--sticky-nav-height": "calc(var(--spacing) * 12)",
				// ...
			}}
		>
			{children}
		</Wireframe>
	);
}
```

```tsx
// @/app/(blog)/layout.tsx
import { BlogWireframe } from "@/components/wireframe/blog-wireframe";

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html>
			<body>
				<BlogWireframe>{children}</BlogWireframe>
			</body>
		</html>
	);
}

```

```tsx
// @/app/(blog)/blog/page.tsx
import { WireframeContent } from "@/components/ui/wireframe";
import { ResponsiveNav } from "@/components/wireframe/responsive-nav";
import { Sidebar } from "@/components/wireframe/sidebar";

export default function Page() {
	return (
		<WireframeContent>
			<ResponsiveNav />
			<Sidebar />
			<div>Lorem ipsum dolor</div>
		</WireframeContent>
	);
}
```

### Dashboard Wireframe

```tsx
// @/components/ui/wireframe/dashboard-wireframe.tsx
import { Wireframe } from "@/components/ui/wireframe";

export function DashboardWireframe({ children }: { children: React.ReactNode }) {
	return (
		<Wireframe
			cssVariables={{
				"--sticky-nav-height": "calc(var(--spacing) * 12)",
				// ...
			}}
		>
			{children}
		</Wireframe>
	);
}
```

```tsx
// @/app/(dashboard)/layout.tsx
import { DashboardWireframe } from "@/components/wireframe/dashboard-wireframe";

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html>
			<body>
				<DashboardWireframe>{children}</DashboardWireframe>
			</body>
		</html>
	);
}
```

```tsx
// @/app/(dashboard)/dashboard/page.tsx
import { WireframeContent } from "@/components/ui/wireframe";
import { ResponsiveNav } from "@/components/wireframe/responsive-nav";
import { Sidebar } from "@/components/wireframe/sidebar";

export default function Page() {
	return (
		<WireframeContent>
			<ResponsiveNav />
			<Sidebar />
			<div>Lorem ipsum dolor</div>
		</WireframeContent>
	);
}
```

Warning: If you have multiple `<Wireframe/>`s, you can't return a `<Wireframe/>` at the root layout because if will be in conflict with other `<Wireframe/>`s.

## Nested Wireframes

Nested wireframes are not recommended, but if you need to have nested `<Wireframe/>`s duplicate `wireframe.tsx` and rename the namespace `wf`, for all `data-` attirbutes.

Update all instances of the following:

```
data-wf-${position}-sidebar
data-wf-responsive-nav
data-wf-${position}-nav
data-wf-sticky-nav
data-wf-content
```

In the `<Wireframe/>` config and all the `<Wireframe/>` components in the `wireframe.tsx` file.

For example:

```
data-wf2-${position}-sidebar
data-wf2-responsive-nav
data-wf2-${position}-nav
data-wf2-sticky-nav
data-wf2-content
```

This will prevent conflicts between the wireframes.
