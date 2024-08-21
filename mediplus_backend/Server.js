// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'info@crospoint.com',
//         pass: 'Crosspoint@2754'
//     }
// });

// app.post('/send', (req, res) => {
//     const { email } = req.body;

//     const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: 'your-email@gmail.com',
//         subject: 'Newsletter Subscription',
//         text: `New subscription from: ${email}`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).send(error.toString());
//         }
//         res.status(200).send('Email sent: ' + info.response);
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });