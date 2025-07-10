import Link from "next/link";
import Image from "next/image";
import { Building, Mail, MapPin, Phone } from "lucide-react";
import FadeUp from "@/components/animation/FadeUp";

export default function Footer() {
	return (
		<FadeUp>
			<footer className="py-10 mt-5 bg-slate-900">
				<div className="container mx-auto">
					<div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5">
						<div>
							<h3 className="font-bold text-white text-2xl uppercase mb-5">
								external links
							</h3>
							<ul>
								<li className="text-white mb-3 hover:text-blue-900">
									<Link href={"/"}>About us</Link>
								</li>
								<li className="text-white mb-3 hover:text-blue-900">
									<Link href={"/"}>Products</Link>
								</li>
								<li className="text-white mb-3 hover:text-blue-900">
									<Link href={"/"}>Youtube</Link>
								</li>
								<li className="text-white mb-3 hover:text-blue-900">
									<Link href={"/"}>Contact</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="font-bold text-white text-2xl uppercase mb-5">
								contact us
							</h3>
							<div>
								<p className="text-white mb-3">
									<Building className="inline mr-2" />
									Joyful Decor Co. Ltd
								</p>
								<p className="text-white mb-3">
									<MapPin className="inline mr-2" />
									Road 5, Tam Phước Industrial Park, Biên Hòa, Tỉnh Đồng Nai, Việt Nam
								</p>
								<p className="text-white mb-3">
									<Mail className="inline mr-2" />
									<Link href={`tel:im.export02@joyfuldecor.com.vn`}>
										Mail: im.export02@joyfuldecor.com.vn
									</Link>
								</p>
								<p className="text-white mb-3">
									<Phone className="inline mr-2" />
									<Link href={`tel:+84-251-6280251`}>Tel 1: +84-251-6280251</Link>
								</p>
								<p className="text-white mb-3">
									<Phone className="inline mr-2" />
									<Link href={`tel:+84-251-6280252`}>Tel 2: +84-251-6280252</Link>
								</p>
							</div>
						</div>

						<div>
							<h3 className="font-bold text-white text-2xl uppercase mb-5">socials</h3>
							<p className="text-white mb-3">
								You are welcome to us for more details if any decor paper could interest
								you. Please contact by mail or phone call, and we will reply you soon.
							</p>
							<form
								action=""
								className="bg-white grid grid-cols-8 rounded-md mb-5 w-[80%]"
							>
								<input
									type="text"
									className="col-span-6 p-5 outline-0"
									placeholder="ex: youremail@domain.com"
								/>
								<button className="col-span-2 p-5 hover:bg-blue-300 hover:text-white font-bold transition-all cursor-pointer rounded-md">
									Submit
								</button>
							</form>
							<div className="flex gap-2">
								<Link href={`/`}>
									<Image
										src="/icons/facebook.png"
										width="35"
										height="35"
										alt="facebook icon"
									/>
								</Link>
								<Link href={`/`}>
									<Image
										src="/icons/Icon_of_Zalo.svg.webp"
										width="35"
										height="35"
										alt="zalo icon"
									/>
								</Link>
								<Link href={`/`}>
									<Image
										src="/icons/youtube.png"
										width="35"
										height="35"
										alt="youtube icon"
									/>
								</Link>
								<Link href={`/`}>
									<Image
										src="/icons/tiktok.png"
										width="35"
										height="50"
										alt="tiktok icon"
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="container mx-auto border-t-white border my-5">
					<p className="text-white text-center py-2">
						© 2025 Joyful decor. All rights reserved.
					</p>
				</div>
			</footer>
		</FadeUp>
	);
}
