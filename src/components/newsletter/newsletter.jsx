import React, { useState } from "react";
import Container from "components/container";
import { Text } from "../text";
import { Input } from "components/input";
import { Hr } from "components/hr";
import { Button } from "components/button";

import ArrowIcon from "assets/images/svgs/arrow-right.svg";
import ctl from "@netlify/classnames-template-literals";

export const Newsletter = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = e => {
    const { value } = e.target;

    setEmailAddress(value);
  };

  const subscribeToNewsletter = async e => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch(`/api/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email_address: emailAddress,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(e => {
          console.error(e.message);
        });
    } catch (e) {
      console.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };
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

            <form
              className="mt-[45px] flex w-full  items-center"
              onSubmit={subscribeToNewsletter}
            >
              <Input
                isInline
                placeholder="Enter your email"
                className={inputStyle}
                onChange={handleInput}
              />

              <Button
                variant="outline"
                className={buttonStyle}
                isLoading={isLoading}
              >
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
