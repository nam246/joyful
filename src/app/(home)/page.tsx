import ProductCategoriesSection from "./components/ProductCategoriesSection";
import ProductsSection from "./components/ProductsSection/index";
import AboutSection from "./components/AboutSection";

export default function Home() {
	return (
		<div className="container mx-auto">
			<section id="product-categories">
				<ProductCategoriesSection />
			</section>

			<section id="products">
				<ProductsSection />
			</section>

			<section id="about">
				<AboutSection />
			</section>
		</div>
	);
}
