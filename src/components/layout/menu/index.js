import React from "react";
import { Link } from "gatsby";

const MainMenu = () => {
  const items = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Overview",
      url: "/overview",
    },
  ];

  const showItems = items.map((item, i) => (
    <li key={i} className="inline-block mr-8">
      <Link
        to={item.url}
        className="hover:text-gray-700"
        activeClassName="text-secondary"
      >
        {item.name}
      </Link>
    </li>
  ));
  return (
    <nav className="mb-6">
      <ol>{showItems}</ol>
    </nav>
  );
};

MainMenu.propTypes = {};

export default MainMenu;
