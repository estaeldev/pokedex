import { AppBar, Badge, Box, Container, Grid, Icon, IconButton, LinearProgress, Skeleton, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { usePokemonContext } from "../../pokemon/hooks";
import { PokemonService } from "../../pokemon/services";
import { PokedexCard } from "../components";

export const Pokedex: FC = () => {

    const {data, isRefetching, isLoading} = useQuery("getAllPokemons", PokemonService.getAll)
    const {pokemons} = usePokemonContext()
    const navigate = useNavigate()

    return (
        <Box width="100vw" height="100vh" display="flex" flexDirection="column" gap={4}>

            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Box display="flex" flex={1}>
                            <Typography variant="h6">Pokedex</Typography>
                        </Box>
                        <IconButton color="inherit" onClick={() => navigate("/favoritos")}> 
                            <Badge badgeContent={pokemons.length} color="secondary">
                                <Icon>favorite</Icon>
                            </Badge>
                            <Typography variant="h6">Favoritos</Typography>
                        </IconButton>
                    </Toolbar>
                </Container>
                <Box position="relative" padding={1}>
                    <Typography variant="body2" color="inherit">versão: 1.0.0</Typography>
                </Box>
                {isRefetching && (<LinearProgress color="secondary" />)}
            </AppBar>

            <Container>

                {isLoading && (
                    <Grid container spacing={2} marginBottom={10}>
                        {[1,2,3,4,5,6,7,8].map(item => (
                            <Grid item key={item.toFixed()} xs={12} sm={6} md={3}>
                                <Skeleton height={300} />
                            </Grid>
                        ))}
                    </Grid>
                )}

                <Grid container spacing={2} marginBottom={10}>
                    {data?.results.map(result => (
                        <Grid item key={result.id} xs={12} sm={6} md={3}>
                            <PokedexCard pokemon={result} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </Box>

    )

}