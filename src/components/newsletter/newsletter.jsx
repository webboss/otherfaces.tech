import React, { useState, useEffect } from "react";
import Container from "components/container";
import { Text } from "../text";
import { Input } from "components/input";
import { Hr } from "components/hr";
import { Button } from "components/button";

import ArrowIcon from "assets/images/svgs/arrow-right.svg";
import ctl from "@netlify/classnames-template-literals";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSubscribersContext } from "context/SubscribersContext";

const validationSchema = yup.object().shape({
  email_address: yup
    .string()
    .required("Kindly enter your email address")
    .trim()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email address"
    ),
});
export const Newsletter = () => {
  const { noOfSubscribers } = useSubscribersContext() ?? {};

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const subscribeToNewsletter = async (data, e) => {
    e.preventDefault();

    try {
      await fetch("/api/newsletter", {
        method: "POST",

        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(data => {
          alert("You have been added to our newsletter");
          reset();
        })
        .catch(e => {
          alert("Something went wrong, kindly try again");
        });
    } catch (error) {
      console.long(error.message);
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
              Be part of {noOfSubscribers}+ subscribers who gets notified when
              we publish new stories and roadmaps.
            </Text>

            <form
              className="mt-[45px] flex w-full  items-center"
              onSubmit={handleSubmit(subscribeToNewsletter)}
            >
              <Input
                isInline
                register={register("email_address")}
                placeholder="Enter your email"
                className={inputStyle}
                error={errors?.email_address?.message}
              />

              <Button
                isInline
                variant="outline"
                className={`${buttonStyle} ${
                  errors.email_address && "mb-[44px] border-action-error "
                }`}
                isLoading={isSubmitting}
                disabled={!isValid}
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

flex-shrink
border-r-0  
rounded-r-none
`);

const buttonStyle = ctl(`
flex-shrink-0
h-[53px] 
mb-4 
min-w-[60px] 
!border-2 
!rounded-l-none 
!border-l-0  
`);
