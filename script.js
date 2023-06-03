let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let q1 = prompt('Один из последних просмотренных фильмов?');
let q2 = +prompt('На сколько оцените его?');
personalMovieDB.movies[q1] = q2;

q1 = prompt('Один из последних просмотренных фильмов?');
q2 = +prompt('На сколько оцените его?');
personalMovieDB.movies[q1] = q2;