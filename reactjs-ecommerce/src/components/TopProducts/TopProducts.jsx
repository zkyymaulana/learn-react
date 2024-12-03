import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/products.service';
import { FaStar } from 'react-icons/fa6';

const TopProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts(data => {
			setProducts(data);
		});
	}, []);

	return (
		<div>
			<div className="container mb-96">
				{/* Header Section */}
				<div className="text-left mb-28">
					<p className="text-sm text-primary">Top Rated Products for you</p>
					<h1 data-aos="fade-up" className="text-3xl font-bold">
						Best Products
					</h1>
					<p data-aos="fade-up" className="text-xs text-gray-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur at eveniet totam! Lorem ipsum dolor sit amet.
					</p>
				</div>
				{/* Body Section */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20  md:gap-5 place-items-center">
					{[...(products.length > 0 ? products : Array(20).fill({}))].slice(0, 3).map(product => (
						<div className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] cursor-pointer">
							{/* Image Section */}
							<div>
								<img
									src={product.image} // Placeholder jika gambar tidak tersedia
									alt={product.title}
									className="max-h-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 drop-shadow-md"
								/>

								{/* Detail Section */}
								<div className="p-4 text-center grid gap-1">
									{/* Star Rating */}
									<div className="w-full flex items-center justify-center gap-2 pb-2">
										<FaStar className="text-yellow-500"></FaStar>
										<FaStar className="text-yellow-500"></FaStar>
										<FaStar className="text-yellow-500"></FaStar>
										<FaStar className="text-yellow-500"></FaStar>
									</div>
									<h1 className="text-xl font-bold line-clamp-1">{product.title}</h1>
									<p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{product.description}</p>
									<button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">Order Now</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TopProducts;
