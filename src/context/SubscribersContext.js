import React, { useEffect, createContext, useState, useContext } from "react";

const SubscribersContext = createContext();

export const useSubscribersContext = () => useContext(SubscribersContext);

const SubscribersContextProvider = ({ children }) => {
  const [noOfSubscribers, setNoOfSubscribers] = useState(100);
  useEffect(() => {
    fetch("/api/no-of-subscribers")
      .then(res => res.json())
      .then(response => {
        const { data } = response;

        const { total_items } = data ?? {};

        if (total_items) {
          setNoOfSubscribers(total_items);
        }
      });
  }, []);

  return (
    <SubscribersContext.Provider
      value={{
        noOfSubscribers,
      }}
    >
      {children}
    </SubscribersContext.Provider>
  );
};

export default SubscribersContextProvider;
