let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let q1 = prompt('Один из последних просмотренных фильмов?');
        let q2 = prompt('На сколько оцените его?');
        
        if (q1 == '' || q2 == '' || q1 == null || q2 == null || q1.length > 50) {
            i--;
            console.log('False');
        } else {
            personalMovieDB.movies[q1] = q2;
            console.log('Done');
        }
    }
}

rememberMyFilms();

function detectPersolnalLevels() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 10) {
        alert ('Вы киноман!');
    } else alert('Произошла ошибка');
}

detectPersolnalLevels();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}

writeYourGenres();



// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     console.log('First level: ' + i);
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//         console.log('Second level: ' + j);
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//         console.log('Third level: ' + i);
//     }
//     result += "\n";
// }

// console.log(result)

// const line = 3;
// let res = '';

// //Основной цикл задает переносы
// for (let i = 0; i <= line; i++) {
//     //Первый вложенный цикл делает пробелы
//     for (let j = 0; j <= line - i; j++) {
//         res += ' '
//     }
//     //Второй вложенный цикл делает звездочки
//     for (let j = 0; j < 2 * i + 1; j++) {
//         res += '*'
//     }
//     res += '\n'
// }

// console.log(res);


let str = 'Hello, world!'
let world

console.log(str.length);
console.log(world = str.slice(7,12).toUpperCase());
console.log(world.toLowerCase().indexOf('ld'));