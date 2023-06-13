import React, { useState } from "react";

import Layout from "components/layout";
import ctl from "@netlify/classnames-template-literals";
import WaitlistArrow from "svgs/waitlist-arrow.svg";
import { Br, Button } from "components";
import { WailistForm } from "components/waitlist-form";

const IndexPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);
  return (
    <Layout title="Other Faces of Tech" ignoreSiteName={true}>
      <section className={sectionStyle}>
        <div>
          <header className={headerStyle}>
            <h1>
              We are <Br on="mobile" />
              cooking something <Br on="mobile" />
              for{" "}
              <span className="primary">
                non-coding <Br on="mobile" />
                techies
              </span>
            </h1>
          </header>
          <div className="text-center  py-4">
            <WaitlistArrow className="mx-auto md:h-[200px] h-[160px]" />
          </div>
          <footer className="text-center">
            <Button text="Join the waitlist" size="large" onClick={openModal} />
            <br /> <br />
            <Button
              href={"https://paystack.shop/other-faces-of-tech"}
              text="Get merch"
              size="large"
              variant="alternative"
            />
          </footer>
        </div>
      </section>
      <WailistForm isOpen={isOpenModal} closeModal={closeModal} />
    </Layout>
  );
};

const sectionStyle = ctl(`
h-[calc(100vh-138px)]
flex
items-center
justify-center
`);
const headerStyle = ctl(`
text-center
mx-auto
md:text-[64px]
lg:text-[72px]
text-[38px]
max-w-[947px]
md:leading-[82px]
leading-[46px]
`);
export default IndexPage;
