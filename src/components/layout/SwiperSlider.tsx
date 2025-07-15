"use client";

import Image from "next/image";

import ScaleUp from "@/components/animation/ScaleUp";

// import Swiper core and required modules
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
	EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const sliders = [
	{
		bg: "/carousel/LK.jpg",
		caption: {
			title: "Joyful Decor",
			description: "Best deal for your decoration",
		},
	},
	{
		bg: "/carousel/Acrylic-banner-chinh.jpg",
		caption: {
			title: "",
			description: "",
		},
	},
];

export default function SwiperSlider() {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
			spaceBetween={50}
			navigation
			// pagination={{ clickable: false }}
			// scrollbar={{ draggable: true }}
			loop
			autoplay={{ delay: 5000 }}
			// onSwiper={(swiper) => console.log(swiper)}
			// onSlideChange={() => console.log("slide change")}
			effect={"fade"}
		>
			{sliders.map((slider, index) => (
				<SwiperSlide key={index}>
					<ScaleUp>
						<figure className="w-full h-screen overflow-hidden">
							<Image
								src={slider.bg}
								alt={slider.caption.title}
								fill
								className="w-full h-full object-cover"
							/>
							<figcaption className="absolute bottom-5 left-0 right-0 text-center">
								<h1>{slider.caption.title != "" ? slider.caption.title : ""}</h1>
								<p>
									{slider.caption.description != "" ? slider.caption.description : ""}
								</p>
							</figcaption>
						</figure>
					</ScaleUp>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
