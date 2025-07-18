import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
	url: process.env.NEXT_PUBLIC_WP_API_URL!,
	consumerKey: process.env.NEXT_PUBLIC_WC_CONSUMER_KEY!,
	consumerSecret: process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET!,
	version: "wc/v3",
});

export const getProductsByCategoryID = async (
	id: string,
	attrTerm: string = "wood-grain"
) => {
	try {
		const response = await api.get("products", {
			category: id,
			"attributes[0][taxonomy]": "pa_style",
			"attributes[0][terms]": attrTerm,
			per_page: 20,
			status: "publish",
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching products");
		return [];
	}
};
