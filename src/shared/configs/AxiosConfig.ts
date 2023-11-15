import axios from "axios";

export const AxiosConfig = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})
