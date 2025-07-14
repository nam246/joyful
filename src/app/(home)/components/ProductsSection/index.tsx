import SwiperGrid from "./ProductsSwiperGrid";
import FadeUp from "@/components/animation/FadeUp";
import { WC_Product } from "@/types/types";
import SectionHeading from "@/components/layout/SectionHeading";

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const api = new WooCommerceRestApi({
	url: process.env.NEXT_PUBLIC_WP_API_URL!,
	consumerKey: process.env.NEXT_PUBLIC_WC_CONSUMER_KEY!,
	consumerSecret: process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET!,
	version: "wc/v3",
});

const getProducts = async (): Promise<WC_Product[]> => {
	const response = await api.get("products", {
		per_page: 12,
	});
	return response.data;
};

export default async function ProductsSection() {
	const products = await getProducts();

	return (
		<FadeUp className="pt-5">
			<SectionHeading title="Featured Products" />
			<SwiperGrid products={products} />
		</FadeUp>
	);
}
