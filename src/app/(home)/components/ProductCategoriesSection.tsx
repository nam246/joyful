import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animation/FadeUp";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/layout/SectionHeading";

const productCategories = [
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

export default function ProductCategoriesSection() {
	return (
		<FadeUp className="pt-5">
			<SectionHeading title="product categories" />
			<div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-rows-2 gap-5">
				{productCategories.map((cat, index) => (
					<div key={index} className={`${index == 1 ? "col-span-2" : "col-span-1"}`}>
						<CategoryItem src={cat.src} name={cat.name} url={cat.url} />
					</div>
				))}
			</div>
		</FadeUp>
	);
}

const CategoryItem = ({
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
		<div className="absolute bottom-5 left-5 text-white group-hover:translate-x-1 transition-transform group-hover:text-blue-900">
			View all <ArrowRight className="inline" />
		</div>
	</Link>
);
