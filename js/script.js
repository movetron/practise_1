'use strict'

//1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); // + будет преобразовать в число
console.log(numberOfFilms);

//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: { //пустой объект

    },
    actors: {
        //пустой объект
    },
    genres: [
        //пустой массив
    ],
    privat: false
};

//3
const lostMovie = prompt('Один из последних фильмов?', ''),
    movieRating = +prompt('На сколько оцените его?', ''),
    lostMovie1 = prompt('Один из последних фильмов?', ''),
    movieRating1 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lostMovie] = movieRating; //logan:8.1
personalMovieDB.movies[lostMovie1] = movieRating1;

console.log(personalMovieDB);