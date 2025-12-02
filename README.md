# Wireframe

A React component system for building fixed/sticky navigation layouts with automatic content spacing. Define your navbar and sidebar dimensions once, and the content area adjusts automatically.

## What It Does

- **Automatic spacing**: Content automatically adjusts margins based on navbar/sidebar presence and dimensions
- **Multiple navigation types**: Fixed top/bottom navs, sticky navs, responsive navs, and collapsible sidebars
- **Corner control**: Define which element (navbar or sidebar) occupies each corner
- **CSS variable-driven**: Configure all dimensions and offsets through CSS variables
- **Multiple instances**: Use different configurations for different sections (e.g., blog vs. dashboard)

## Installation

**1. Add the component file**

Copy [`wireframe.tsx`](/src/components/ui/wireframe.tsx) to your project: `@/components/ui/wireframe.tsx`

**2. Configure TailwindCSS breakpoint**

Add the responsive nav breakpoint to your CSS (controls when responsive nav switches from bottom to top):

```css
@theme {
	--breakpoint-wf-responsive-nav: 40rem; /* 640px */
}
```

**3. Wrap your app**

```tsx
// app/layout.tsx
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

**4. Build your layout**

```tsx
// app/page.tsx
import { WireframeContent, WireframeNav } from "@/components/ui/wireframe";

export default function Page() {
	return (
		<WireframeContent>
			<WireframeNav position="top">
				<div className="flex h-full items-center justify-between px-4">
					<div>Logo</div>
					<nav>Navigation</nav>
				</div>
			</WireframeNav>
			<div className="p-4">
				{/* Your content - margins adjust automatically */}
			</div>
		</WireframeContent>
	);
}
```

## Configuration

All configuration is optional and uses sensible defaults.

### Corner Behavior

Control which element occupies each corner when navbars and sidebars overlap:

```tsx
<Wireframe
	navCorners={{
		topLeft: "sidebar",    // or "navbar"
		topRight: "sidebar",
		bottomLeft: "navbar",
		bottomRight: "navbar",
	}}
	responsiveNavCorners={{
		left: "navbar",   // Controls left corners on mobile
		right: "sidebar", // Controls right corners on mobile
	}}
>
	{children}
</Wireframe>
```

### CSS Variables

Customize dimensions and spacing by passing `cssVariables`. All values shown are defaults:

```tsx
<Wireframe
	cssVariables={{
		// Sticky nav
		"--sticky-nav-height": "calc(var(--spacing) * 12)",
		"--sticky-nav-top-offset": "calc(var(--spacing) * 0)",

		// Top/bottom navs
		"--top-nav-height": "calc(var(--spacing) * 16)",
		"--bottom-nav-height": "calc(var(--spacing) * 8)",
		// Each nav has: left-offset, right-offset, top-offset, bottom-offset

		// Sidebars
		"--left-sidebar-width-collapsed": "calc(var(--spacing) * 16)",
		"--left-sidebar-width-expanded": "calc(var(--spacing) * 52)",
		// Each sidebar has: left-offset, right-offset, top-offset, bottom-offset
		// Same variables exist for right-sidebar
	}}
>
	{children}
</Wireframe>
```

## Component Reference

### `<Wireframe>`

Root component that provides context. Wrap your app at the layout level.

**Props:**
- `navCorners`: Control corner behavior for fixed navs
- `responsiveNavCorners`: Control corner behavior for responsive nav
- `cssVariables`: Override default dimensions and spacing

### `<WireframeContent>`

Wrapper for your page content. Automatically adjusts margins based on active navbars/sidebars.

### `<WireframeNav>`

Fixed navbar component.

**Props:**
- `position`: `"top"` | `"bottom"` (default: `"top"`)

### `<WireframeStickyNav>`

Sticky navbar that scrolls with content until reaching the top.

### `<WireframeResponsiveNav>`

Navbar that positions at bottom on mobile and top on desktop (breakpoint-based).

### `<WireframeCollapsableSidebar>`

Sidebar with collapsed/expanded states.

**Props:**
- `position`: `"left"` | `"right"` (default: `"left"`)
- `collapsed`: `boolean` (default: `false`)

## Advanced Usage

### Multiple Wireframe Instances

Create separate wireframe configurations for different sections of your app (e.g., blog vs. dashboard):

> **Note:** When using multiple wireframes, do NOT add a `<Wireframe>` at the root layout because it will conflict with section-specific wireframes.

#### Example: Blog Layout

```tsx
// components/wireframe/blog-wireframe.tsx
import { Wireframe } from "@/components/ui/wireframe";

export function BlogWireframe({ children }: { children: React.ReactNode }) {
	return (
		<Wireframe
			cssVariables={{
				"--top-nav-height": "calc(var(--spacing) * 20)",
				// Custom configuration for blog
			}}
		>
			{children}
		</Wireframe>
	);
}
```

```tsx
// app/(blog)/layout.tsx
import { BlogWireframe } from "@/components/wireframe/blog-wireframe";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return <BlogWireframe>{children}</BlogWireframe>;
}
```

#### Example: Dashboard Layout

```tsx
// components/wireframe/dashboard-wireframe.tsx
import { Wireframe } from "@/components/ui/wireframe";

export function DashboardWireframe({ children }: { children: React.ReactNode }) {
	return (
		<Wireframe
			cssVariables={{
				"--left-sidebar-width-expanded": "calc(var(--spacing) * 64)",
				// Custom configuration for dashboard
			}}
		>
			{children}
		</Wireframe>
	);
}
```

### Nested Wireframes

> **Warning:** Nested wireframes are not recommended. If required, duplicate `wireframe.tsx` and change the namespace for all `data-` attributes.

Change these attributes throughout the file:
- `data-wf-${position}-sidebar` → `data-wf2-${position}-sidebar`
- `data-wf-responsive-nav` → `data-wf2-responsive-nav`
- `data-wf-${position}-nav` → `data-wf2-${position}-nav`
- `data-wf-sticky-nav` → `data-wf2-sticky-nav`
- `data-wf-content` → `data-wf2-content`

This prevents attribute conflicts between nested wireframes.
