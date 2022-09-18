import React, { useCallback, useEffect, useState } from "react";

const NewRequestsContext = React.createContext({
  requesters: [],
  isLoading: false,
  error: "",
});

export const NewRequestsContextProvider = (props) => {
  const [requesters, setRequesters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const newRequestersURL =
    "https://629e69668b939d3dc281706e.mockapi.io/requesters";

  const fetchNewRequesters = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(newRequestersURL);

      if (response.ok === false) {
        throw new Error("Nesto si sjebao!!!");
      }
      // console.log(response);
      const data = await response.json();

      const transformedData = data.map((requesterData) => {
        // Date formating
        const dateOfRequest = new Date(requesterData.createdAt);
        const year = dateOfRequest.getFullYear();
        const month = dateOfRequest.getMonth();
        const day = dateOfRequest.getDay();

        return {
          id: requesterData.id,
          name: requesterData.name,
          image: requesterData.avatar,
          nick: "@" + requesterData.nick,
          requestDate: `${day}-${month}-${year}`,
        };
      });
      setRequesters(transformedData);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      // console.log(err.message);
    }

    setIsLoading(false);
  }, []);

  // console.log(requesters);

  useEffect(() => {
    fetchNewRequesters();
  }, [fetchNewRequesters]);

  return (
    <NewRequestsContext.Provider
      value={{ requesters: requesters, isLoading: isLoading, error: error }}
    >
      {props.children}
    </NewRequestsContext.Provider>
  );
};

export default NewRequestsContext;
