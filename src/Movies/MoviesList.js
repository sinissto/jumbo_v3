import classes from "./MoviesList.module.css";
import { useCallback, useEffect, useState } from "react";
import Movie from "./Movie";

const MoviesList = (props) => {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = useCallback(async () => {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    // console.log(response);
    // console.log(data);
    // console.log(data.results);

    const transformedMoviesData = data.results.map((movie) => {
      // console.log(movie.release_date);
      return {
        id: movie.episode_id,
        title: movie.title,
        intro: movie.opening_crawl,
        release: new Date(movie.release_date),
        url: movie.url,
      };
    });

    setMovies(transformedMoviesData);
  }, []);

  console.log(movies);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.heading}>STAR WAR MOVIES</div>
        <div>
          <label htmlFor="sort">Sort by:</label>
          <select name="sort" id="sort">
            {/*<option value="">Sort by:</option>*/}
            <option value="release_date">Release date</option>
            <option value="chronologically">Chronologically</option>
          </select>
        </div>
      </div>
      <ul className={classes.movie_list}>
        {movies.map((movie) => {
          return <Movie key={movie.id} data={movie} />;
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
