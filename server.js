const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require("cors");
const https = require("https");
const mailchimp = require("@mailchimp/mailchimp_marketing");
require('dotenv-safe').config({
    path: '.env.mailchimp'
});

const apiKey = process.env.MAILCHIMP_API_KEY;
const listId = process.env.MAILCHIMP_LIST_ID;
const server = process.env.REACT_APP_SERVER;
const Url = process.env.MAILCHIMP_URL;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../CALSNICH/build')));

// Handle requests for the root path (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../CALSNICH/build/index.html'));
});


app.post('/', (req, res) => {
    const validEmail = req.body.email;
    const subscribingUser = {
        firstName: "a",
        lastName: "b",
        email: validEmail
    };
    let data = {
        members: [
            {
                email_address: subscribingUser.email,
                status: "subscribed",
                merge_fields: {
                    FNAME: subscribingUser.firstName,
                    LNAME: subscribingUser.lastName
                }
            }
        ]
    };
    let jsonData = JSON.stringify(data);
    const options = {
        method: "POST",
        auth: "calsnich:" + process.env.MAILCHIMP_API_KEY 
    }


    const request = https.request(Url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData);
    request.end();

    console.log(
        `Successfully added contact as an audience member. The contact's id is ${response.id
        }.`
    );
    // Send a response indicating success
    res.send(`<h1>subscribed succesfully!</h1>`);
});



// Mailchimp setup
mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: "us3",
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
