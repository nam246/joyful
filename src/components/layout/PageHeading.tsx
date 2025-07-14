export default function PageHeading({ title }: { title: string }) {

	return (
		<div className="bg-slate-500 pt-[var(--header-height,70px)]">
			<div className="container mx-auto">
				<h1 className="font-bold text-5xl text-white py-[1em]">{title}</h1>
			</div>
		</div>
	);
}
