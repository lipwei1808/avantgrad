const sgMail = require("@sendgrid/mail");

export default async function handler(req, res) {
  console.log(process.env.SENDGRID_KEY);
  sgMail.setApiKey(process.env.SENDGRID_KEY);
  const body = req.body;
  const data = JSON.parse(body);
  console.log(data);
  const msg = {
    to: "contact@zoned.media", // Change to your recipient
    from: "avantgraddd@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "New Order",
    html: `<div><div>Name: ${data.name}</div><div>Email: ${data.email}</div><div>Number: ${data.number}</div><div>Item: ${data.item}</div><div>Qty: ${data.qty}</div></div>`,
  };
  try {
    const result = await sgMail.send(msg);
    console.log(result);
    res.status(200).json({ message: "success" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error" });
  }
}
