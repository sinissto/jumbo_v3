import classes from "./APIContainer.module.css";

const APIContainer = (props) => {
  return (
    <div
      className={`${classes.profile_container} ${classes.profile_container_cols}`}
    >
      {props.children}
    </div>
  );
};

export default APIContainer;
