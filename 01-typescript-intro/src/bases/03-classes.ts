import axios from "axios";
import type { PokemonAPI } from "../interfaces/pokeapi-response.interface";

// Ejemplo de una clase más completa en TypeScript
export class Pokemon {
  // Propiedades de instancia
  public readonly id: number;              // no se puede cambiar después de construir
  public name: string;
  public types: string[];
  public readonly createdAt: Date = new Date();
  private _hp: number;                     // propiedad privada (encapsulada)
  public isLegendary: boolean;

  // Propiedad estática (compartida por todas las instancias)
  private static _count = 0;

  constructor(
    id: number,
    name: string,
    types: string[],
    hp: number = 100,
    isLegendary: boolean = false,
  ) {
    this.id = id;
    this.name = name;
    this.types = types;
    this._hp = hp;
    this.isLegendary = isLegendary;
    Pokemon._count++;
  }

  // Getter & Setter para hp (validando rango)
  get hp(): number {
    return this._hp;
  }

  set hp(value: number) {
    if (value < 0) value = 0;
    if (value > 1000) throw new Error('HP demasiado alto');
    this._hp = value;
  }

  // Método de instancia
  attack(target: Pokemon, damage: number): void {
    target.hp = target.hp - damage;
    console.log(`${this.name} ataca a ${target.name} por ${damage} de daño. HP de ${target.name}: ${target.hp}`);
  }

  // Método estático
  static get count(): number {
    return Pokemon._count;
  }

  // Representación amigable
  toString(): string {
    const legend = this.isLegendary ? ' (Legendario)' : '';
    return `#${this.id} ${this.name}${legend} [${this.types.join(', ')}] HP:${this.hp}`;
  }
  async getMoves(){
    const res = await axios.get<PokemonAPI>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
    console.log(res.data.moves);
  }



}

// Definimos una clase (desde ES6 en adelante)
class Perro {
  public nombre: string;
  public edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  ladrar(): void {              // método
    console.log(`${this.nombre} está ladrando: ¡Guau Guau!`);
  }
}

// Creamos objetos (instancias de la clase)
const perro1 = new Perro("Firulais", 3);
const perro2 = new Perro("Max", 5);

// Usamos atributos y métodos
console.log(perro1.nombre); // Firulais
console.log(perro2.edad);   // 5
perro1.ladrar();            // Firulais está ladrando: ¡Guau Guau!

// ================= Ejemplos con Pokemon =================
const pikachu = new Pokemon(25, 'Pikachu', ['Electric'], 120);
const charizard = new Pokemon(6, 'Charizard', ['Fire', 'Flying'], 300, true);

console.log(pikachu.toString());
console.log(charizard.toString());

// Ataque de ejemplo
pikachu.attack(charizard, 30);

// Usando setter con validación
charizard.hp = charizard.hp - 50;
console.log('HP actualizado de Charizard:', charizard.hp);

// Accediendo a propiedad estática
console.log('Cantidad de Pokemon creados:', Pokemon.count);