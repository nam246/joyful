import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="text-center">
				<h2 className="font-bold text-9xl">404 Not Found</h2>
				<p>Could not find requested resource</p>
				<Link className="underline" href="/">Return Home</Link>
			</div>
		</div>
	);
}
