import React from "react";
import Container from "components/container";
import { Text } from "../text";
import { Input } from "components/input";
import { Hr } from "components/hr";
import { Button } from "components/button";

import ArrowIcon from "assets/images/svgs/arrow-right.svg";
import ctl from "@netlify/classnames-template-literals";

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

            <form className="mt-[45px] flex w-full  items-center">
              <Input
                isInline
                placeholder="Enter your email"
                className={inputStyle}
              />

              <Button variant="outline" className={buttonStyle}>
                <ArrowIcon />{" "}
              </Button>
            </form>
          </div>

          <div></div>
        </section>
      </Container>
      <Hr />
    </>
  );
};

const inputStyle = ctl(`
flex-grow 
border-r-0  
rounded-r-none
`);

const buttonStyle = ctl(`
flex-grow-0 
h-[53px] 
mb-4 
!border-2 
!rounded-l-none 
!border-l-0  
`);
