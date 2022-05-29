import classes from "./TimeFrameChip.module.css";
import { useState } from "react";

const TimeFrameChip = (props) => {
  console.log(props);
  let bckColor, textColor, description;
  const [mouseOver, setMouseOver] = useState(false);

  const changeChipOverHandler = () => {
    setMouseOver(true);
  };

  const changeChipOutHandler = () => {
    setMouseOver(false);
  };

  if (!mouseOver) {
    bckColor = props.timeFrameBadgeColors.primary.bckColor;
    textColor = props.timeFrameBadgeColors.primary.textColor;
    description = props.timeFrameBadgeColors.primary.description;
  } else {
    bckColor = props.timeFrameBadgeColors.overMouse.bckColorHover;
    textColor = props.timeFrameBadgeColors.overMouse.textColorHover;
    description = props.timeFrameBadgeColors.overMouse.descriptionHover;
  }
  return (
    <div
      onMouseOver={changeChipOverHandler}
      onMouseOut={changeChipOutHandler}
      className={classes.time_frame_chip}
      style={{
        backgroundColor: bckColor,
      }}
    >
      <p style={{ color: textColor }}>{description}</p>
    </div>
  );
};

export default TimeFrameChip;
