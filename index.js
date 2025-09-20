import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
import { dirname } from "path";

// __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
    //Text mail
    // text: "Email sent with Node.js using Nodemailer!",
    
    //HTML format mail
    // html: `
    // <h1 style="color: #36ba9b">Hi user,</h1>
    // <p style="color: #555">This email was sent using Node.js with <b>nodemailer</b></p>
    // <p style="color: #ccc">Regards, <br>Shivam Swaroop</br></p>
    // `

    //Mail with attachments
    text: "Email with attachments",
      //building file in real time
    attachments: [{
      filename: "testFile.txt",
      content: "Hello this is the test file, and created in real time..."
    },
    //File from the system
    {
      filename: "testFile2.jpg",
      path: __dirname + "/attachments/Shivam2.jpg"
    }
  ]
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
