import Image from "next/image";
import Link from "next/link";
import { WC_Product } from "@/types/types";

export default function Popup({ product }: { product: WC_Product }) {
	return (
		<div className="w-full h-full">
			<figure className="overflow-hidden mb-5">
				<Image
					className="transition-transform duration-300 group-hover:scale-110"
					src={product.images?.[0]?.src}
					alt={product.name}
					width="1920"
					height="1080"
				/>
			</figure>
			<h3 className="uppercase font-bold text-2xl transition-colors text-slate-800 mb-5">
				{product.name}
			</h3>
			<div
				className="mb-5"
				dangerouslySetInnerHTML={{ __html: product.short_description }}
			></div>
			<div className="mb-5 font-bold text-lg">Contact us</div>
			<div className="flex items-center gap-5">
				<Link
					target="_blank"
					className="bg-blue-900 text-white rounded-md px-5 py-2"
					href="https://zalo.me/0345939514"
				>
					Zalo
				</Link>
				<Link
					target="_blank"
					className="bg-blue-900 text-white rounded-md px-5 py-2"
					href="https://www.facebook.com/congtyJOYFUL"
				>
					Facebook
				</Link>
			</div>
		</div>
	);
}
