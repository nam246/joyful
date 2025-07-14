import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animation/FadeUp";
import SectionHeading from "@/components/layout/SectionHeading";

export type Gallery = {
	src: string;
	name: string;
	url: string;
};

const galleries = [
	{
		src: "/product-categories/cat1.jpg",
		name: "PU",
		url: "/",
	},
	{
		src: "/product-categories/cat2.jpg",
		name: "NC",
		url: "/",
	},
	{
		src: "/product-categories/cat3.jpg",
		name: "Woodgrains PVC",
		url: "/",
	},
	{
		src: "/product-categories/cat4.jpg",
		name: "AMC",
		url: "/",
	},
	{
		src: "/product-categories/cat5.jpg",
		name: "Non-oil paper",
		url: "/",
	},
];

export default function GallerySection() {
	return (
		<FadeUp className="pt-5">
			<SectionHeading title="gallery" />
			<div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-rows-2 gap-5">
				{galleries.map((gallery, index) => (
					<div key={index} className={`${index == 1 ? "col-span-2" : "col-span-1"}`}>
						<GalleryItem src={gallery.src} name={gallery.name} url={gallery.url} />
					</div>
				))}
			</div>
		</FadeUp>
	);
}

const GalleryItem = ({
	src,
	name,
	url,
}: {
	src: string;
	name: string;
	url: string;
}) => (
	<Link href={url} className="group block relative">
		<figure className="w-full h-full overflow-hidden">
			<Image
				className="w-full group-hover:scale-102 transition-transform"
				src={src}
				alt={name}
				width={800}
				height={500}
			/>
			<figcaption className="absolute top-5 left-5 text-white text-2xl group-hover:text-blue-900 uppercase font-bold">
				{name}
			</figcaption>
		</figure>
	</Link>
);
