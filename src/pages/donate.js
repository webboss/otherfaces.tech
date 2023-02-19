import React, { useState } from "react";

import Layout from "components/layout";
import { Button, Input, Newsletter, Text } from "components";
import { DonateHeader } from "templates/donate";
import Container from "components/container";
import ctl from "@netlify/classnames-template-literals";
import { useForm } from "react-hook-form";
import { usePaystackPayment } from "react-paystack";
import { useBasqet } from "basqet-react";

const paystack_default_config = {
  reference: new Date().getTime().toString(),
  publicKey: process.env.GATSBY_PAYSTACK_PUBLIC_KEY,
};

const basqet_default_config = {
  public_key: process.env.GATSBY_BASQET_PUBLIC_KEY,
  currency: "NGN",
};

// you can call this function anything
const onSuccess = reference => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

const DonatePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
  });

  const amount = watch("amount");
  const email = watch("email");
  const amountInKobo = amount * 100;

  const initializePaystackPayment = usePaystackPayment({
    ...paystack_default_config,
    amount: amountInKobo,
    email,
  });

  const initializeBasqetPayment = useBasqet({
    ...basqet_default_config,
    email,
    amount: amount,
    onSuccess: () => console.log("success"),
    onClose: () => console.log("closed"),
  });

  const makePaymentBasedOnGateWay = {
    paystack: initializePaystackPayment,
    basqet: initializeBasqetPayment,
  };
  const makeDonation = async (data, e) => {
    e.preventDefault();

    console.log(data);
    const { payment_gateway } = data;

    makePaymentBasedOnGateWay[payment_gateway]();

    // initializePaystackPayment(onSuccess, onClose);
  };
  return (
    <Layout title="Donate">
      <DonateHeader />

      <Container className={formContainerStyle}>
        <form onSubmit={handleSubmit(makeDonation)}>
          <Input
            placeholder="Fullname"
            register={register("fullname")}
            error={errors?.fullname?.message}
          />
          <Input
            placeholder="E-mail Address"
            register={register("email")}
            error={errors?.email?.message}
            type="email"
          />

          <Input
            placeholder="Amount e.g 5000"
            register={register("amount")}
            error={errors?.amount?.message}
            type="number"
          />

          <Input
            name="payment_gateway"
            id="payment_gateway"
            register={register("payment_gateway")}
            type="select"
          >
            <option value="paystack">Paystack</option>
            <option value="basqet">Basqet</option>
          </Input>

          <Button text="Donate" />
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
max-w-[600px]
mb-[50px]
`);
