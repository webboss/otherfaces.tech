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
          <div className=" md:col-span-6  col-span-12">
            <Text variant="p18" color="yellow" value="Subscribe" />
            <Text variant="h2">Join Our Newsletter</Text>
            <Text variant="p18" className="max-w-[400px]">
              Be part of 1000+ who gets notified when we publish new stories and
              roadmaps.
            </Text>

            <form className="mt-[45px]">
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
