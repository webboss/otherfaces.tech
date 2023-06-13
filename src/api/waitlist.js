const mailchimp = require("@mailchimp/mailchimp_marketing");
const md5 = require("md5");
const addSubscriber = async (req, res) => {
  mailchimp.setConfig({
    apiKey: process.env.GATSBY_MAILCHIMP_API_KEY,
    server: "us16",
  });

  if (req.method === "POST") {
    const { email_address, first_name, tags } = req.body;

    const tagsArray = tags.split(",");

    const subscriber_hash = md5(email_address.toLowerCase());
    try {
      const response = await mailchimp.lists.setListMember(
        "a2eb241fd7",
        subscriber_hash,
        {
          email_address: email_address,

          merge_fields: {
            FNAME: first_name,
          },
          status_if_new: "subscribed",
          tags: tagsArray,
        }
      );

      return res
        .status(200)
        .json({ message: "Subscription successful! We will reach out soon." });
    } catch (error) {
      return res.status(error.response.status).send(error.response.body.title);
    }
  } else {
    res.send("🤦‍♂️😩🤢");
  }
};

export default addSubscriber;
