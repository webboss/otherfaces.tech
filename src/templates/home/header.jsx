import React from "react";

import { Br, Button, Text } from "components";
import Container from "components/container";
import Rightpath from "assets/images/svgs/rightpath.svg";
import Leftpath from "assets/images/svgs/leftpath.svg";

export const HomeHeader = () => {
  return (
    <header className="text-primary-100 text-center min-h-screen md:mt-0 mt-8 flex-col flex items-center justify-center">
      <Container>
        <Text variant="h1" weight="500">
          Everyone in tech <Br on="mobile" />
          <span className="line-through">writes code</span>
        </Text>

        <div className="md:max-w-[950px] max-w-[700px] mx-auto  ">
          <Text variant="p18" className="mt-[20px] mb-20 max-w-[1000px]">
            We are telling stories and providing roadmaps to non-coding careers
            in tech.
          </Text>
        </div>
        <Button size="large" to="#recent-stories">
          Start your journey
        </Button>
      </Container>

      <div className=" w-full mt-32  overflow-hidden">
        <div className="flex items-center flex-row-reverse">
          <div className="">
            <Rightpath />
          </div>
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
          <div>
            <Leftpath />
          </div>
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
