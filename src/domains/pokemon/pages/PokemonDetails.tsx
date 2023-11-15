import { AppBar, Box, CircularProgress, Container, Grid, Icon, IconButton, LinearProgress, Skeleton, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { PokemonDetailsCard } from "../components";
import { PokemonService } from "../services";


export const PokemonDetails: FC = () => {

    const {name} = useParams()
    const {data, isRefetching, isLoading} = useQuery(`getByName-${name ?? ""}`, () => PokemonService.getByName(name ?? ""))
    const navigate = useNavigate()
    
    return (
        <Box width="100vw" height="100vh" display="flex" flexDirection="column" gap={4}>

            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Box display="flex" flex={1}>
                            <Typography variant="h6">Pokemon</Typography>
                        </Box>
                        <IconButton color="inherit" onClick={() => navigate(-1)}> 
                            <Icon>keyboard_return</Icon>
                            <Typography variant="h6">Voltar</Typography>
                        </IconButton>
                    </Toolbar>
                </Container>
                {isRefetching && (<LinearProgress color="secondary" />)}
            </AppBar>

            <Container maxWidth="xs">

                {isLoading && (
                    <Box display="flex" flexDirection="column">
                        <CircularProgress />
                        <Skeleton height={200} />
                    </Box>
                )}

                {data && (
                    <Grid container marginBottom={10}>
                        <Grid item key={data.id} xs={12}>
                            <PokemonDetailsCard pokemon={data} />
                        </Grid>
                    </Grid>
                )}

            </Container>

        </Box>
    )

}