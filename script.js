let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// for (let x = 0; x <= 2; x++) {
//     let q1 = prompt('Один из последних просмотренных фильмов?');
//     if (q1 == '' || q1 == null || q1.length > 50) {
//         q1 = prompt('Один из последних просмотренных фильмов?');
//     }
//     let q2 = +prompt('На сколько оцените его?');
//     personalMovieDB.movies[q1] = q2;
// }

for (let x = 0; x < 2; x++) {
    let q1 = prompt('Один из последних просмотренных фильмов?');

    while(true) {
        if (q1 == '' || q1 == null || q1.length > 50) {
            q1 = prompt('Один из последних просмотренных фильмов?');
        } else break
    }

    let q2 = +prompt('На сколько оцените его?');
    personalMovieDB.movies[q1] = q2;
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else alert('Произошла ошибка');