import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "97bb0ed7d6da46",
    pass: "e9de9da067d61b",
  },
});

const sendMail = () => {
  const mailOptions = {
    from: {
      name: "Shivam Swaroop",
      address: "shivamswaroop89@gmail.com",
    },
    to: ["abc@test.com", "123@test.com", "xyz@test.com"],
    subject: "Testing mail sent",
    // text: "Email sent with Node.js using Nodemailer!",
    html: `
    <h1 style="color: #36ba9b">Hi user,</h1>
    <p style="color: #555">This email was sent using Node.js with <b>nodemailer</b></p>
    <p style="color: #ccc">Regards, <br>Shivam Swaroop</br></p>
    `
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(`Error: ${err}`);
    } else {
      return console.log(
        `Email sent successfully. Info: ${JSON.stringify(info)}`
      );
    }
  });
};

sendMail();
