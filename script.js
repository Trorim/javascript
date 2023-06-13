'use strict';

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start()


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let q1 = prompt('Один из последних просмотренных фильмов?');
            let q2 = prompt('На сколько оцените его?');
    
            if(q1 != null) {
                q1 = q1.trim();
            }
            
            if (q1 == '' || q2 == '' || q1 == null || q2 == null || q1.length > 50) {
                i--;
                console.log('False');
            } else {
                personalMovieDB.movies[q1] = q2;
                console.log('Done');
            }
        }
    },
    detectPersolnalLevels: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 10) {
            alert ('Вы киноман!');
        } else alert('Произошла ошибка');
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let answer = prompt(`Ваш любимый жанр под номером ${i}`);
            if (answer === null || answer === '') {
                --i;
            } else personalMovieDB.genres.push(answer);
        };
    
        personalMovieDB.genres.forEach((el, i) => console.log(`Любимый жанр ${(i + 1)} - это ${el}`));
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else personalMovieDB.privat = false;
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersolnalLevels();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         let q1 = prompt('Один из последних просмотренных фильмов?');
//         let q2 = prompt('На сколько оцените его?');

//         if(q1 != null) {
//             q1 = q1.trim();
//         }
        
//         if (q1 == '' || q2 == '' || q1 == null || q2 == null || q1.length > 50) {
//             i--;
//             console.log('False');
//         } else {
//             personalMovieDB.movies[q1] = q2;
//             console.log('Done');
//         }
//     }
// }

// rememberMyFilms();

// function detectPersolnalLevels() {
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         alert('Вы классический зритель');
//     } else if (personalMovieDB.count > 10) {
//         alert ('Вы киноман!');
//     } else alert('Произошла ошибка');
// }

// detectPersolnalLevels();

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
//     }
// }

// writeYourGenres();



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
// let arr = [0, 1]
// function fib(num) {
//     if (Number.isFinite(num) && num >= 0) {
//         for (let i = 0; i < num; i++) {
//             arr.push(arr[i] + arr[i+1])
//         }
//     } else return 0
//     return arr
// }

// fib(10)
// console.log(arr);

let arr = [0, 1]
function fib(num) {
    if (num == 1) return '0';
    else if (num == 2) return '0 1';
    else if (Number.isFinite(num) && num > 0 && Number.isInteger(num)) {
        for (let i = 0; i < num - 2; i++) {
            arr.push(arr[i] + arr[i+1]);
        }
    } else return '';
    return arr.join(' ');
}

fib(1)
console.log(arr);

function done(x, y) {
    setTimeout(function() {
        console.log(1);
    }, 500);
    y();
}

done(10, function() {
    console.log(11);
})


const obj = {
    status: true,
    height: 1240,
    width: 300,
    options: {
        1: true,
        2: false,
    }
};

for (let key in obj) {
    console.log(`В объекте находится ключ ${key} со значением ${obj[key]}`);
}

console.log(Array(obj).length);

let {height: h, width: w, status:s, options} = obj
console.log(h, w, s, options);

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
    return 'Семья пуста';
    } else {
    return `Семья состоит из: ${arr}`;
    }
};

showFamily(family);

let object = {
    height: 150,
    width: 100,
}

let newObject = Object.create(object);

console.log(object);
console.log(newObject.width);

let object2 = {};

Object.setPrototypeOf(object2, object);

console.log(object2.height);