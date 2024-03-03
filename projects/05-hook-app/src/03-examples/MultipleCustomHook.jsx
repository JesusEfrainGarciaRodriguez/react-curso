import { useCounter } from "../hooks/useCounter";
import useFetch from "../hooks/useFetch"
import LoadingMessage from "./LoadingMessage";
import PokemonCard from "./PokemonCard";

const MultipleCustomHook = () => {
    const { counter, increment, decrement } = useCounter(1);
    const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>Información de Pokémon</h1>
            <hr />

            {isLoading ? <LoadingMessage /> : <PokemonCard {...data} sprites={[
                data.sprites.front_default,
                data.sprites.back_default,
                data.sprites.front_shiny,
                data.sprites.back_shiny,
            ]} />}

            <button className="btn btn-primary bt-2" onClick={() => counter > 1 ? decrement() : null}>Anterior</button>
            <button className="btn btn-primary bt-2" onClick={() => increment()}>Siguiente</button>
        </>
    )
}

export default MultipleCustomHook