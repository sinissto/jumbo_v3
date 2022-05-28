import classes from "./MetricContainer.module.css";

const MetricContainer = (props) => {
  return <div className={classes.metric_container}>{props.children}</div>;
};

export default MetricContainer;
