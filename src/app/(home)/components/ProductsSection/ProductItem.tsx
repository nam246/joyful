import Image from "next/image";
import { WC_Product } from "@/types/types";

const ProductItem = ({
	product,
	onClick,
}: {
	product: WC_Product;
	onClick: (event: React.MouseEvent<HTMLElement>) => void;
}) => (
	<>
		<div className="group relative block cursor-pointer rounded-md overflow-hidden" onClick={onClick}>
			<figure className="overflow-hidden h-full">
				<Image
					className="transition-transform w-full h-full object-cover duration-300 group-hover:scale-110"
					src={product.images?.[0]?.src}
					alt={product.name}
					width="500"
					height="500"
				/>
				<figcaption className="absolute bottom-0 left-0 bg-gray-200/20 group-hover:bg-blue-900/50 transition-all">
					<h3 className="uppercase font-bold transition-colors text-slate-800 group-hover:text-white p-2">
						{product.name}
					</h3>
				</figcaption>
			</figure>
		</div>
	</>
);

export default ProductItem;
