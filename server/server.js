const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kimkhanh151003@gmail.com', // Thay bằng email của bạn
    pass: 'ekyw rfsg ovbd isbr', // Tạo App Password từ Google Account
  },
});

app.post('/send', async (req, res) => {
  const { email, name, message } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'kimkhanh151003@gmail.com',
    subject: `New Contact Support Form from ${name}`,
    html: `
    <p><span style="font-size: 1.2em; font-weight: bold;">${name}</p>
    <p><strong>Email:</strong><br>${email}</p>
    <p><strong>Message:</strong><br>${message}</p>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));