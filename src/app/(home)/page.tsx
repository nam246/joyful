import ProductCategoriesSection from "./components/ProductCategoriesSection";
import ProductsSection from "./components/ProductsSection/index";
import AboutSection from "./components/AboutSection";

export default function Home() {
	return (
		<div className="container mx-auto">
			<section>
				<ProductCategoriesSection />
			</section>

			<section>
				<ProductsSection />
			</section>

			<section id="about">
				<AboutSection />
			</section>
		</div>
	);
}
