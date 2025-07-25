import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileFooter from "@/components/layout/MobileFooter";
import SwiperSlider from "@/components/layout/SwiperSlider";

export const metadata: Metadata = {
	title: "Joyful decor - Home",
	description: "Where Creativity Comes to Life",
};

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<main className="min-h-screen">
				<SwiperSlider />
				{children}
			</main>
			<MobileFooter />
			<Footer />
		</>
	);
}
