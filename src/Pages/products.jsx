import { Fragment } from 'react';
import Button from '../components/Elements/Button/Index';
import CardProduct from '../components/Fragments/CardProduct';
import Counter from '../components/Fragments/Counter';

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

const email = localStorage.getItem('email');

const ProductsPage = () => {
	const handleLogout = () => {
		localStorage.removeItem('email');
		localStorage.removeItem('password');
		window.location.href = '/login';
	};

	return (
		<Fragment>
			<div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
				{email}
				<Button classname="ml-5 bg-black" onClick={handleLogout}>
					Logout
				</Button>
			</div>
			<div className="flex justify-center py-5">
				{products.map(product => (
					<CardProduct key={product.id}>
						<CardProduct.Header image={product.image} />
						<CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
						<CardProduct.Footer price={product.price} />
					</CardProduct>
				))}
			</div>
			<div className="flex w-100 justify-center">
				<Counter></Counter>
			</div>
		</Fragment>
	);
};

export default ProductsPage;
