export function SidebarStatic() {
	return (
		<div
			className="fixed inset-x-0 top-0 bottom-0 z-50 overflow-scroll border-r bg-blue-400 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			data-wf-sidebar="expanded"
		>
			<div className="flex min-h-full w-full items-center justify-between">
				lorem ipsum
			</div>
		</div>
	);
}
