const nodemailer = require("nodemailer");

const sendWelcomeEmail = async (userEmail, userName) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Organic Fruits" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: "Welcome to Organic Fruits! 🌱",
      html: `<p>Hi ${userName},</p>
             <p>Thank you for signing up with <b>Organic Fruits</b>! We’re thrilled to have you join our community of fruit lovers and healthy living enthusiasts. 🍎🥭🍇</p>
             <p>Stay tuned for your first order and thank you for being part of the Organic Fruits family!</p>
             <p>Warm regards,<br/><b>The Organic Fruits Team</b></p>`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Welcome email sent: %s", info.messageId);

  } catch (error) {
    console.error("Error sending welcome email:", error);
  }
};

module.exports = sendWelcomeEmail;
