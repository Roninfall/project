"use strict";

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function() {
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
  },
  detectPersonalLevel: function() {
    if(personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log('Вы классический зритель');
    } else if(personalMovieDB.count > 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function() {
    if(personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    } else {
      console.log('ERROR');
    }
  },
  writeYourGenres: function() {
    for(let i = 1; i <= 3; i++) {
      const userGeners = prompt(`Ваш любимый жанр под номером ${i}`, '');
      if(userGeners != null && userGeners != '') {
        personalMovieDB.genres[i-1] = userGeners;
      } else {
        console.log('ERROR');
        i--;
      }
    }
    personalMovieDB.genres.forEach(function(item, i) {
      console.log(`Любимый жанр #${i+1} - это ${item}`);
    }); 
  },
  toggleVisibleMyDB: function() {
    if(personalMovieDB.privat == false) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();