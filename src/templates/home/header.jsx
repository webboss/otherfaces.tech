import React from "react";

import { Br, Button, Text } from "components";
import Container from "components/container";

export const HomeHeader = () => {
  return (
    <header className="text-primary-100 text-center min-h-screen md:mt-0 mt-8 flex-col flex items-center justify-center">
      <Container>
        <div className="md:max-w-[1200px] max-w-[700px] mx-auto  ">
          <Text variant="h1" className="mb-20" weight="500">
            Stories, Resources, & Roadmaps <Br on="desktop" />
            for non-coding techies.
          </Text>
        </div>
        <Button size="large" to="#recent-stories">
          Start your journey
        </Button>
      </Container>

      <div className=" w-full mt-32  overflow-hidden">
        <div className="flex items-center flex-row-reverse">
          <div className="flex flex-nowrap overflow-hidden ">
            <div className="animated-roles">
              {roles.map(role => {
                return (
                  <Role
                    name={role}
                    key={role.replace(/\s/g, "-").toLowerCase()}
                  />
                );
              })}
            </div>
            <div className="animated-roles" aria-hidden="true">
              {roles.map(role => {
                return (
                  <Role
                    name={role}
                    key={role.replace(/\s/g, "-").toLowerCase()}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className=" flex items-center  ">
          <div className="flex flex-nowrap mt-8  overflow-hidden  ">
            <div className="animated-roles reversed">
              {roles.reverse().map(role => {
                return (
                  <Role
                    name={role}
                    key={role.replace(/\s/g, "-").toLowerCase()}
                  />
                );
              })}
            </div>
            <div className="animated-roles reversed" aria-hidden="true">
              {roles.map(role => {
                return (
                  <Role
                    name={role}
                    key={role.replace(/\s/g, "-").toLowerCase()}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Role = ({ name }) => {
  return (
    <Text
      variant="h4"
      as="span"
      className="flex-shrink-0 py-4 px-8 border-2 border-primary-100 inline-block mx-4 rounded-full"
    >
      {name}
    </Text>
  );
};

const roles = [
  "SEO Writer",
  "Product Designer",
  "Product Manager",
  "Virtual Assistant",
  "Motion Designer",
];
