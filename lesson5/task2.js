"use strict";

const FirstCity = {
    name: 'Norilsk',
    founded: 1935,
    population: 177565,
    country: 'Russia',
};

const SecondCity = {
    name: 'Los Angeles',
    founded: 1890,
    population: 3990000,
    country: 'USA'
};
const ThirdCity = {};

for (let key in FirstCity){
    ThirdCity[key] = FirstCity[key];
}

const FourthCity = Object.assign({}, SecondCity);

ThirdCity.name = 'Moscow';
ThirdCity.founded = 1147;

FourthCity.name = 'New York';
FourthCity.founded = 1624;

const showAllCitiesInf = () => [FirstCity, SecondCity, ThirdCity, FourthCity].forEach(city => city.fullInf());
showAllCitiesInf();
