"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import { Product } from "@/types/types";
import ProductItem from "./ProductItem";

export default function ProductsSwiperGrid({
	products,
}: {
	products: Product[];
}) {
	return (
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
						rows: 2,
						fill: "row",
					},
				},
			}}
			modules={[Grid, Pagination]}
		>
			{products.map((product, index) => (
				<SwiperSlide key={index}>
					<ProductItem product={product} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
