"use strict";

alert("task4");

let numberСheck = (arg, range, callback1, callback2, callback3) => {
    if (arg === range) {
        return callback1("Поздравляю! Число " + range + " отгадано");
    }
    if (arg > range) {
        return callback2("Загаданное число меньше введённого");
    }

    else if (arg < range) {
        return callback3("Загаданное число больше введённого");
    }
}

function won (str) {
    alert(str);

    return true;
};

function big (str) {
    alert(str);

    return false;
};

function small (str) {
    alert(str);

    return false;
};

let Games = () => {
    let attempts = prompt("Введите количество попыток:", "");
    attempts = Number(attempts);
    let range = Math.floor(Math.random() * (10 - 1) + 1);
    
    do {
        let attempt = prompt("Введите число в диапазоне от 1 до 10 (попыток: " + attempts + "):", "");
        attempt = Number(attempt);

        let finish = numberСheck(attempt, range, won, big, small);

        if (finish) {
            break;
        }
        else {
            attempts--;
        }

    } while (attempts !== 0);
}

Games();