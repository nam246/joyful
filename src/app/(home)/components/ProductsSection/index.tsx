"use client";
import { useEffect, useState } from "react";
import SwiperGrid from "./ProductsSwiperGrid";
import FadeUp from "@/components/animation/FadeUp";
import { WC_Product } from "@/types/types";
import SectionHeading from "@/components/layout/SectionHeading";
import { getProductsByCategoryID } from "@/lib/woocommerce";

export default function ProductsSection({
	title,
	catID,
}: {
	title: string;
	catID: string;
}) {
	const filters = [
		"Vân gỗ cao cấp",
		"Vân đơn sắc",
		"Vân bóng mờ",
		"Vân đá cẩm thạch",
		"Vân vải",
		"Vân bê tông",
		"Vân kim loại",
		"Vân tráng gương",
	];
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [filter, setFilter] = useState<string>("");
	const [products, setProducts] = useState<WC_Product[]>([]);

	useEffect(() => {
		const getProducts = async (catID: string, attrTerm: string) => {
			setLoading(true);
			try {
				const data = await getProductsByCategoryID(catID, attrTerm);
				setProducts(data);
				setLoading(false);
			} catch (error) {
				setError(true);
				console.log(error);
			}
		};

		getProducts(catID, filter);
	}, [filter]);

	const Loading = (
		<div className="flex justify-center py-5">
			<div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
		</div>
	);

	if (error) {
		return (<p>cannot get products</p>)
	}

	return (
		<FadeUp className="pt-5">
			<SectionHeading title={title} />
			<ul className="flex flex-wrap gap-5 mb-5">
				{filters.map((filter, index) => (
					<li
						key={index}
						className="rounded-md bg-white text-gray-600 w-fit p-2 cursor-pointer hover:bg-blue-900 hover:text-white transition-all"
						onClick={() => setFilter(filter)}
					>
						{filter}
					</li>
				))}
			</ul>
			{loading ? Loading : <SwiperGrid products={products} />}
		</FadeUp>
	);
}
