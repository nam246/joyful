import Link from "next/link";
import { Building, Mail, MapPin, Phone } from "lucide-react";
import FadeUp from "@/components/animation/FadeUp";

export default function Footer() {
	return (
		<FadeUp>
			<footer className="py-10 mt-5 bg-slate-800">
				<div className="container mx-auto">
					<div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5">
						<div>
							<h3 className="font-bold text-white text-2xl uppercase mb-5">
								external links
							</h3>
							<ul>
								<li className="text-white mb-3 hover:text-blue-900">
									<Link href={"#about"}>About us</Link>
								</li>
								<li className="text-white mb-3 hover:text-blue-900">
									<Link href={"#products"}>Products</Link>
								</li>
								<li className="text-white mb-3 hover:text-blue-900">
									<Link href={"https://www.youtube.com/@congtyJOYFUL"} target="_blank">
										Youtube
									</Link>
								</li>
								<li className="text-white mb-3 hover:text-blue-900">
									<Link href={"#contact"}>Contact</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="font-bold text-white text-2xl uppercase mb-5">company</h3>
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
							<h3 className="font-bold text-white text-2xl uppercase mb-5">
								newsletter
							</h3>
							<p className="text-white mb-3">
								Stay updated! Join our newsletter for exclusive tips and insights.
							</p>
							<form action="" className="grid grid-cols-8 gap-2 rounded-md mb-5">
								<input
									type="email"
									className="col-span-6 p-5 outline-0 bg-white rounded-md"
									placeholder="ex: youremail@domain.com"
								/>
								<button className="col-span-2 p-5 bg-blue-500 hover:bg-blue-300 text-white font-bold transition-all cursor-pointer rounded-md">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="container mx-auto my-5">
					<p className="text-white text-center py-2">
						© 2025 Joyful decor. All rights reserved.
					</p>
				</div>
			</footer>
		</FadeUp>
	);
}
