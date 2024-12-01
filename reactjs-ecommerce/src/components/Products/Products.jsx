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
				<div className="text-center mb-10 max-w-[600px] mx-auto">
					<p className="text-sm text-primary">Top Selling Products for you</p>
					<h1 className="text-xl font-bold">Products</h1>
					<p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur at eveniet totam! Lorem ipsum dolor sit amet.</p>
				</div>
				{/* Body section */}
				<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
					{/* Card Section */}
					{products.length > 0 ? (
						products.map(product => (
							<div key={product.id} className="space-y-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
								{/* Gambar Produk */}
								<img src={product.image} alt={product.title} className="h-[220px] w-[150px] object-cover rounded-md mx-auto" />

								{/* Informasi Produk */}
								<div className="space-y-1">
									{/* Batasi panjang teks title */}
									<h3 className="font-semibold text-start text-sm">{product.title.length > 20 ? `${product.title.substring(0, 20)}...` : product.title}</h3>

									{/* Harga Produk */}
									<p className="text-sm text-gray-600 text-start">{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'USD' })}</p>

									{/* Rating Produk */}
									<div className="flex items-statext-start justify-start gap-1">
										<FaStar className="text-yellow-400" />
										<span className="text-sm">{product.rating.rate.toFixed(1)}</span>
									</div>
								</div>
							</div>
						))
					) : (
						<p className="text-center text-gray-500">No products available.</p>
					)}
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default Products;
