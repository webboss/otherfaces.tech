import React from "react";
import { useForm } from "react-hook-form";

import Layout from "components/layout";
import Container from "components/container";
import PageHeader from "components/page-header";
import { Button, Input, NLink, Text } from "components";

const Overview = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { isValid, isDirty, errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    alert(`Hi ${data.name}`);

    setTimeout(() => {
      resetField("name");
    }, 2000);
  };

  return (
    <Layout title="Overview">
      <PageHeader title="Project Overview" />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <Input
            label="Enter your name"
            required
            type="text"
            register={register("name")}
            error={errors.name?.message}
          />
          <Button disabled={!isDirty || !isValid} text="Submit" size="xlarge" />
        </form>

        <div className="mt-10">
          <Text
            variant="h2"
            value="Gotcha! Kindly check the README.md for more details"
          />
        </div>

        <div className="my-10">
          <NLink to="/get-lost">Click here to get lost 😉</NLink>
        </div>
      </Container>
    </Layout>
  );
};

export default Overview;
