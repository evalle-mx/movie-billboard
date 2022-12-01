import { MovieCard } from "./MovieCard";
import movies from "./movies.json";

import styles from "./MovieGrid.module.css";

/*
export function MovieGrid() {
    console.log('Movies: ', movies );
  return (
    <ul>
      <li>Pelicula 1</li>
      <li>Pelicula 2</li>
      <li>Pelicula 3</li>
      <li>Pelicula 4</li>
    </ul>
  );
} //*/

/* export function MovieGrid() {
    console.log('Movies: ', movies );
  return (
    <ul>
      {movies.map ( function(mov) {
        return <li key={mov.id}>{mov.title}</li>
      } ) }
    </ul>
  );
}//*/

/*/Con arrow function
export function MovieGrid() {
    console.log('Movies: ', movies );
  return (
    <ul>
      {movies.map ( (mov) => 
        <li key={mov.id}>{mov.title}</li>
       ) }
    </ul>
  );
}//*/
export function MovieGrid() {
    console.log('Movies: ', movies );
  return (
    <ul className={styles.moviesGrid}>
      {movies.map ( (mov) => 
        <MovieCard key={mov.id} movie={mov} />
       ) }
    </ul>
  );
}
