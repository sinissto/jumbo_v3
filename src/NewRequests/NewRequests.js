import classes from "./NewRequests.module.css";

import NewRequestItem from "./NewRequestItem";
import MetricCard from "../Layout/MetricCard";

const importImages = (r) => {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};
const images = importImages(
  require.context("../img/newRequestsImgs", false, /\.(png|jpe?g|svg)$/)
  // require.context('./images', false, /\.(png|jpe?g|svg)$/)
);

// console.log(images['julia-robert.jpeg'])

const newRequestersData = [
  {
    id: Math.random().toString(),
    image: images["julia-robert.jpeg"],
    name: "Julia Robert",
    nick: "@julia.robert",
    requestDate: "Today",
  },
  {
    id: Math.random().toString(),
    image: images["joe-lee.jpeg"],
    name: "Joe lee",
    nick: "@joe.lee",
    requestDate: "Yesterday",
  },
  {
    id: Math.random().toString(),
    image: images["chang-lee.jpeg"],
    name: "Chang Lee",
    nick: "@chang.lee",
    requestDate: "March 06, 2022",
  },
  {
    id: Math.random().toString(),
    image: images["mickey-artur.jpeg"],
    name: "Mickey Artur",
    nick: "@mickey.artur",
    requestDate: "February 17, 2022",
  },
  {
    id: Math.random().toString(),
    image: images["shane-watson.jpeg"],
    name: "Shane Watson",
    nick: "@shane.watson",
    requestDate: "February 14, 2022",
  },
];

const NewRequests = () => {
  return (
    <MetricCard>
      {/*<div className={classes.requests}>*/}
      <div className={classes.requests_header}>
        <div className={classes.requests_header_description}>
          <h3>New Requests</h3>
          <p>3 this week</p>
        </div>
        <div className={classes.requests_replay}>
          <button className={classes.replay_btn}>
            <span className="material-icons">replay</span>
          </button>
        </div>
      </div>
      {/*Requesters on hold*/}
      <div className={classes.requests_list}>
        <ul className={classes.requests_ulist}>
          {newRequestersData.map((request) => (
            <NewRequestItem
              key={request.id}
              image={request.image}
              name={request.name}
              nick={request.nick}
              requestDate={request.requestDate}
            />
          ))}
        </ul>
      </div>
      {/*</div>*/}
    </MetricCard>
  );
};

export default NewRequests;
