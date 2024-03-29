import "./App.css";
import Header from "./Header/Header";
import { Fragment } from "react";
import MetricContainer from "./Layout/MetricContainer";

import Views from "./Views/Views";
import Orders from "./Orders/Odrers";
import Visited from "./Visited/Visited";
import Profile from "./Profile/Profile";
import ProfileContainer from "./Layout/ProfileContainer";
import NewRequests from "./NewRequests/NewRequests";
import { NewRequestsContextProvider } from "./context/newRequests-context";
import APIContainer from "./Layout/APIContainer";

import MoviesList from "./Movies/MoviesList";
import MovieDescription from "./Movies/MovieDescription";

const APP_DATA = {
  views: {
    title: "Views",
    trendViewsTitle: "Total Views",
    numberOfViews: "386,200",
    percentageOfViews: 98,
    timeFrameBadgeColor: {
      primary: {
        bckColor: "rgb(222, 243, 184)",
        textColor: "rgb(107, 146, 44)",
        description: "Monthly",
      },
      overMouse: {
        bckColorHover: "rgb(182,234,87)",
        textColorHover: "rgb(47,72,7)",
        descriptionHover: "Past Month",
      },
    },
  },

  orders: {
    title: "Orders",
    trendOrdersTitle: "Total Orders",
    numberOfOrders: "80,800",
    percentageOfOrders: 28,
    timeFrameBadgeColor: {
      primary: {
        bckColor: "rgb(250, 222, 162)",
        textColor: "rgb(241, 157, 69)",
        description: "Annual",
      },
      overMouse: {
        bckColorHover: "rgb(254,128,25)",
        textColorHover: "rgb(255,253,249)",
        descriptionHover: "Last Year",
      },
    },
  },

  visited: {
    title: "Visited",
    timeFrameBadgeColor: {
      primary: {
        bckColor: "rgb(240,227,253)",
        textColor: "rgb(97,0,231)",
        description: "Today",
      },
      overMouse: {
        bckColorHover: "rgb(90,0,230)",
        textColorHover: "rgb(255,253,249)",
        descriptionHover: "Yesterday",
      },
    },
    rapidPace: {
      trendRapidTitle: "Rapid Pace",
      numberOfRapid: "406,42",
      percentageOfRapid: 23,
    },
    slowPace: {
      trendSlowTitle: "Slow Pace",
      numberOfSlow: "206,12",
      percentageOfSlow: 1.58,
    },
  },
};

function App() {
  return (
    <Fragment>
      <Header />
      <MetricContainer>
        <Views data={APP_DATA.views} />
        <Orders data={APP_DATA.orders} />
        <Visited data={APP_DATA.visited} />
      </MetricContainer>

      <ProfileContainer>
        <Profile />
        <NewRequestsContextProvider>
          <NewRequests />
        </NewRequestsContextProvider>
      </ProfileContainer>

      <APIContainer>
        <MoviesList />
        <MovieDescription />
      </APIContainer>
    </Fragment>
  );
}

export default App;
