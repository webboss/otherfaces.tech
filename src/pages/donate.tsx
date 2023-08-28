import React from "react";

import Layout from "components/layout";
import { Button, Input, Newsletter } from "components";
import { DonateHeader } from "templates/donate";
import Container from "components/container";
import ctl from "@netlify/classnames-template-literals";
import { useForm } from "react-hook-form";
import { usePaystackPayment } from "react-paystack";
import { useBasqet } from "basqet-react";

const paystack_default_config = {
  publicKey: process.env.GATSBY_PAYSTACK_PUBLIC_KEY,
};

const basqet_default_config = {
  public_key: process.env.GATSBY_BASQET_PUBLIC_KEY,
  currency: "NGN",
};

const DonatePage = () => {
  const {
    register,
    handleSubmit,
    reset: resetForm,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const amount = watch("amount");
  const email = watch("email");
  const amountInKobo = amount * 100;

  const onClose = () => {
    console.log("Close");
  };

  const onSucess = () => {
    resetForm();
    console.log("Successful");
  };

  const initializePaystackPayment = usePaystackPayment({
    ...paystack_default_config,
    amount: amountInKobo,
    email,
    reference: new Date().getTime().toString(),
  });

  const initializeBasqetPayment = useBasqet({
    ...basqet_default_config,
    email,
    amount: amount,
    onSuccess: () => resetForm(),
    onClose: () => console.log("closed"),
    onAbandoned: () => console.log("Checkout abandoned"),
  });

  const makePaymentBasedOnGateWay = {
    paystack: initializePaystackPayment,
    basqet: initializeBasqetPayment,
  };
  const makeDonation = async (data, e) => {
    e.preventDefault();

    const { payment_gateway } = data;

    makePaymentBasedOnGateWay[payment_gateway](onSucess, onClose);
  };
  return (
    <Layout
      title="Donate"
      description="The work we do is largely funded by individuals who buy our merch and organizations who make direct donations."
    >
      <DonateHeader />

      <Container className={formContainerStyle}>
        <form onSubmit={handleSubmit(makeDonation)}>
          <Input
            placeholder="Fullname"
            register={register("fullname")}
            error={errors?.fullname}
          />
          <Input
            placeholder="E-mail Address"
            register={register("email")}
            error={errors?.email}
            type="email"
          />

          <Input
            placeholder="Amount e.g 5000"
            register={register("amount")}
            error={errors?.amount}
            type="number"
          />

          <Input
            name="payment_gateway"
            id="payment_gateway"
            register={register("payment_gateway")}
            type="select"
            className="cursor-pointer"
          >
            <option value="paystack">Paystack (NGN/USD)</option>
            <option value="basqet">Basqet (Crypto)</option>
          </Input>

          <Button text="Donate" className="w-full mt-6" />
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
