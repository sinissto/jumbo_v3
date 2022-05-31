import classes from "./ProfileContainer.module.css";

const ProfileContainer = (props) => {
  return (
    <div
      className={`${classes.profile_container} ${classes.profile_container_cols}`}
    >
      {props.children}
    </div>
  );
};

export default ProfileContainer;
