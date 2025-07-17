import Gallery from "./components/GallerySection";
import ProductsSection from "./components/ProductsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default async function Home() {
	return (
		<>
			<section id="product-categories">
				<div className="container mx-auto">
					<Gallery />
				</div>
			</section>

			<section id="products">
				<div className="container mx-auto">
					<ProductsSection title="Paper Products" catID={"172"} />
				</div>
			</section>

			<section>
				<div className="container mx-auto">
					<ProductsSection title="PVC Products" catID={"166"} />
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
