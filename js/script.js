'use strict'
//1
'use strict'




//
let numberOfFilms; // + будет преобразовать в число


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); // + будет преобразовать в число
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { //isNaN() - число или нет
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

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
// ЗАДАНИЕ №2
function ShowMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
ShowMyDB(personalMovieDB.privat);

// function ShowMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }
// ShowMyDB();

// ЗАДАНИЕ №3
function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номеров ${i}?`); // i - 1  убираем пустой элемент массива
    }

}
writeYourGenres();


//1 and 2 and 4
// let i = 0;
// do {

//     const lostMovie = prompt('Один из последних фильмов?', ''), //если нажать на отменить ответ, то вывется null
//         movieRating = prompt('На сколько оцените его?', '');
//     if (lostMovie != null && movieRating != null && lostMovie != '' && movieRating != '' && lostMovie.length < 50) {
//         personalMovieDB.movies[lostMovie] = movieRating;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--; //возвращаесмя на один шаг назад, чтобы повторить вопросы
//     }
//     i++
// } while (i < 2)
// let i = 0;
// while (i < 2) {

//     const lostMovie = prompt('Один из последних фильмов?', ''), //если нажать на отменить ответ, то вывется null
//         movieRating = prompt('На сколько оцените его?', '');
//     if (lostMovie != null && movieRating != null && lostMovie != '' && movieRating != '' && lostMovie.length < 50) {
//         personalMovieDB.movies[lostMovie] = movieRating;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--; //возвращаесмя на один шаг назад, чтобы повторить вопросы
//     }
//     i++
// }

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lostMovie = prompt('Один из последних фильмов?', ''), //если нажать на отменить ответ, то вывется null
            movieRating = prompt('На сколько оцените его?', '');
        if (lostMovie != null && movieRating != null && lostMovie != '' && movieRating != '' && lostMovie.length < 50) {
            personalMovieDB.movies[lostMovie] = movieRating;
            console.log("done");
        } else {
            console.log("error");
            i--; //возвращаесмя на один шаг назад, чтобы повторить вопросы
        }

    }
}
rememberMyFilms();
//3


function detectLevel() {
    if (personalMovieDB.count < 10) {
        console.log('мало');

    } else if (personalMovieDB.count < 30) {
        console.log('Вы классик');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('error');
    }
}
detectLevel();