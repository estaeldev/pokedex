import { IPokemonDetails } from "./IPokemonDetails";

export interface IPokemonListData {
    count:    number;
    next:     string;
    previous: null;
    results: IPokemonDetails[];
}
