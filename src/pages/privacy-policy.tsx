import React from "react";

import Layout from "components/layout";
import { Text } from "components";
import Container from "components/container";

const PrivacyPolicyPage = () => {
  return (
    <Layout title="Privacy Policy">
      <Container>
        <section className=" pt-[60px] pb-[120px]">
          <header className="py-[60px]">
            <Text variant="h2" value="Privacy Policy" />
          </header>
          <div className=" article block max-w-[758px]">
            <p>
              Thank you for accessing otherfaces.tech. We respect your privacy
              and want to protect your personal information. To learn more,
              please read through this privacy policy below.
            </p>
            <p>Our Privacy Policy explains the following; </p>
            <ol>
              <li>how we make use of your personal information;</li>
              <li>
                the steps we have taken to secure your personal information;
              </li>
              <li>
                your options regarding the use of your personal information. By
                visiting the website directly or through another site, you
                accept the practices described in this policy.
              </li>
            </ol>
            <h3>1. Data Protection</h3>
            <p>
              Data Protection is a matter of trust and your privacy is important
              to us. We shall therefore only use your name and other information
              which relates to you in the manner set out in the Privacy Policy.
              We will only collect information on the basis of necessity and
              relevance to us, in our dealings with you.
            </p>
            <p>
              We will only keep information for as long as we are either
              required to by law or as is relevant for the purposes for which it
              was collected.
            </p>
            <h3>2. Consent</h3>
            <p>
              Knowledge and consent are required for the collection, use or
              disclosure of personal information except where required or
              permitted by law. Providing us with your personal information is
              always your choice. However, your decision not to provide certain
              information may limit our ability to provide you with our products
              and services.
            </p>
            <h3>3. Information and Data collected</h3>
            <p>
              Various types of information may be collected if you are placing
              an order for a product with us on the online store. We collect,
              store, and process your data for processing the waitlist purchase
              on the website and any possible later purpose as may be
              ascertained to provide you with our services. We may collect
              personal information including but not limited to title, name, and
              email address.
            </p>
            <p>
              We will use the information you provide to enable us to add you to
              a wait list to provide you with the services and information
              offered through our website and webstore and that which you have
              requested for.
            </p>
            <p>
              Furthermore, the information you provide will be used to
              administer your account with us; improve the layout and/or content
              of our website & webstore and customise them for users; identify
              visitors on our webstore; send you information we think you may
              find useful or that which you may have requested from us (provided
              you have indicated that you have not objected to being contacted
              for these purposes) subject to obtaining your consent, we may
              contact you by email with details of other products and services.
              If you prefer not to receive any marketing communications from us,
              you can opt out at any time.{" "}
            </p>

            <p>
              You must only submit to us, our agents or the store, information
              which is up to date, accurate and not misleading.{" "}
            </p>

            <p>
              {" "}
              Your email address may be used for surveys, competitions and
              opinion polls. Any answers to surveys or opinions polls may be
              forwarded to third parties. We may also send you information about
              us, the store, our other websites, our products, sales and
              promotions, our newsletters etc. if you would prefer not to
              receive any of this additional information as described above,
              please click the ‘unsubscribe’ link in any of the emails sent to
              you or adjust your customer communication preferences.
            </p>

            <h3>4. Third Parties and Links</h3>
            <p>
              We may pass your name and email address on to a third party in
              order to make delivery of a product or information to you, analyse
              data and to provide us with marketing or customer service
              assistance. We may exchange information with third parties for the
              purposes of fraud protection and credit risk reduction. We may
              transfer our database containing personal information where the
              need arises. Other than as set out in this Privacy Policy, we
              shall NOT sell or disclose your personal data to third parties
              without obtaining your prior consent unless this is necessary for
              the purposes set out in this Privacy Policy or unless we are
              required to do so by law.
            </p>

            <h3> 5. Security</h3>

            <p>
              We have put in place appropriate technical and security measures
              to prevent unauthorised or unlawful access to or accidental loss
              of, destruction or damage to your information. When data is
              collected, your personal details are stored on a secure server
              which contains firewalls. We work to protect the security of your
              information during transmission by using Secure Sockets Layer
              (SSL) software which encrypts information you input and Cloud
              Flare in case of a malicious overload attack by an unknown online
              entity. Payments for merchs made through the site are processed by
              an independent payment agent service with dedicated policy devoid
              of our influence and separate from our website. We undertake not
              to violate the privacy of card holders who transact with us. We
              verify and confirm that a risk assessment of the payment gateway
              has been conducted. We cannot however assume any liability for any
              error arising from the use of or compromise of your payment
              details.
            </p>

            <p>
              We maintain physical, electronic and procedural safeguards in
              connection with the collection, storage and disclosure of your
              information. It is important for you to protect against
              unauthorised access to your password and to your computer. Be sure
              to sign off when you finish using a shared computer.
            </p>

            <h3>6. Rights</h3>
            <p>
              You have the right to require us to correct any inaccuracies in
              your data. At any stage you also have the right to ask us to stop
              using your personal data for direct marketing purposes.
            </p>

            <h3>7. Cookies</h3>
            <p>
              Cookies are tiny text files which identify your computer to our
              server as a unique user when you visit certain pages and they are
              stored by your internet browser on your computer’s hard drive. We
              only use cookies for your convenience (for example to remember who
              you are to re-enter your email address) and not for obtaining or
              using any other information. The use of cookies does not contain
              any personal or private details and are free from viruses.
            </p>
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default PrivacyPolicyPage;
