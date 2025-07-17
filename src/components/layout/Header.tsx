import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="fixed top-0 z-[999] w-full bg-white/10">
			<div className="header-wrapper container mx-auto">
				<div className="grid grid-cols-3 items-center">
					<div className="logo flex gap-5 justify-self-start">
						<Link href={`/`}>
							<Image src="/logo.png" width={80} height={80} alt="logo" />
						</Link>
					</div>
					<div className="slogan justify-self-center">
						<div className="slogan-h2 text-blue-900 font-bold uppercase">
							Joyful - Where Creativity Comes to Life
						</div>
					</div>
					<nav className="flex items-center text-uppercase font-bold justify-self-end">
						<Link
							className="p-2 text-white text-sm transition duration-300 uppercase hover:text-blue-900"
							href={"#about"}
						>
							about us
						</Link>
						<Link
							className="p-2 text-white text-sm transition duration-300 uppercase hover:text-blue-900"
							href={"#products"}
						>
							products
						</Link>
						<Link
							className="p-2 text-white text-sm transition duration-300 uppercase hover:text-blue-900"
							href={"/"}
						>
							youtube
						</Link>
						<Link
							className="p-2 text-white text-sm transition duration-300 uppercase hover:text-blue-900"
							href={"#contact"}
						>
							contact
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}
