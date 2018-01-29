const assert = require('assert');
const pokemonClasses = require('../src/task1/pokemon.js');
const Pokemon = pokemonClasses.Pokemon
const PokemonList = pokemonClasses.PokemonList

const compareElements = (list) => {
  return (list[0].name === 'Ivysaur') && (list[0].level === 5) && (list[1].name === 'Venusaur') && (list[1].level === 3) && (list[2].name === 'Charmander') && (list[2].level === 7);
}

describe('Task1. Classes tests', () => {
  const pokemon = new Pokemon('Ivysaur', 5);
  const pokemon2 = new Pokemon('Venusaur', 3);
  const pokemon3 = new Pokemon('Charmander', 7);

  describe('Checking Pokemon SHOW method', () => {
    it('Return a undefined', () => {
      assert.equal(pokemon.show(), undefined);
    });
    it('Immutable', () => {
      pokemon.show();
      assert.equal(pokemon.name, 'Ivysaur');
      assert.equal(pokemon.level, 5);
    });
    it('Instance of Pokemon class', () => {
      const pokemon = new Pokemon('Ivysaur', 5);
      assert(pokemon instanceof Pokemon, 'Element dosnt instance of Pokemon class');
    });
  });

  describe('PokemonList methods', () => {
    let list;
    beforeEach(() => {
      list = new PokemonList(pokemon, pokemon2, pokemon3);
    });
    describe('Checking PokemonList ADD method', () => {
      it('Adding a new pokemon', () => {
        const listLength = list.length;
        list.add('Pikachu', 9);
        assert.equal(list.length, 4);
      });
      it('Adding a new pokemon with one argument', () => {
        list.add('Pikachu');
        assert.equal(list.length, 4);
      });
      it('Dont change existing elements', () => {
        list.add('Pikachu', 9);
        assert(compareElements(list), 'Some elements has been changed!');
      });
    });
    describe('Checking PokemonList SHOW method', () => {
      it('Immutable', () => {
        list.show();
        assert(compareElements(list), 'Some elements has been changed!');
      });
      it('Return a undefined', () => {
        assert.equal(list.show(), undefined);
      });
      it('Instance of PokemonList class', () => {
        assert(list instanceof PokemonList, 'Element dosnt instance of Pokemon class');
      });
    });
    describe('Checking PokemonList MAX method', () => {
      it('Immutable', () => {
        list.max();
        assert(compareElements(list), 'Some elements has been changed!');
      });
      it('Return a correct result', () => {
        assert.equal(list.max().name, 'Charmander');
      });
      it('Working properly if pass a argument', () => {
        assert.equal(list.max('Ivysaur').name, 'Charmander');
      });
    });
  });
});