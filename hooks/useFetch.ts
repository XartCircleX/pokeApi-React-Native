import { useEffect, useState } from "react";

const useFetch = (limit = 10, offset = 0) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemonsInfo = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
                if (response.status !== 200) {
                    throw new Error("Error en la petición");
                }
                const data = await response.json();

                // Ahora vamos a obtener la información detallada de cada Pokémon
                const pokemonDetailsPromises = data.results.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    if (response.status !== 200) {
                        throw new Error("Error obteniendo detalles del Pokémon");
                    }
                    const pokemonData = await response.json();
                    return pokemonData;
                });

                // Esperamos a que todas las promesas se resuelvan para actualizar el estado
                const pokemonDetails = await Promise.all(pokemonDetailsPromises);
                setList([...list, ...pokemonDetails]);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonsInfo();

    }, [limit, offset]);

    return { list, loading, error };
};

export default useFetch;
