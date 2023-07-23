import React from "react";
import Container from "components/container";
import { Text } from "../text";
import { Input } from "components/input";
import { Hr } from "components/hr";
import { Button } from "components/button";
import Pattern from "assets/images/svgs/patterns.svg";
import MobilePattern from "assets/images/svgs/mobile-pattern.svg";
import ArrowIcon from "assets/images/svgs/arrow-right.svg";
import ctl from "@netlify/classnames-template-literals";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSubscribersContext } from "context/SubscribersContext";
import { toast } from "react-toastify";

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
          toast.success("You are now on the mailing list.", {
            className: "!rounded-full !font-secondary ",
          });

          reset();
        })
        .catch(e => {
          toast.error("Something went wrong, kindly try again");
        });
    } catch (error) {
      toast.error("Something went wrong, kindly try again");
    }
  };
  return (
    <>
      <Hr />
      <Container>
        <section className=" my-[100px]">
          <div></div>
          <div className=" flex md:flex-row flex-col-reverse items-center justify-between">
            <div className="md:text-left text-center md:mt-0 mt-[15px] ">
              <Text variant="p18" color="yellow" value="Subscribe" />
              <Text variant="h2" className="md:mt-[40px] mt-[15px]">
                Join thousands of Techies who are ready for the Big Hit
              </Text>
              <Text
                variant="p18"
                className="max-w-[400px] md:mt-[21px] mt-[16px] "
              >
                Be part of {noOfSubscribers}+ who gets notified when we publish
                new stories and roadmaps.
              </Text>

              <form
                className="mt-[45px] flex w-full max-w-[732px] items-center"
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
            <div className="md:block hidden">
              <Pattern />
            </div>
            <div className="md:hidden block">
              <MobilePattern />
            </div>
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
