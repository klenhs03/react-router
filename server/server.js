require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Cho phép request từ frontend
app.use(express.json()); // Parse JSON body

// Cấu hình Nodemailer (SMTP Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // kimkhanh151003@gmail.com
    pass: process.env.GMAIL_PASS, // App Password
  },
});

// Endpoint API để gửi email
app.post('/api/send-email', async (req, res) => {
  const { email, name, message } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!email || !name || !message) {
    return res.status(400).json({ message: 'Tất cả các trường là bắt buộc' });
  }

  // Cấu hình email
  const mailOptions = {
    from: process.env.GMAIL_USER, // kimkhanh151003@gmail.com
    to: 'kimkhanh151003@gmail.com', // Người nhận
    subject: `Liên hệ mới từ ${name}`,
    text: `
      Tên: ${name}
      Email: ${email}
      Tin nhắn: ${message}
    `,
    html: `
      <h3>Liên hệ mới</h3>
      <p><strong>Tên:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Tin nhắn:</strong> ${message}</p>
    `,
  };

  try {
    // Gửi email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email đã được gửi thành công!' });
  } catch (error) {
    console.error('Lỗi khi gửi email:', error);
    res.status(500).json({ message: 'Gửi email thất bại', error: error.message });
  }
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});