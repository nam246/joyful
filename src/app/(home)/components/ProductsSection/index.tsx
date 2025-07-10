import SwiperGrid from "./ProductsSwiperGrid";
import FadeUp from "@/components/animation/FadeUp";
import { Product } from "@/types/types";
import SectionHeading from "@/components/layout/SectionHeading";

const products: Product[] = [
	{
		name: "JF PU6626",
		src: "https://cdn.bluenginer.com/06BsO4FTWWW3wkao/upload/image/20240304/85abaa54f266b10194b9a02bc89eb63d.jpg",
	},
	{
		name: "JF PU6230",
		src: "https://cdn.bluenginer.com/06BsO4FTWWW3wkao/upload/image/20231215/f765412d90faf8f4dc93d9e5bba8142a.jpg",
	},
	{
		name: "JF PU6240",
		src: "https://cdn.bluenginer.com/06BsO4FTWWW3wkao/upload/image/20231215/430600ef3bc2b89af0e459c0bb5189f2.jpg",
	},
	{
		name: "JF PU6278",
		src: "https://cdn.bluenginer.com/06BsO4FTWWW3wkao/upload/image/20231215/cc259eab88939e3c496796de4aa5c9e4.jpg",
	},
	{
		name: "JF PU6240",
		src: "https://cdn.bluenginer.com/06BsO4FTWWW3wkao/upload/image/products/M91229-1-300x300.jpg",
	},
	{
		name: "JF 009",
		src: "https://cdn.bluenginer.com/06BsO4FTWWW3wkao/upload/image/products/M91099-1Z-300x300.jpg",
	},
	{
		name: "JF 1905",
		src: "https://cdn.bluenginer.com/06BsO4FTWWW3wkao/upload/image/20231215/9d81dd805909ea46115731b4ea15a19f.jpg",
	},
	{
		name: "JF 2345",
		src: "https://cdn.bluenginer.com/06BsO4FTWWW3wkao/upload/image/20231215/1318ade9052f3c42f1dd39de4683a2b9.jpg",
	},
	{
		name: "JF 4567",
		src: "https://cdn.bluenginer.com/06BsO4FTWWW3wkao/upload/image/20231215/1318ade9052f3c42f1dd39de4683a2b9.jpg",
	},
];

export default function ProductsSection() {
	return (
		<FadeUp className="pt-5">
			<SectionHeading title="featured products" />
			<SwiperGrid products={products} />
		</FadeUp>
	);
}
