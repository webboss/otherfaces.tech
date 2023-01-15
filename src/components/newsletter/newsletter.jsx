import React from "react";
import Container from "components/container";
import { Text } from "../text";
import { Input } from "components/input";
import { Hr } from "components/hr";

export const Newsletter = () => {
  return (
    <>
      <Hr />
      <Container>
        <section className="grid grid-cols-12 my-[100px]">
          <div></div>
          <div className=" col-span-6 ">
            <Text variant="p18" color="yellow" value="Subscribe" />
            <Text variant="h2">
              Join thousands of Techies who are ready for the Big Hit
            </Text>
            <Text variant="p18">
              Be part of [number of people: this data will be sourced from
              MailChimp] who gets notified when we publish new stories and
              roadmaps.
            </Text>

            <form className="mt-[85px]">
              <Input placeholder="Enter your email" />
            </form>
          </div>

          <div></div>
        </section>
      </Container>
      <Hr />
    </>
  );
};
