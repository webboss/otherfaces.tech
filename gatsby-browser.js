import React from "react";
import SubscribersContextProvider from "context/SubscribersContext";
import "./src/style/tailwind.css";

export const wrapRootElement = ({ element }) => (
  <SubscribersContextProvider>{element}</SubscribersContextProvider>
);
