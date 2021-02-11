"use strict";

const FirstCity = {
    name: 'Norilsk',
    founded: 1935,
    population: 177565,
    country: 'Russia'
};

const SecondCity = {
    name: 'Los Angeles',
    founded: 1890,
    population: 3990000,
    country: 'USA'
};

//сравнение названия

const comparisonName = (FirstCity, SecondCity) => {
     if (FirstCity.name.length === SecondCity.name.length) {
        alert('Длина названия города ' + FirstCity.name + ' равна длине названия города ' + SecondCity.name);
      }
      else if (FirstCity.name.length > SecondCity.name.length) {
        alert('Длина названия города ' + FirstCity.name + ' больше длины названия города ' + SecondCity.name);
      }
      else {
        alert('Длина названия города ' + FirstCity.name + ' меньше длины названия города ' + SecondCity.name);
      }
    }

//сравнение населения
const comparisonPopulation = (FirstCity, SecondCity) => {
    if (FirstCity.population === SecondCity.population) {
        alert('Численность население города ' + FirstCity.name + ' равна населению города ' + SecondCity.name);
      }
      else if (FirstCity.population > SecondCity.population) {
        alert('Численность населения города ' + FirstCity.name + ' больше населения города ' + SecondCity.name);
      }
      else {
        alert('Численность населения города ' + FirstCity.name + ' меньше населения города ' + SecondCity.name);
      }
    }

//сравнение даты основания
 const comparisonDate = (FirstCity, SecondCity) => {
    if (FirstCity.founded === SecondCity.founded) {
        alert('Дата основания города ' + FirstCity.name + ' равна дате основания города  ' + SecondCity.name);
      }
      else if (FirstCity.founded > SecondCity.founded) {
        alert('Дата основания города ' + FirstCity.name + ' больше даты основания города ' + SecondCity.name);
      }
      else {
        alert('Дата основания города ' + FirstCity.name + ' меньше даты основания города' + SecondCity.name);
      }
    }

function showFullInformation() {
    return(`Город ${this.name} был основан в ${this.founded} и расположен в стране ${this.country} численность населения города составляет ${this.population} человек.`)
}

FirstCity.fullInf = showFullInformation;
SecondCity.fullInf = showFullInformation;

comparisonName(FirstCity, SecondCity);
comparisonPopulation(FirstCity, SecondCity);
comparisonDate(FirstCity, SecondCity);