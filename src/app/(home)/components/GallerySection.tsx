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
	{ src: "/galleries/gallery1.jpg", name: "PU", url: "/" },
	{ src: "/galleries/gallery2.jpg", name: "NC", url: "/" },
	{ src: "/galleries/gallery3.jpg", name: "Woodgrains PVC", url: "/" },
	{ src: "/galleries/gallery4.jpg", name: "AMC", url: "/" },
	{ src: "/galleries/gallery5.jpg", name: "Non-oil paper", url: "/" },
	{ src: "/galleries/gallery6.jpg", name: "Non-oil paper", url: "/" },
	{ src: "/galleries/gallery7.jpg", name: "Non-oil paper", url: "/" },
	{ src: "/galleries/gallery8.jpg", name: "Non-oil paper", url: "/" },
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
			<div className="columns-2 gap-5 lg:columns-4 md:columns-3">
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
