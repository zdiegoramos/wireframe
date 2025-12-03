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
	--breakpoint-wf-nav: 40rem; /* 640px */
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
import { WireframeNav } from "@/components/ui/wireframe";

export default function Page() {
	return (
		<>
			<WireframeNav position="top">
				<div className="flex h-full items-center justify-between px-4">
					<div>Logo</div>
					<nav>Navigation</nav>
				</div>
			</WireframeNav>
			<div className="p-4">
				{/* Your content - margins adjust automatically */}
			</div>
		</>
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
		topLeft: "sidebar",
		topRight: "sidebar",
		bottomLeft: "navbar",
		bottomRight: "navbar",
	}}
	responsiveNavCorners={{
		left: "navbar",  
		right: "sidebar",
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
		// STICKY NAV
		"--sticky-nav-height": 12,
		"--sticky-nav-top-offset": 0,

		// TOP NAV
		"--top-nav-height": 16,
		"--top-nav-left-offset": 0,
		"--top-nav-right-offset": 0,
		"--top-nav-top-offset": 0,
		"--top-nav-bottom-offset": 0,

		// BOTTOM NAV
		"--bottom-nav-height": 8,
		"--bottom-nav-left-offset": 0,
		"--bottom-nav-right-offset": 0,
		"--bottom-nav-top-offset": 0,
		"--bottom-nav-bottom-offset": 0,

		// LEFT SIDEBAR
		"--left-sidebar-width-collapsed": 16,
		"--left-sidebar-width-expanded": 52,
		"--left-sidebar-left-offset": 0,
		"--left-sidebar-right-offset": 0,
		"--left-sidebar-top-offset": 0,
		"--left-sidebar-bottom-offset": 0,

		// RIGHT SIDEBAR
		"--right-sidebar-width-expanded": 52,
		"--right-sidebar-width-collapsed": 16,
		"--right-sidebar-left-offset": 0,
		"--right-sidebar-right-offset": 0,
		"--right-sidebar-top-offset": 0,
		"--right-sidebar-bottom-offset": 0,
	}}
>
	{children}
</Wireframe>
```

Note: Numeric values are multiplied by [tailwindcss `--spacing`](https://tailwindcss.com/docs/theme#default-theme-variable-reference) variable (default `0.25rem`). If you need any other unit, use a string value (e.g., `"64px"`, `"10rem"`).

## Component Reference

### `<Wireframe>`

Root component that provides context. Wrap your app at the layout level.

**Props:**
- `navCorners?` - Control corner behavior for fixed navs
  ```tsx
  {
    topLeft?: "navbar" | "sidebar";
    topRight?: "navbar" | "sidebar";
    bottomLeft?: "navbar" | "sidebar";
    bottomRight?: "navbar" | "sidebar";
  }
  ```
- `responsiveNavCorners?` - Control corner behavior for responsive nav
  ```tsx
  {
    left?: "navbar" | "sidebar";
    right?: "navbar" | "sidebar";
  }
  ```
- `cssVariables?` - Override default dimensions and spacing
  ```tsx
  Record<WireframeCSSVariables, string>
  ```

### `<WireframeNav>`

Navbar component that can be fixed or responsive.

**Props:**
- `position`: `"top"` | `"bottom"` | `"responsive"` (default: `"top"`)
  - `"top"`: Fixed navbar at the top
  - `"bottom"`: Fixed navbar at the bottom
  - `"responsive"`: Positions at bottom on mobile and top on desktop (breakpoint-based)

### `<WireframeStickyNav>`

Sticky navbar that scrolls with content until reaching the top.

### `<WireframeSidebar>`

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
				// STICKY NAV
				"--sticky-nav-height": 12,

				// LEFT SIDEBAR
				"--left-sidebar-width-collapsed": 16,
				"--left-sidebar-width-expanded": 52,
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
				// TOP NAV
				"--top-nav-height": 16,

				// BOTTOM NAV
				"--bottom-nav-height": 8,

				// LEFT SIDEBAR
				"--left-sidebar-width-collapsed": 16,
				"--left-sidebar-width-expanded": 52,
			}}
		>
			{children}
		</Wireframe>
	);
}
```

```tsx
// app/(dashboard)/layout.tsx
import { DashboardWireframe } from "@/components/wireframe/dashboard-wireframe";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return <DashboardWireframe>{children}</DashboardWireframe>;
}
```

### Nested Wireframes

`<Wireframe>`s must not be nested because navbars and sidebars are positioned using `position: fixed` and `position: sticky`, which are relative to the viewport, not the parent element. Thus, there must only be one `<Wireframe>` per page.

## Caveats

### Full-Height Content

Setting `height: 100%` won't work on child content. The `<Wireframe>` root is `position: relative`, use `absolute inset-0` to fill the viewport, instead of `h-full`:

```tsx
<Wireframe>
  <WireframeNav position="top">
    <div>Navigation</div>
  </WireframeNav>
  
	{ /* WILL NOT WORK */ }
	{ /* <div className="h-full"> */ }

  {/* Content that fills the entire viewport */}
  <div className="absolute inset-0">
		{/* Your content here */}
  </div>
</Wireframe>
```

**Use cases:** Vertically centered layouts.

**Note:** You'll need to handle overflow and scrolling manually when using `absolute inset-0`.
