import classes from "./Number.module.css";

const Numbers = (props) => {
  return (
    <div className={classes.total_number}>
      <strong>{props.totalNumber}</strong>
    </div>
  );
};

export default Numbers;
