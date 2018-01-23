# Тестируем сервер, используя Mocha

## 1. Unit тесты

Для следующей реализации классов Pokemon и PokemonList:

            class Pokemon {
              constructor(name, level) {
                this.name = name;
                this.level = level;
              }
              show() {
                console.log(`Hi! My name is ${this.name}, my level is ${this.level}`);
              }
              valueOf(){
                return this.level;
              }
            }

            class Pokemonlist extends Array{
              constructor(...items){
                items = items.filter(
                  item => item instanceof Pokemon
                );
                super(...items);
              }
              add(name,level){
                let newPokemon = new Pokemon(name,level);
                this.push(newPokemon);
              }
              show(){
                this.forEach(function(item){
                  item.show();
                });
                console.log(`There are ${this.length} pokemons here.`);
              }
              max(){
                let strongestPokemon = Math.max(...this);
                return this.find(
                item => item.level==strongestPokemon
                );
              }
            }

1.  Напишите тесты на метод `show` класса `Pokemon`.
2.  Напишите тесты на метод `add` класса `PokemonList`.
3.  Напишите тесты на метод `show` класса `PokemonList`.
4.  Напишите тесты на метод `max` класса `PokemonList`.

При написании тестов грамотно организовывайте тесты по файлам и наборам. И максимально используйте хуки, и другие возможности Mocha, чтобы тесты соответствовали принципу DRY.

Учитывайте все возможные ситуации при написании тестов на тот или иной метод.

## 2. Интеграционные тесты

Тесты на веб-сервер созданный по заданию __Создаем простое API, используя express__.

1.  Напишите тесты на создание пользователя по REST протоколу.
2.  Напишите тесты на удаление пользователя по REST протоколу.

Достаточно убедиться что созданный веб-сервер отвечает так как ожидается по протоколу. Создался и удалился ли пользователь проверять не обязательно.

Учитывайте все возможные ситуации при написании тестов на тот или иной запрос.