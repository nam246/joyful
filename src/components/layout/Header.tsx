import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="fixed top-0 z-[999] w-full bg-white/30 backdrop-blur-md shadow-md">
			<div className="container mx-auto px-4 py-2">
				<div className="grid grid-cols-2 lg:grid-cols-3 items-center">
					{/* Logo */}
					<div className="flex items-center justify-start">
						<Link href="/">
							<Image src="/logo.png" width={64} height={64} alt="Joyful Logo" />
						</Link>
					</div>

					{/* Slogan */}
					<div className="text-center hidden md:hidden lg:block">
						<h2 className="text-blue-900 font-bold uppercase text-sm sm:text-base md:text-lg">
							Joyful - Where Creativity Comes to Life
						</h2>
					</div>

					{/* Navigation */}
					<nav className="flex justify-end items-center gap-4">
						<Link
							className="text-gray-700 text-sm font-semibold uppercase hover:text-blue-900 transition"
							href="#about"
						>
							About Us
						</Link>
						<Link
							className="text-gray-700 text-sm font-semibold uppercase hover:text-blue-900 transition"
							href="#products"
						>
							Products
						</Link>
						<Link
							className="text-gray-700 text-sm font-semibold uppercase hover:text-blue-900 transition"
							href="https://www.youtube.com/@congtyJOYFUL"
							target="_blank"
							rel="noopener noreferrer"
						>
							YouTube
						</Link>
						<Link
							className="text-gray-700 text-sm font-semibold uppercase hover:text-blue-900 transition"
							href="#contact"
						>
							Contact
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}
