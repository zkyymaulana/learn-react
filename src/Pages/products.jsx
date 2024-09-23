import CardProduct from '../components/Fragments/CardProduct';

const products = [
	{
		id: 1,
		name: 'Sepatu Baru',
		price: 'Rp. 1.000.000',
		image: '/images/shoes-1.jpg',
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum qui earum, itaque perspiciatis dignissimos eum fugiat totam asperiores laborum animi?`,
	},
	{
		id: 2,
		name: 'Sepatu Olahraga Pro',
		price: 'Rp. 1.200.000',
		image: '/images/shoes-1.jpg',
		description: `Sepatu ini dirancang khusus untuk aktivitas olahraga yang intens dengan kenyamanan optimal.`,
	},
	{
		id: 3,
		name: 'Sepatu Kulit Premium',
		price: 'Rp. 950.000',
		image: '/images/shoes-1.jpg',
		description: `Sepatu kulit asli berkualitas tinggi yang cocok untuk acara formal dan kasual.`,
	},
];

const ProductsPage = () => {
	return (
		<div className="flex justify-center py-5">
			{products.map(product => (
				<CardProduct>
					<CardProduct.Header image={product.image} />
					<CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
					<CardProduct.Footer price={product.price} />
				</CardProduct>
			))}
		</div>
	);
};

export default ProductsPage;
