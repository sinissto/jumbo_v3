import classes from "../Views/Views.module.css";
import MetricCard from "../Layout/MetricCard";
import CardTitle from "../Components/CardTitile";
import TimeFrameChip from "../Components/TimeFrameChip";
import Number from "../Components/Number";
import Trends from "../Components/Trends";

const Orders = (props) => {
  return (
    <MetricCard>
      <div className={classes.card_header}>
        <CardTitle title={props.data.title} />
        <TimeFrameChip timeFrameBadgeColors={props.data.timeFrameBadgeColor} />
      </div>
      <div className={classes.card_body}>
        <Number totalNumber={props.data.numberOfOrders} />
        <Trends
          title={props.data.trendOrdersTitle}
          percentage={props.data.percentageOfOrders}
          trend_color="green"
        />
      </div>
    </MetricCard>
  );
};

export default Orders;
