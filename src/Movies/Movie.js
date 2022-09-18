import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.movie_item}>
      <p>{props.data.title}</p>
      {/*<p>{props.data.release.toISOString()}</p>*/}
    </li>
  );
};

export default Movie;
