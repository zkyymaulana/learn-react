import { useEffect, useState } from 'react';

function Pokemon() {
	const [pokemonList, setPokemonList] = useState([]); // Default array kosong
	const [loading, setLoading] = useState(true); // Status awal loading adalah true
	const [detail, setDetail] = useState(false);
	const [dataDetail, setDataDetail] = useState();

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

	function PokemonDetail() {
		return (
			<div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 text-white">
				<div className="relative bg-white text-gray-800 rounded-lg shadow-lg min-w-3">
					<a className="absolute top-2 right-2 bg-gray-300 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer" href="#" onClick={() => setDetail(false)}>
						✖
					</a>

					<div className="p-8">
						<img src={dataDetail.sprites.other.dream_world.front_default} alt="Detail Image" />
					</div>

					<div className="bg-yellow-100 text-gray-800 px-6 py-3 text-lg font-bold">{dataDetail.name}</div>

					<div className="px-6 py-5 rounded-b-lg">
						<div className="flex flex-wrap gap-3">
							{dataDetail.abilities.map((data, index) => {
								return (
									<span key={index} className="bg-gray-300 text-gray-800 px-3 py-1 rounded-lg">
										{data.ability.name}
									</span>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto my-20">
			<div className="gap-4">
				{/* Menampilkan loading jika data sedang dimuat */}
				{loading ? (
					<div className="flex justify-center items-center text-center bg-gray-300 text-white fixed inset-0 z-50">Loading Pokémon...</div>
				) : (
					<div className="grid grid-cols-4 gap-7">
						{detail && PokemonDetail()}
						{/* Menampilkan daftar Pokémon */}
						{pokemonList.map((data, index) => (
							<div
								key={index}
								className="bg-blue-200 p-4 text-center rounded-md hover:bg-blue-300 cursor-pointer shadow-md"
								onClick={() => {
									setDetail(true); // Mengaktifkan tampilan detail
									setDataDetail(data); // Menyimpan data detail Pokémon
								}}
							>
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
