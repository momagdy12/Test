const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/share-contacts', (req, res) => {
    const contactData = req.body;
    
    // Use nodemailer to send an email with the contact data
    // ...

    // Respond to the client
    res.status(200).send('Contact shared successfully!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
