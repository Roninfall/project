const answer = prompt('Сколько фильмов вы уже посмотрели?', '');
let numberOfFilms = answer;

let personalMovieDB = {
  count: answer,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


console.log(personalMovieDB.count);