import React from "react";

import { Br, Button, Text } from "components";
import Container from "components/container";

export const HomeHeader = () => {
  return (
    <header className="text-primary-100 text-center min-h-screen flex-col flex items-center justify-center">
      <Container>
        <Text variant="h1" weight="500">
          Everyone in tech <Br on="mobile" />
          <span className="line-through">writes code</span>
        </Text>

        <div className="md:max-w-[950px] max-w-[700px] mx-auto  ">
          <Text variant="p18" className="mt-[20px] mb-20 max-w-[1000px]">
            We are telling the stories of the other faces in tech to inspire the
            next generation of tech bros who probably thinks they need to write
            code to succeed in tech. Through our roadmaps, you also gain clarity
            on the things you need to learn across various levels.
          </Text>
        </div>
        <Button size="large">Start your journey</Button>
      </Container>

      <div className=" w-full overflow-hidden">
        <div className="flex flex-nowrap mt-32  ">
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
        <div className="flex flex-nowrap mt-8  ">
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
