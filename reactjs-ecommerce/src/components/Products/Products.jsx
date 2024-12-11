import React, { useState, useEffect } from 'react'; // Pastikan import useState dan useEffect
import { getProducts } from '../../services/products.service';
import { FaStar } from 'react-icons/fa6';

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts(data => {
			setProducts(data);
		});
	}, []);

	return (
		<div className="mt-14 mb-12">
			<div className="container">
				{/* Header section */}
				<div data-aos="fade-up" className="text-center mb-10 max-w-[600px] mx-auto">
					<p className="text-sm text-primary">Top Selling Products for you</p>
					<h1 data-aos="fade-up" className="text-3xl font-bold">
						Products
					</h1>
					<p data-aos="fade-up" className="text-xs text-gray-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur at eveniet totam! Lorem ipsum dolor sit amet.
					</p>
				</div>
				{/* Body section */}
				<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
					{[...(products.length > 0 ? products : Array(5).fill({}))] // Gunakan placeholder jika tidak ada produk
						.sort((a, b) => (b.rating?.count / b.rating?.rate || 0) - (a.rating?.count / a.rating?.rate || 0)) // Sort jika ada data rating
						.slice(0, 5)
						.map((product, index) => (
							<div
								data-aos="fade-up"
								data-aos-delay={index * 300}
								key={product.id || index} // Gunakan index jika id tidak tersedia
								className="space-y-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
							>
								{/* Gambar Produk */}
								<img
									src={product.image || '/placeholder.png'} // Placeholder jika gambar tidak tersedia
									alt={product.title || 'Placeholder'}
									className="h-[220px] w-[150px] object-cover rounded-md mx-auto"
								/>

								{/* Informasi Produk */}
								<div className="space-y-1">
									<h3 className="font-semibold text-start text-sm">{product.title ? (product.title.length > 20 ? `${product.title.substring(0, 20)}...` : product.title) : 'Product Title'}</h3>

									<p className="text-sm text-gray-600 text-start">{product.price ? product.price.toLocaleString('id-ID', { style: 'currency', currency: 'USD' }) : 'N/A'}</p>

									<div className="flex items-center justify-start gap-1">
										<FaStar className="text-yellow-400" />
										<span className="text-sm">{product.rating?.rate ? product.rating.rate.toFixed(1) : '0.0'}</span>
									</div>
								</div>
							</div>
						))}
				</div>
				{/* view all button */}
				<div className="flex justify-center">
					<button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md">View All Button</button>
				</div>
			</div>
		</div>
	);
};

export default Products;
