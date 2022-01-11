"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if(personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
  } else if(personalMovieDB.count > 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB() {
  if(personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  } else {
    console.log('ERROR');
  }
}

showMyDB();

function writeYourGenres() {
  for(let i = 0; i < 3; i++) {
    const userGeners = prompt(`Ваш любимый жанр под номером ${i}`, '');
    personalMovieDB.genres[i] = userGeners;
  }
}

writeYourGenres();