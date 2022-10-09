import { Modal } from "components/modal";
import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Input } from "components/input";
import { Button } from "components/button";

const WailistForm = () => {
  return (
    <Modal>
      <section className={sectionStyle}>
        <header>
          <h3 className={headingStyle}>Be the first to know when we launch</h3>
        </header>
        <form className={formStyle}>
          <div className="mb-[64px]">
            <Input placeholder="First Name" />
            <Input placeholder="Email Address" />
          </div>

          <Button text="Join waitlist" size="full" />
        </form>
      </section>
    </Modal>
  );
};

const sectionStyle = ctl(`
w-full
max-w-[445px]

`);
const headingStyle = ctl(`
md:text-[48px]
leading-[56px]
text-[32px]
text-center
`);

const formStyle = ctl(`
mt-[30px]
`);

export { WailistForm };
