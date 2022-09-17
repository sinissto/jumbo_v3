import React from "react";

const VisitedContext = React.createContext({
  requesters: [],
  isLoading: false,
  error: "",
});
