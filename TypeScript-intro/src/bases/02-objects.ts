
export const pokemonIds: number[] = [1, 20, 30];

pokemonIds.push(1);
console.log(pokemonIds);

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const bulbasaur: Pokemon = {
  id: 1,
  name: 'Bulbasaur',
  age: 10,
};

console.log(bulbasaur);