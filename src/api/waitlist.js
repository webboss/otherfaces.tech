const mailchimp = require("mailchimp-marketing");
import createError from "http-errors";

const addSubscriber = async (req, res) => {
  mailchimp.setConfig({
    apiKey: process.env.GATSBY_MAILCHIMP_API_KEY,
    server: "us16",
  });

  if (req.method === "POST") {
    const { email_address, first_name } = req.body;

    try {
      const response = await mailchimp.lists.addListMember("a2eb241fd7", {
        email_address: email_address,
        merge_fields: {
          FNAME: first_name,
        },
        status: "subscribed",
        tags: ["Waitlist for Other Faces of Tech"],
      });

      console.log(response);
      return res
        .status(200)
        .json({ message: "Subscription successful! We will reach out soon." });
    } catch (error) {
      throw createError(error.status, error);
    }
  } else {
    res.send("🤦‍♂️😩🤢");
  }
};

export default addSubscriber;
