import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Autoplay, Grid, Pagination } from "swiper/modules";
import { WC_Product } from "@/types/types";
import ProductItem from "./ProductItem";
import Popup from "./Popup";

export default function ProductsSwiperGrid({
	products,
}: {
	products: WC_Product[];
}) {
	const [selectedItem, setSelectedItem] = useState<WC_Product | null>(null);
	return (
		<>
			<Swiper
				slidesPerView={1} // Mặc định 1 slide trên mobile
				grid={{
					rows: 1, // Mặc định 1 row
				}}
				breakpoints={{
					0: {
						slidesPerView: 1,
						spaceBetween: 10,
						grid: {
							rows: 1,
						},
					},
					600: {
						slidesPerView: 2,
						spaceBetween: 20,
						grid: {
							rows: 1,
						},
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 20,
						grid: {
							rows: 2,
							fill: "row",
						},
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 20,
						grid: {
							rows: 3,
							fill: "row",
						},
					},
				}}
				autoplay={{ delay: 5000 }}
				modules={[Grid, Pagination, Autoplay]}
			>
				{products.map((product, index) => (
					<SwiperSlide key={index}>
						<ProductItem product={product} onClick={() => setSelectedItem(product)} />
					</SwiperSlide>
				))}
			</Swiper>
			{selectedItem && (
				<div
					className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
					onClick={() => setSelectedItem(null)} // Close when background is clicked
				>
					<div
						className="bg-gray-50 p-6 rounded max-w-xl w-full relative"
						onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
					>
						<button
							onClick={() => setSelectedItem(null)}
							className="bg-blue-900 px-2 rounded text-white hover:bg-blue-500 mb-2"
						>
							&times;
						</button>
						<Popup product={selectedItem} />
					</div>
				</div>
			)}
		</>
	);
}
