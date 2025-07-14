export interface WC_Product {
	id: number;
	name: string;
	price: string;
	regular_price: string;
	sale_price: string;
	images: { src: string; alt: string }[];
	categories: { id: number; name: string }[];
	short_description: string;
	stock_status: string;
}

export interface WC_Category {
	id: number;
	name: string;
	slug: string;
	count: number;
}
