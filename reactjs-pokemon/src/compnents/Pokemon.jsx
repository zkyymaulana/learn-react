import { useEffect, useState } from 'react';

function Pokemon() {
	const [pokemonList, setPokemonList] = useState([]); // Default array kosong

	async function getAllPokemon() {
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
	}
	console.log(pokemonList);

	useEffect(() => {
		getAllPokemon();
	}, []);

	return (
		<div className="container mx-auto my-20">
			<div className="gap-4">
				<div className="grid grid-cols-4 gap-7">
					{pokemonList.length > 0 ? (
						pokemonList.map((data, index) => (
							<div key={index} className="bg-blue-200 p-4 text-center rounded-md hover:bg-blue-300 cursor-pointer shadow-md">
								<div className="flex justify-center">
									<img src={data.sprites.front_default}></img>
								</div>
								<div>{data.name}</div>
							</div>
						))
					) : (
						<p>Loading Pokémon...</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default Pokemon;
