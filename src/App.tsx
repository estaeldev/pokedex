import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppRoutes } from "./shared/routes";
import { PokemonProvider } from "./domains/pokemon/contexts";

const queryClient = new QueryClient()

export const App: FC = () =>  {
    return (
        <QueryClientProvider client={queryClient}>
            <PokemonProvider>
                <AppRoutes />
            </PokemonProvider>
        </QueryClientProvider>
    )
}
