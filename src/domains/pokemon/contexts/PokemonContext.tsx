import { FC, PropsWithChildren, createContext, useCallback, useMemo, useState } from "react";
import { IPokemonDetails } from "../../../shared/interfaces";

interface IPokemonContextData {
    pokemons: IPokemonDetails[]
    isFavorite: (pokemon: IPokemonDetails) => boolean
    addPokemon: (pokemon: IPokemonDetails) => void
    removePokemon: (pokemon: IPokemonDetails) => void
}

export const PokemonContext = createContext({} as IPokemonContextData)

export const PokemonProvider: FC<PropsWithChildren> = ({children}) => {

    const [pokemons, setPokemons] = useState<IPokemonDetails[]>([])

    const isFavorite = useCallback((pokemon: IPokemonDetails): boolean => {
        return pokemons.some((poke) => poke.id === pokemon.id)
    }, [pokemons])

    const addPokemon = useCallback((pokemon: IPokemonDetails) => {
        setPokemons([...pokemons, pokemon])
    }, [pokemons])

    const removePokemon = useCallback((pokemon: IPokemonDetails) => {
        setPokemons(oldPokemons => oldPokemons.filter(oldPokemon => oldPokemon.id !== pokemon.id))
    }, [])

    const context = useMemo<IPokemonContextData>(() => {
        return {pokemons, isFavorite, addPokemon, removePokemon}
    }, [addPokemon, isFavorite, pokemons, removePokemon])

    return (
        <PokemonContext.Provider value={context}>
            {children}
        </PokemonContext.Provider>
    )

}



