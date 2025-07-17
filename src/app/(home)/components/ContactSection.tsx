import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animation/FadeUp";

export default function ContactSection() {
	return (
		<FadeUp>
			<div className="flex flex-col items-center justify-center gap-5 py-20">
				<h1 className="uppercase text-7xl text-center mb-2 text-blue-900">
					contact us
				</h1>
				<p className="mb-2 text-gray-500">
					You are welcome to us for more details if any decor paper could interest
					you. Please contact by contact below, and we will reply you soon.
				</p>
				<div className="flex gap-5">
					<Link href={`/`}>
						<Image
							src="/icons/facebook.svg"
							width="50"
							height="50"
							alt="facebook icon"
						/>
					</Link>
					<Link href={`/`}>
						<Image src="/icons/zalo.svg" width="50" height="50" alt="zalo icon" />
					</Link>
					<Link href={`/`}>
						<Image
							src="/icons/youtube.svg"
							width="50"
							height="50"
							alt="youtube icon"
						/>
					</Link>
					<Link href={`/`}>
						<Image
							src="/icons/Tiktok_icon.svg"
							width="50"
							height="50"
							alt="tiktok icon"
						/>
					</Link>
					<Link href={`/`}>
						<Image
							src="/icons/instagram.svg"
							width="50"
							height="50"
							alt="instagram icon"
						/>
					</Link>
				</div>
			</div>
		</FadeUp>
	);
}
