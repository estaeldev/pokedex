import { AppBar, Box, Container, Grid, Icon, IconButton, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { PokedexCard } from "../../pokedex/components";
import { usePokemonContext } from "../../pokemon/hooks";


export const Favorites: FC = () => {

    const {pokemons} = usePokemonContext()
    const navigate = useNavigate()

    return(
        <Box width="100vw" height="100vh" display="flex" flexDirection="column" gap={4}>

            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Box display="flex" flex={1}>
                            <Typography variant="h6">Favoritos</Typography>
                        </Box>
                        <IconButton color="inherit" onClick={() => navigate("/pokedex")}> 
                            <Icon>keyboard_return</Icon>
                            <Typography variant="h6">Voltar</Typography>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            <Container>

                {pokemons.length === 0 && (
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h3">Nenhum Pokemon Favorito!</Typography>
                    </Box>
                )}

                <Grid container spacing={2} marginBottom={10}>
                    {pokemons.map(result => (
                        <Grid item key={result.id} xs={12} sm={6} md={3}>
                            <PokedexCard pokemon={result} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </Box>
    )

}
