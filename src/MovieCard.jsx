import styles from "./MovieCard.module.css";

const imageRoot = "https://image.tmdb.org/t/p/w300"; // w300 => width:300px

export function MovieCard({ movie }) {
  console.log(styles);
  const imgUrl = imageRoot + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <img
        width={230}
        height={345}
        src={imgUrl}
        alt={movie.title}
        className={styles.movieImage}
      />
      <div>{movie.title}</div>
    </li>
  );
}
