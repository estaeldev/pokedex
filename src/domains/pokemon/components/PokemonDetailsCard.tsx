import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Icon, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import { IPokemonDetails } from "../../../shared/interfaces";
import { usePokemonContext } from "../hooks";

type TPokemonDetailsCardProps = {
    pokemon: IPokemonDetails
}

export const PokemonDetailsCard: FC<TPokemonDetailsCardProps> = ({pokemon}) => {

    const {isFavorite, addPokemon, removePokemon} = usePokemonContext()
    
    return (
        <Card>
            <CardHeader 
                title={<Typography variant="h3">{pokemon.name}</Typography>} 
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
            <CardContent>
                <Box display="flex" flexDirection="column" gap={1}>
                    <Box display="flex" gap={2}>
                        <Typography variant="h6">Especie:</Typography>
                        <Typography variant="h5">{pokemon.species.name}</Typography>
                    </Box>
                    <Box display="flex" gap={2}>
                        <Typography variant="h6">Peso:</Typography>
                        <Typography variant="h5">{pokemon.weight}</Typography>
                    </Box>
                    <Box display="flex" gap={2}>
                        <Typography variant="h6">Altura:</Typography>
                        <Typography variant="h5">{pokemon.height}</Typography>
                    </Box>
                    <Box display="flex" gap={2}>
                        <Typography variant="h6">Habilidades:</Typography>
                        <Typography variant="h5">
                            {pokemon.abilities.map(ability => <Chip key={ability.slot} label={ability.ability.name} />)}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardActions>
                <IconButton 
                    onClick={() => isFavorite(pokemon) ? removePokemon(pokemon) : addPokemon(pokemon)}
                    color={isFavorite(pokemon) ? "error" : "default"}>
                    <Icon>favorite</Icon>
                </IconButton>
            </CardActions>
        </Card>
    )

}
