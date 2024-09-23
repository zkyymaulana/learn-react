import CardProduct from '../components/Fragments/CardProduct';

const ProductsPage = () => {
	return (
		<div className="flex justify-center py-5">
			<CardProduct>
				<CardProduct.Header image="/images/shoes-1.jpg" />
				<CardProduct.Body title="Sepatu Baru">ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt soluta vel consequatur dicta inventore? Qui autem sit aperiam ex vero!</CardProduct.Body>
				<CardProduct.Footer price="Rp. 1.000.000" />
			</CardProduct>
			<CardProduct>
				<CardProduct.Header image="/images/shoes-1.jpg" />
				<CardProduct.Body title="Sepatu Baru">ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt soluta vel consequatur dicta inventore? Qui autem sit aperiam ex vero!</CardProduct.Body>
				<CardProduct.Footer price="Rp. 1.000.000" />
			</CardProduct>
		</div>
	);
};

export default ProductsPage;
