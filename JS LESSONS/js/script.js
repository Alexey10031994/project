"use strict";

const numberOfFilms = +prompt("сколько фильмов вы уже смотрели?", "");

const personMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из полседних фильмов?", ""),
    b = prompt("Оценка фильма?", ""),
    c = prompt("Один из полседних фильмов?", ""),
    d = prompt("Оценка фильма?", "");

personMovieDB.movies[a] = b;
personMovieDB.movies[c] = d;

console.log(personMovieDB);