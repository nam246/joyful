import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/types";

const ProductItem = ({ product }: { product: Product }) => (
	<Link className="group block" href={"/"}>
		<figure className="overflow-hidden h-[289px]">
			<Image
				className="transition-transform duration-300 group-hover:scale-110"
				src={product.src}
				alt={product.name}
				width="500"
				height="500"
			/>
			<figcaption className="absolute bottom-0 left-0 bg-gray-200/50">
				<h3 className="uppercase font-bold transition-colors group-hover:text-blue-900 p-2">
					{product.name}
				</h3>
			</figcaption>
		</figure>
	</Link>
);

export default ProductItem;
