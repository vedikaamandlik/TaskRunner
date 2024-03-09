const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Replace these values with your email configuration
const gmailEmail = 'your-email@gmail.com';
const gmailPassword = 'your-email-password';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendMail = functions.https.onRequest(async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: gmailEmail,
      to: email,
      subject: 'Message Received',
      text: `Dear ${name},\n\nThank you for your message. We have received it.\n\nBest regards,\nYour App Team`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});
