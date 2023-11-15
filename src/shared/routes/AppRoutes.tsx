import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Pokedex } from "../../domains/pokedex/pages";
import { PokemonDetails } from "../../domains/pokemon/pages";
import { Favorites } from "../../domains/favorite/pages";

export const AppRoutes: FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/pokemon/details/:name" element={<PokemonDetails />} />
                <Route path="/favoritos" element={<Favorites />} />
                
                <Route path="*" element={<Navigate to={"/pokedex"} />} />
            </Routes>
        </BrowserRouter>
    )

}
