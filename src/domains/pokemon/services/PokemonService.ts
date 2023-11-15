import { AxiosConfig } from "../../../shared/configs"
import { IPokemonDetails, IPokemonListData } from "../../../shared/interfaces"

const getAll = async (): Promise<IPokemonListData> => {
    const {data} = await AxiosConfig.get<IPokemonListData>("/pokemon")
    const promise = data.results.map(result => getByName(result.name))
    const results = await Promise.all(promise)
    return {...data, results: results}
}

const getByName = async (name: string) => {
    const {data} = await AxiosConfig.get<IPokemonDetails>(`/pokemon/${name}`)
    return data
}


export const PokemonService = {
    getAll, getByName
}