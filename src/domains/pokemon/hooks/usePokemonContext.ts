import { useContext } from "react"
import { PokemonContext } from "../contexts"

export const usePokemonContext = () => {

    const context = useContext(PokemonContext)

    if(context === undefined) {
        throw new Error("Está fora do contexto - PokemonContext!")
    }

    return context

}
