import React from "react";
import ctl from "@netlify/classnames-template-literals";

import policies from "config/menu/policies.json";

import { NLink } from "components/nlink";
import { Text } from "components";
import { StaticImage } from "gatsby-plugin-image";

const Policies = () => {
  const policiesMenu = policies;

  return (
    <div className={policyWrapperStyle}>
      <NLink to="/">
        <StaticImage
          alt="logo"
          src="../../../assets/images/favicon.png"
          height={50}
        />
      </NLink>
      <ul className={policyMenuList}>
        {policiesMenu.map((menuItem, index) => {
          return (
            <li key={`policy_menu_${index}`} className={policyMenuListItem}>
              <Text variant="p16" color="primary-900">
                <NLink {...menuItem?.link}>{menuItem.title}</NLink>
              </Text>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// md:-mt-20
const policyWrapperStyle = ctl(`
flex
flex-col
md:items-start
mt-14
md:text-right
`);

const policyMenuList = ctl(`
flex
flex-row
md:justify-start
justify-between
md:mt-6
mt-4
`);

const policyMenuListItem = ctl(`
md:ml-8
ml-1
first:ml-0

`);
export { Policies };
