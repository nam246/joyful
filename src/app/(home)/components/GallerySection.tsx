// GallerySection.tsx
"use client";

import Image from "next/image";
import FadeUp from "@/components/animation/FadeUp";
import SectionHeading from "@/components/layout/SectionHeading";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { useState } from "react";

export type Gallery = {
	src: string;
	name: string;
	url: string;
};

const images: Gallery[] = [
	{ src: "/product-categories/cat1.jpg", name: "PU", url: "/" },
	{ src: "/product-categories/cat2.jpg", name: "NC", url: "/" },
	{ src: "/product-categories/cat3.jpg", name: "Woodgrains PVC", url: "/" },
	{ src: "/product-categories/cat4.jpg", name: "AMC", url: "/" },
	{ src: "/product-categories/cat5.jpg", name: "Non-oil paper", url: "/" },
];

export default function GallerySection() {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const slides = images.map((img) => ({
		src: img.src,
		alt: img.name,
	}));

	const handleClick = (index: number) => {
		setCurrentIndex(index);
		setLightboxOpen(true);
	};

	return (
		<FadeUp className="pt-5">
			<SectionHeading title="gallery" />
			<div className="columns-2 gap-5">
				{images.map((image, index) => (
					<div
						key={index}
						className={`aspect-auto mb-5`}
						onClick={() => handleClick(index)}
					>
						<GalleryItem src={image.src} name={image.name} />
					</div>
				))}
			</div>

			<Lightbox
				open={lightboxOpen}
				close={() => setLightboxOpen(false)}
				slides={slides}
				index={currentIndex}
			/>
		</FadeUp>
	);
}

const GalleryItem = ({ src, name }: { src: string; name: string }) => (
	<div className="group block relative cursor-pointer">
		<figure className="w-full h-full overflow-hidden rounded-md">
			<Image
				className="w-full group-hover:scale-102 transition-transform duration-300"
				src={src}
				alt={`gallery ${name}`}
				width={800}
				height={500}
			/>
			<figcaption className="absolute top-2 left-2 text-white text-sm uppercase font-bold">
				{/* {name} */}
			</figcaption>
		</figure>
	</div>
);
