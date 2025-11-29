export function Footer() {
	return (
		<div
			className="fixed inset-x-0 bottom-0 z-50 flex justify-center border-t bg-red-700"
			data-wf-footer
		>
			<div className="z-50 flex h-full w-full items-center justify-between">
				<div className="flex h-full items-center gap-2">Logo</div>
				<nav className="flex h-full items-center gap-4">Menu</nav>
			</div>
		</div>
	);
}
