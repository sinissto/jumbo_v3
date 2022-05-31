import classes from "../Views/Views.module.css";
import visitedClasses from "./Visited.module.css";

import CardTitle from "../Components/CardTitile";
import TimeFrameChip from "../Components/TimeFrameChip";
import Number from "../Components/Number";
import Trends from "../Components/Trends";

const Visited = (props) => {
  return (
    <div className={visitedClasses.visited_container}>
      {/*<div className={visitedClasses.visited}>*/}
      <div className={classes.card_header}>
        <CardTitle title={props.data.title} />
        <TimeFrameChip timeFrameBadgeColors={props.data.timeFrameBadgeColor} />
      </div>
      <div className={visitedClasses.card_body_visited}>
        <div className={classes.card_body}>
          <Number totalNumber={props.data.rapidPace.numberOfRapid} />
          <Trends
            title={props.data.rapidPace.trendRapidTitle}
            percentage={props.data.rapidPace.percentageOfRapid}
            trend_color="green"
          />
        </div>
        <div className={classes.card_body}>
          <Number totalNumber={props.data.slowPace.numberOfSlow} />
          <Trends
            title={props.data.slowPace.numberOfSlow}
            percentage={props.data.slowPace.numberOfSlow}
            trend_color="red"
          />
        </div>
      </div>
      {/*</div>*/}
    </div>
  );
};

export default Visited;
