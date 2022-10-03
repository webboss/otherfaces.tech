import * as React from "react";

import Layout from "components/layout";
import ctl from "@netlify/classnames-template-literals";

const IndexPage = () => (
  <Layout title="Other Faces of Tech" ignoreSiteName={true}>
    <header className={headerStyle}>
      <h1>We are cooking something for non-coding techies</h1>
    </header>
  </Layout>
);

const headerStyle = ctl(`
pt-[256px]
text-center
mx-auto
text-[72px]
max-w-[847px]
`);
export default IndexPage;
