import classes from "./CardTitle.module.css";

const CardTitle = (props) => {
  return (
    <div className={classes.card_title}>
      <h3>{props.title}</h3>
    </div>
  );
};

export default CardTitle;
