"use client";
import Image from "next/image";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { useState, useEffect } from "react";

export const api = new WooCommerceRestApi({
	url: process.env.NEXT_PUBLIC_WP_API_URL!,
	consumerKey: process.env.NEXT_PUBLIC_WC_CONSUMER_KEY!,
	consumerSecret: process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET!,
	version: "wc/v3",
});

// Types
import { WC_Category, WC_Product } from "@/types/types";

interface LoadingState {
	categories: boolean;
	products: boolean;
}

export default function ProductClient() {
	const [products, setProducts] = useState<WC_Product[]>([]);
	const [categories, setCategories] = useState<WC_Category[]>([]);
	const [loading, setLoading] = useState<LoadingState>({
		categories: false,
		products: false,
	});
	const [page, setPage] = useState<number>(1);
	const [category, setCategory] = useState<number | undefined>(undefined);
	const [error, setError] = useState<string | null>(null);
	const [hasMore, setHasMore] = useState<boolean>(true);

	// Fetch categories
	const fetchCategories = async () => {
		try {
			setLoading((prev) => ({ ...prev, categories: true }));
			setError(null);

			const response = await api.get("products/categories", {
				per_page: 50,
				orderby: "count",
				order: "desc",
				hide_empty: true,
			});

			setCategories(response.data || []);
		} catch (error) {
			setError("Failed to load categories");
			setCategories([]);
		} finally {
			setLoading((prev) => ({ ...prev, categories: false }));
		}
	};

	const fetchProducts = async () => {
		try {
			setLoading((prev) => ({ ...prev, products: true }));
			setError(null);

			const params = {
				per_page: 12,
				page: page,
				status: "publish",
				...(category && { category: category }),
			};

			const response = await api.get("products", params);

			const fetchedProducts = response.data || [];
			setProducts(fetchedProducts);

			// Check if there are more products
			const totalPages = parseInt(response.headers["x-wp-totalpages"] || "1");
			setHasMore(page < totalPages);
		} catch (error) {
			setError("Failed to load products");
			setProducts([]);
			setHasMore(false);
		} finally {
			setLoading((prev) => ({ ...prev, products: false }));
		}
	};

	// Effects
	useEffect(() => {
		fetchCategories();
	}, []);

	useEffect(() => {
		fetchProducts();
	}, [page, category]);

	// Event handlers
	const handleCategoryChange = (newCategory: number | undefined) => {
		setCategory(newCategory);
		setPage(1); // Reset to first page when category changes
	};

	const handlePreviousPage = () => {
		setPage((prev) => Math.max(1, prev - 1));
	};

	const handleNextPage = () => {
		if (hasMore && !loading.products) {
			setPage((prev) => prev + 1);
		}
	};

	const handleRetry = () => {
		fetchCategories();
		fetchProducts();
	};

	// Error state
	if (error) {
		return (
			<div className="flex flex-col items-center justify-center min-h-64 text-center">
				<div className="text-red-500 text-lg mb-4">⚠️ {error}</div>
				<button
					onClick={handleRetry}
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
				>
					Try Again
				</button>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-6">
			{/* Categories */}
			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-4">Categories</h2>
				{loading.categories ? (
					<div className="flex items-center space-x-2">
						<div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
						<span>Loading categories...</span>
					</div>
				) : (
					<div className="flex flex-wrap gap-2">
						<button
							onClick={() => handleCategoryChange(undefined)}
							className={`px-3 py-1 rounded-full text-sm transition-colors ${
								!category
									? "bg-blue-500 text-white"
									: "bg-gray-200 text-gray-700 hover:bg-gray-300"
							}`}
						>
							All Products
						</button>
						{categories.map((cat) => (
							<button
								key={cat.id}
								onClick={() => handleCategoryChange(cat.id)}
								className={`px-3 py-1 rounded-full text-sm transition-colors ${
									category === cat.id
										? "bg-blue-500 text-white"
										: "bg-gray-200 text-gray-700 hover:bg-gray-300"
								}`}
							>
								{cat.name} ({cat.count})
							</button>
						))}
					</div>
				)}
			</div>

			{/* Products */}
			<div>
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-semibold">
						Products{" "}
						{category && `in ${categories.find((c) => c.id === category)?.name}`}
					</h2>
					{loading.products && (
						<div className="flex items-center space-x-2">
							<div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
							<span>Loading products...</span>
						</div>
					)}
				</div>

				{products.length === 0 && !loading.products ? (
					<div className="text-center py-8 text-gray-500">
						No products found {category && "in this category"}
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
						{products.map((product) => (
							<div
								key={product.id}
								className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
							>
								<div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100 relative">
									<Image
										src={product.images?.[0]?.src || "/placeholder.jpg"}
										alt={product.images?.[0]?.alt || product.name}
										className="w-full h-full object-cover"
										loading="lazy"
										onError={(e) => {
											e.currentTarget.src = "/placeholder.jpg";
										}}
									/>
								</div>

								<div className="space-y-2">
									<h3
										className="font-semibold text-sm mb-1 line-clamp-2"
										dangerouslySetInnerHTML={{ __html: product.name }}
									/>

									{product.short_description && (
										<p
											className="text-xs text-gray-600 line-clamp-2"
											dangerouslySetInnerHTML={{ __html: product.short_description }}
										/>
									)}

									{product.categories.length > 0 && (
										<div className="flex flex-wrap gap-1">
											{product.categories.slice(0, 2).map((cat) => (
												<span
													key={cat.id}
													className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
												>
													{cat.name}
												</span>
											))}
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				)}
			</div>

			{/* Pagination */}
			<div className="flex justify-center items-center space-x-4 mt-6">
				<button
					onClick={handlePreviousPage}
					disabled={page === 1 || loading.products}
					className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
				>
					Previous
				</button>
				<span className="text-sm text-gray-600">Page {page}</span>
				<button
					onClick={handleNextPage}
					disabled={!hasMore || loading.products}
					className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
				>
					Next
				</button>
			</div>
		</div>
	);
}
