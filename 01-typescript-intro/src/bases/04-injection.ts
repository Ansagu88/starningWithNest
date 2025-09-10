
import type { Move, PokemonAPI } from '../interfaces/pokeapi-response.interface';
import type { PokeApiAdapter } from '../api/pokeApi.adapter';

export class Pokemon {
    public readonly id: number;
    public name: string;
    private readonly http: PokeApiAdapter;
    
    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        
    }

    scream(): void {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak(): void {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.http.getPokemon(this.id);
        console.log( data.moves );

        return data.moves;
    }
}

const pokeApi = new PokeApiAdapter();

const charmander = new Pokemon( 4, 'Charmander',pokeApi);

// Manejar la promesa para evitar "Unhandled Promise rejection"
charmander.getMoves().catch( (err) => console.error('Error obteniendo movimientos:', err) );