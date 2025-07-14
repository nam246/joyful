import ProductCategoriesSection from "./components/GallerySection";
import ProductsSection from "./components/ProductsSection/index";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
	return (
		<>
			<section id="product-categories">
				<div className="container mx-auto">
					<ProductCategoriesSection />
				</div>
			</section>

			<section id="products">
				<div className="container mx-auto">
					<ProductsSection />
				</div>
			</section>

			<section id="about" className="bg-white">
				<div className="container mx-auto">
					<AboutSection />
				</div>
			</section>

			<section id="contact">
				<div className="container mx-auto">
					<ContactSection />
				</div>
			</section>
		</>
	);
}
