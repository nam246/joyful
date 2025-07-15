import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
	url: process.env.NEXT_PUBLIC_WP_API_URL!,
	consumerKey: process.env.NEXT_PUBLIC_WC_CONSUMER_KEY!,
	consumerSecret: process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET!,
	version: "wc/v3",
});

export const getProductsByCategoryID = async (id: string, attrTerm: string) => {
	try {
		const response = await api.get("products", {
			category: id,
			taxonomy: "pa_style",
			attribute_term: attrTerm ? attrTerm : "wood-grain",
			per_page: 20,
			status: "publish",
		});
		const data = await response.data;
		return data;
	} catch (error) {
		console.error("Error fetching products:", error);
		return [];
	}
};
