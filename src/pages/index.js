import * as React from "react";

import Layout from "components/layout";
import ctl from "@netlify/classnames-template-literals";
import WaitlistArrow from "svgs/waitlist-arrow.svg";
import { Br, Button } from "components";

const IndexPage = () => (
  <Layout title="Other Faces of Tech" ignoreSiteName={true}>
    <header className={headerStyle}>
      <h1>
        We are <Br on="mobile" />
        cooking something <Br on="mobile" />
        for non-coding techies
      </h1>
    </header>
    <div className="text-center py-4">
      <WaitlistArrow className="mx-auto md:h-[240px] h-[160px]" />
    </div>
    <footer className="text-center">
      <Button text="Join the waitlist" size="large" />
      <br /> <br />
      <Button text="Get merch" size="large" variant="alternative" />
    </footer>
  </Layout>
);

const headerStyle = ctl(`
text-center
mx-auto
md:text-[64px]
lg:text-[72px]
text-[40px]
max-w-[947px]
md:leading-[94px]
leading-[48px]
`);
export default IndexPage;
