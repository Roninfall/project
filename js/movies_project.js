"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const whatMovie = [];
const whatScore = [];

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for(let i = 0; i < 2; i++) {
  whatMovie[i] = prompt('Один из последних просмотренных фильмов?', ''),
  whatScore[i] = prompt('На сколько оцените его?', '');
  personalMovieDB.movies[whatMovie[i]] = whatScore[i];
}

if(personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log('Вы классический зритель');
} else if(personalMovieDB.count > 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}


console.log(personalMovieDB);