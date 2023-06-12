import ctl from "@netlify/classnames-template-literals";
import { Text } from "components";
import React from "react";

export const ResourceCategory = ({ title, list = [] }) => {
  return (
    <section>
      <header className="flex items-center">
        <Text variant="h4" className=" mr-9 ">
          {title}
        </Text>
        <hr className="bg-white flex-1" />
      </header>

      <content className={contentResourceListStyle}>
        {list.map(() => {
          return <ResourceItem />;
        })}
      </content>
    </section>
  );
};

const ResourceItem = () => {
  return <div className={resourceItemStyle}></div>;
};

const contentResourceListStyle = ctl(`
grid
grid-cols-3
gap-6
mt-[74px]
`);

const resourceItemStyle = ctl(`
h-[521px]
bg-white
`);
