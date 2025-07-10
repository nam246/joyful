import SectionHeading from "@/components/layout/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animation/FadeUp";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
	return (
		<FadeUp className="pt-5">
			<SectionHeading title="about us" />
			<div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
				<div className="text-slate-800">
					<h3 className="font-bold text-xl text-blue-900 mb-5">
						Focused on premium quality decor paper and PVC manufacturing
					</h3>
					<p>
						Joyful was established in 2007, specializing in wood grain paper and PVC
						for interior decoration, we currently have two factories in Tam Phuoc
						Industrial Park, Bien Hoa City, Dong Nai Province.
					</p>
					<p>
						We can print paper width from 3 feet to 5 feet. Raw paper is available in
						weights from 30g to 60g. Plastic sheet and edge banding, edge banding are
						available with basic thickness from 0.1mm to 1mm. All materials are
						imported from Japan and Germany.
					</p>
					<p>
						We provide various types of paper products with various coatings on the
						paper surface such as AMC, PU, ​​​​SPU, PUS, SPU, MB, 3DMB, JP, JPS
					</p>
					<Link
						href="/about"
						className="block w-fit bg-blue-900 mt-10 px-5 py-2 rounded text-white uppercase hover:bg-blue-800 transition-all"
					>
						view more <ArrowRight className="inline" />
					</Link>
				</div>
				<div>
					<figure className="w-full">
						<Image
							className="w-full"
							src={"/images/lotus-design-n-print-WgkA3CSFrjc-unsplash-scaled.jpg"}
							alt="name"
							width={500}
							height={300}
						/>
					</figure>
				</div>
			</div>
		</FadeUp>
	);
}
