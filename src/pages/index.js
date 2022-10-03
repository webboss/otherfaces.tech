import * as React from "react";

import Layout from "components/layout";
import ctl from "@netlify/classnames-template-literals";
import WaitlistArrow from "svgs/waitlist-arrow.svg";
import { Button } from "components";

const IndexPage = () => (
  <Layout title="Other Faces of Tech" ignoreSiteName={true}>
    <header className={headerStyle}>
      <h1>We are cooking something for non-coding techies</h1>
    </header>
    <div className="text-center">
      <WaitlistArrow className="mx-auto" />
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
text-[72px]
max-w-[847px]
`);
export default IndexPage;
