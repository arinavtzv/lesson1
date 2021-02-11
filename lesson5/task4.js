"use strict";

let cities = [
    {name: 'Norilsk', 
    population: 177565},

    {name: 'Los Angeles', 
    population: 3990000},

    {name: 'Moscow', 
    population: 11920000},

    {name: 'New York', 
    population: 8399000}
];

const sortByPopulation = (cities) => cities.sort((a, b) => a.population - b.population);
sortByPopulation(cities);
console.log(cities);