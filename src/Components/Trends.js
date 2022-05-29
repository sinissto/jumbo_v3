import classes from "./Trends.module.css";

const Trends = (props) => {
  return (
    <div className={classes.trends}>
      <p className={classes.trends_title}>{props.title}</p>
      <p className={classes.percentage} style={{ color: props.trend_color }}>
        {props.percentage}%
      </p>
      <span className="material-icons" style={{ color: props.trend_color }}>
        trending_down
      </span>
    </div>
  );
};

export default Trends;
