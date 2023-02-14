import React from "react";

import Layout from "components/layout";
import { Newsletter, Text } from "components";
import { DonateHeader } from "templates/donate";

const DonatePage = () => {
  return (
    <Layout title="Donate">
      <DonateHeader />
      <section>
        <Newsletter />
      </section>
    </Layout>
  );
};

export default DonatePage;
