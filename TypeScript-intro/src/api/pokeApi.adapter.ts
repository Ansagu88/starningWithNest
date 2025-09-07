import axios from "axios";
import type { PokemonAPI } from "../interfaces/pokeapi-response.interface";






export class PokeApiAdapter {

    private readonly axios = axios;

    async getPokemon(id: number): Promise<PokemonAPI> {
        const { data } = await this.axios.get<PokemonAPI>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return data;
    }
}