import React, { useState } from "react";

import Layout from "components/layout";
import { Button, Input, Newsletter, Text } from "components";
import Container from "components/container";
import ctl from "@netlify/classnames-template-literals";
import { useForm } from "react-hook-form";

import { RoadmapsHeader } from "templates/roadmaps";

const DonatePage = () => {
  const [isSuccesful, setIsSuccessful] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
  });

  const handleSubmission = async (data, e) => {
    e.preventDefault();
    const { roadmap } = data;

    const formData = { ...data, tags: `Roadmap,${roadmap}` };

    try {
      await fetch(`/api/waitlist`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(res => res.json())
        .then(data => {
          setIsSuccessful(true);
        })
        .catch(error => {
          console.log(error);
          const { message } = error;

          if (message.includes("Exists")) {
            setIsSuccessful(true);
          } else {
            alert("Something went wrong, kindly try again");
          }
        });
    } catch (e) {
      alert("Something went wrong, kindly try again");
    }
  };
  return (
    <Layout title="Roadmaps">
      <RoadmapsHeader />

      <Container className={formContainerStyle}>
        <form onSubmit={handleSubmit(handleSubmission)}>
          <Input
            placeholder="Firstname"
            register={register("first_name")}
            error={errors?.fullname?.message}
          />
          <Input
            placeholder="E-mail Address"
            register={register("email_address")}
            error={errors?.email?.message}
            type="email"
          />

          <Input
            name="roadmap"
            id="roadmap"
            register={register("roadmap")}
            type="select"
            className="cursor-pointer"
          >
            <option>Product Management</option>
            <option>Community Management</option>
          </Input>

          <Button
            text="Donate"
            isLoading={isSubmitting}
            className="w-full mt-6"
          />
        </form>
      </Container>
      <section>
        <Newsletter />
      </section>
    </Layout>
  );
};

export default DonatePage;

const formContainerStyle = ctl(`
!max-w-[650px]
mt-[60px]
mb-[160px]
`);
