"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for(let i = 0; i < 2; i++) {
  const whatMovie = prompt('Один из последних просмотренных фильмов?', ''),
  whatScore = prompt('На сколько оцените его?', '');
  if(whatMovie != null && whatScore != null && whatMovie != '' && whatScore != '' && whatMovie.length < 50) {
    console.log('done');
    personalMovieDB.movies[whatMovie] = whatScore;
  } else {
    console.log('error');
    i--;
  }
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