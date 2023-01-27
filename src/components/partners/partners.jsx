import { NLink } from "components/nlink";
import { partners } from "config";
import Container from "components/container";
import React from "react";

const Partners = () => {
  return (
    <Container>
      <div className=" px-8 md:py-14 py-10 rounded-lg md:mt-[122px] mt-[59px] border border-blue bg-white bg-opacity-5 ">
        {partners.map(partner => {
          return <Partner key={partner.name} {...partner} />;
        })}
      </div>
    </Container>
  );
};

const Partner = ({ Logo, href }) => {
  return (
    <NLink href={href}>
      <Logo height="28px" className="inline-block mx-3" />
    </NLink>
  );
};

export { Partners };
