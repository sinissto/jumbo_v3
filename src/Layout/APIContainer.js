import classes from "./APIContainer.module.css";

const APIContainer = (props) => {
  return (
    <div className={`${classes.container} ${classes.container_cols}`}>
      {props.children}
    </div>
  );
};

export default APIContainer;
