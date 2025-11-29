export function Nav() {
	return (
		<div
			className="fixed inset-x-0 top-0 z-50 flex justify-center border-b bg-emerald-600/40"
			data-nav
		>
			<div className="flex h-full w-full items-center justify-between">
				<div className="flex h-full items-center gap-2">Logo</div>
				<nav className="flex h-full items-center gap-4">Link 1</nav>
			</div>
		</div>
	);
}
