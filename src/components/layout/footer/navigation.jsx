import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { NLink } from "components/nlink";

import footerMenu from "config/menu/footer.json";
import { Text } from "components";

const FooterNavigation = () => {
  const footerMenuKeys = Object.keys(footerMenu);
  return (
    <nav className={footerNavigationStyle}>
      {footerMenuKeys.map(footerMenuKey => {
        return (
          <NavList
            key={footerMenuKey}
            header={footerMenuKey}
            list={footerMenu[footerMenuKey]}
          />
        );
      })}
    </nav>
  );
};

const NavList = ({ header, list }) => {
  return (
    <div>
      <Text variant="h6">{header}</Text>

      <ul>
        {list.map((listItem, index) => {
          return (
            <li key={`footer_list_item_${index}`} className="mt-2">
              <NLink {...listItem?.link}>
                <Text variant="p16" color="primary-900">
                  {listItem.title}
                </Text>
              </NLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const footerNavigationStyle = ctl(`
grid
md:grid-cols-4
grid-cols-2
gap-8
`);

export { FooterNavigation };
