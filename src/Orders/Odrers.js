import classes from "./Views.module.css";
import MetricCard from "../Layout/MetricCard";
import CardTitle from "../Components/CardTitile";
import TimeFrameChip from "../Components/TimeFrameChip";
import Number from "../Components/Number";
import Trends from "../Components/Trends";

const Orders = (props) => {
  console.log(props);
  return (
    <MetricCard>
      <div className={classes.card_header}>
        <CardTitle title={props.viewsData.title} />
        <TimeFrameChip
          timeFrameBadgeColors={props.viewsData.timeFrameBadgeColor}
        />
      </div>
      <div className={classes.card_body}>
        <Number totalNumber={props.viewsData.numberOfViews} />
        <Trends
          title={props.viewsData.trendViewsTitle}
          percentage={props.viewsData.percentageOfViews}
          trend_color="red"
        />
      </div>
    </MetricCard>
  );
};

export default Orders;
