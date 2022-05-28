import classes from "./MetricContainer.module.css";

const MetricContainer = (props) => {
  return (
    <div
      className={`${classes.metric_container} ${classes.metric_container_cols}`}
    >
      {props.children}
    </div>
  );
};

export default MetricContainer;
