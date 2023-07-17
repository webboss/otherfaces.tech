import React from "react";
import SubscribersContextProvider from "context/SubscribersContext";
import "./src/style/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

export const wrapRootElement = ({ element }) => (
  <SubscribersContextProvider>{element}</SubscribersContextProvider>
);

export const onRouteUpdate = ({ location }) => {
  console.log("[env]", process.env.NODE_ENV);
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  const pagePath = location
    ? location.pathname + location.search + location.hash
    : undefined;
  setTimeout(() => {
    if (typeof gtag === "function") {
      gtag("event", "page_view", { page_path: pagePath });
    }
  }, 100);
};
