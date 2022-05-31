import classes from "./NewRequestItem.module.css";
import { useState } from "react";

const NewRequestItem = (props) => {
  const { image, name, nick, requestDate } = props;

  const [isHover, setIsHover] = useState(false);

  const hoverOverHandler = () => {
    setIsHover(true);
  };

  const hoverOutHandler = () => {
    setIsHover(false);
  };

  return (
    <li
      onMouseOverCapture={hoverOverHandler}
      onMouseOut={hoverOutHandler}
      className={classes.list_item}
    >
      <img className={classes.list_img} src={image} />
      <div className={classes.list_description}>
        <div className={classes.list_name_nick}>
          <p className={classes.name}>{name}</p>
          <p className={classes.nick}>{nick}</p>
        </div>
        <div className={classes.date_btn}>
          <p className={`${classes.date_request} ${isHover && classes.active}`}>
            {requestDate}
          </p>

          <div
            className={`${classes.accept_reject_btns} ${
              !isHover && classes.active
            }`}
          >
            <button
              // onMouseOver={hoverOverHandler}
              className={classes.accept_btn}
            >
              ACCEPT
            </button>
            <button className={classes.reject_btn}>REJECT</button>
          </div>

          <button className={classes.list_btn}>
            <span className="material-icons">more_vert</span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default NewRequestItem;
