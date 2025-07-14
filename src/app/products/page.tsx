import PageHeading from "@/components/layout/PageHeading";
import ProductClient from "./components/ProductsClient";

export default function Products() {
	return (
		<>
			<PageHeading title="Products" />
			<div className="container mx-auto">
				<ProductClient />
			</div>
		</>
	);
}
