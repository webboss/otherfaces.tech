import { Modal } from "components/modal";
import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import { Input } from "components/input";
import { Button } from "components/button";
import { useForm } from "react-hook-form";
import SuccessIcon from "assets/images/svgs/success.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const WailistForm = ({ isOpen, closeModal }) => {
  const [isSuccesful, setIsSuccessful] = useState(false);
  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => {
        setIsSuccessful(false);
        closeModal();
      }}
    >
      {isSuccesful ? (
        <SuccessMessage />
      ) : (
        <TheForm setIsSuccessful={setIsSuccessful} />
      )}
    </Modal>
  );
};

/*eslint no-useless-escape: "off"*/
const TheForm = ({ setIsSuccessful }) => {
  const schema = yup.object().shape({
    email_address: yup
      .string()
      .required("Kindly enter your email address")
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Invalid email address"
      ),
    first_name: yup.string().required("Kindly enter your first name"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const formData = { ...data, tags: "Waitlist for Other Faces of Tech" };

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
    <section className={sectionStyle}>
      <header>
        <h3 className={headingStyle}>Be the first to know when we launch</h3>
      </header>
      <form className={formStyle} onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-[64px]">
          <Input
            placeholder="First Name"
            name="first_name"
            register={register("first_name")}
            error={errors?.first_name?.message}
          />
          <Input
            placeholder="Email Address"
            name="email_address"
            type="email"
            register={register("email_address")}
            error={errors?.email_address?.message}
            required
          />
          <Input
            placeholder="Email Address"
            name="email_address"
            type="select"
            register={register("email_address")}
            error={errors?.email_address?.message}
            required
          />
        </div>

        <Button
          disabled={!isValid}
          isLoading={isSubmitting}
          text="Join waitlist"
          size="full"
        />
      </form>
    </section>
  );
};

const SuccessMessage = () => {
  return (
    <section className={sectionStyle}>
      <header className=" mb-20">
        <h3 className={headingStyle}>
          <SuccessIcon className="mx-auto mb-2" />
          Successful
        </h3>
      </header>

      <Button
        variant="primary"
        href={{
          url: "https://docs.google.com/forms/d/15rQZ6hd8pf8x68EkS3ThJwBktcYDd1w_ywTVF88kGz4/",
        }}
        text="Take survey"
        size="full"
      />
      <br />
      <br />
      <Button
        href={"https://paystack.shop/other-faces-of-tech"}
        text="Get merch"
        size="full"
        variant="alternative"
      />
    </section>
  );
};

const sectionStyle = ctl(`
w-full
max-w-[445px]
md:px-0
px-4

`);
const headingStyle = ctl(`
md:text-[48px]
md:leading-[56px]
text-[32px]
leading-[40px]
text-center
`);

const formStyle = ctl(`
mt-[30px]
`);

export { WailistForm };
