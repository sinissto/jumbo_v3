import classes from "./MetricCard.module.css";

const MetricCard = (props) => {
  console.log(props);
  return <div className={`${classes.metric_card}`}>{props.children}</div>;
};

export default MetricCard;
