import { Box, Card, CardActions, CardHeader, CardMedia, Chip, Icon, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import { IPokemonDetails } from "../../../shared/interfaces";
import { useNavigate } from "react-router-dom";
import { usePokemonContext } from "../../pokemon/hooks";

type TPokedexCardProps = {
    pokemon: IPokemonDetails
}

export const PokedexCard: FC<TPokedexCardProps> = ({pokemon}) => {

    const navigate = useNavigate()
    const {isFavorite, addPokemon, removePokemon} = usePokemonContext()

    return (
        <Card>
            <CardHeader 
                title={<Typography variant="h4">{pokemon.name}</Typography>} 
                subheader={pokemon.types.map(type => (
                    <Chip key={type.slot} label={type.type.name} variant="outlined" />
                ))} 
            />
            <CardMedia 
                component="img"
                image={pokemon.sprites.front_default} 
                width="100%"
                height="auto" 
            />

            <CardActions>
                <Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
                    <IconButton 
                        onClick={() => isFavorite(pokemon) ? removePokemon(pokemon) : addPokemon(pokemon)}
                        color={isFavorite(pokemon) ? "error" : "default"}>
                        <Icon>favorite</Icon>
                    </IconButton>
                    <IconButton color="primary" onClick={() => navigate(`/pokemon/details/${pokemon.name}`)}>
                        <Icon>open_in_browser</Icon>
                        <Typography variant="h6" fontSize={15}>ABRIR</Typography>
                    </IconButton>
                </Box>
            </CardActions>
            
        </Card>
    )


}
