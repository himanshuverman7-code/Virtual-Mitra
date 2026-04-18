import transporter from "../../config/nodemailer.config.js";

// Function to send email
const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `Virtual Mitra`, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
