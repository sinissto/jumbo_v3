import classes from "./MoviesDescription.module.css";

const MovieDescription = (props) => {
  return (
    <div>
      <div className={classes.header}>
        <button type="button">Intro</button>
        <button type="button">Cast</button>
      </div>
      <div>Intro ili cast</div>
    </div>
  );
};

export default MovieDescription;
