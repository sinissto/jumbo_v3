import classes from "./Views.module.css";
import MetricCard from "../Layout/MetricCard";
import CardTitle from "../Components/CardTitile";
import TimeFrameChip from "../Components/TimeFrameChip";
import Number from "../Components/Number";
import Trends from "../Components/Trends";

const Views = (props) => {
  return (
    <MetricCard>
      <div className={classes.card_header}>
        <CardTitle title={props.data.title} />
        <TimeFrameChip timeFrameBadgeColors={props.data.timeFrameBadgeColor} />
      </div>
      <div className={classes.card_body}>
        <Number totalNumber={props.data.numberOfViews} />
        <Trends
          title={props.data.trendViewsTitle}
          percentage={props.data.percentageOfViews}
          trend_color="red"
        />
      </div>
    </MetricCard>
  );
};

export default Views;
