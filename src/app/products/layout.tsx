import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
	title: "Joyful decor - Categories",
	description: "Joyful products",
};

export default function ProductsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<main className="min-h-screen">{children}</main>
			<Footer />
		</>
	);
}
