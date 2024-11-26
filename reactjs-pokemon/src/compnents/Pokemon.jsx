import { useEffect, useState } from 'react';

function Pokemon() {
	const [pokemonList, setPokemonList] = useState([]); // Default array kosong
	const [loading, setLoading] = useState(true); // Status awal loading adalah true

	useEffect(() => {
		const getAllPokemon = async () => {
			const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
			const resData = await fetch(apiUrl);
			const jsonData = await resData.json();

			// Fetch semua data detail secara paralel
			const pokemonDetail = await Promise.all(
				jsonData.results.map(async data => {
					const resDataDetail = await fetch(data.url);
					return resDataDetail.json();
				})
			);

			setPokemonList(pokemonDetail); // Update state setelah semua data lengkap
			setLoading(false); // Set loading ke false setelah data selesai dimuat
		};

		getAllPokemon(); // Panggil fungsi untuk memulai fetch
	}, []);

	return (
		<div className="container mx-auto my-20">
			<div className="gap-4">
				{/* Menampilkan loading jika data sedang dimuat */}
				{loading ? (
					<div className="text-xl text-center">Loading Pokémon...</div>
				) : (
					<div className="grid grid-cols-4 gap-7">
						{/* Menampilkan daftar Pokémon */}
						{pokemonList.map((data, index) => (
							<div key={index} className="bg-blue-200 p-4 text-center rounded-md hover:bg-blue-300 cursor-pointer shadow-md">
								<div className="flex justify-center">
									<img src={data.sprites?.front_default || ''} alt={data.name} className="w-24 h-24 object-contain" />
								</div>
								<div className="capitalize font-bold">{data.name}</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Pokemon;
