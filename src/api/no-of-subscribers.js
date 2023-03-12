const mailchimp = require("@mailchimp/mailchimp_marketing");

export default async function handler(req, res) {
  mailchimp.setConfig({
    apiKey: process.env.GATSBY_MAILCHIMP_API_KEY,
    server: "us16",
  });

  try {
    const response = await mailchimp.lists.getListMembersInfo("a2eb241fd7");

    const { total_items } = response;

    res.status(200).json({
      message: "successful",
      data: {
        total_items,
      },
    });
  } catch (error) {
    res.status(error.response.status).json({ message: error.response.message });
  }
}
