import { NLink } from "components/nlink";
import { partners } from "config";
import Container from "components/container";
import React from "react";

const Partners = () => {
  return (
    <Container className="text-center">
      <div className=" px-8 md:py-14 py-10 rounded-lg overflow-x-auto scrollbar-hide flex md:justify-center justify-start  border border-blue bg-white bg-opacity-5 ">
        {partners.map(partner => {
          return <Partner key={partner.name} {...partner} />;
        })}
      </div>
    </Container>
  );
};

const Partner = ({ Logo, href }) => {
  return (
    <NLink href={href} className="inline-block">
      <Logo height="28px" className="inline-block mx-3 " />
    </NLink>
  );
};

export { Partners };
