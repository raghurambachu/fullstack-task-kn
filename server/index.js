const express = require("express");
const Vonage = require("@vonage/server-sdk");
var bodyParser = require("body-parser");
require("dotenv").config();

const vonage = new Vonage({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  if (!req.body.user || !req.body.message) {
    return res.json({ msg: "Body should have the both user info and message" });
  }
  const { user, message } = req.body;

  const from = "Raghuram Bachu";
  const to = "91" + user.mobile;
  vonage.message.sendSms(from, to, message, (err, responseData) => {
    if (err) {
      res.json({ msg: err, status: "failed" });
    } else {
      if (responseData.messages[0]["status"] === "0") {
        res.json({
          msg: `Message sent successfully to ${user.firstName}`,
          user,
          message,
          status: "successful",
          date: Date.now(),
        });
      } else {
        res.json({
          msg: responseData.messages[0]["error-text"],
          status: "failed",
        });
      }
    }
  });
});

const port = process.env.SERVER_PORT;

app.listen(port, () => console.log("Server is listening at port " + port));

// {
//     "msg": {
//         "message-count": "1",
//         "messages": [
//             {
//                 "to": "919810153260",
//                 "status": "29",
//                 "error-text": "Non White-listed Destination - rejected"
//             }
//         ]
//     }
// }

// {
//     "msg": {
//         "message-count": "1",
//         "messages": [
//             {
//                 "to": "917021425912",
//                 "message-id": "150000012F6EF414",
//                 "status": "0",
//                 "remaining-balance": "1.95350000",
//                 "message-price": "0.01550000",
//                 "network": "405874"
//             }
//         ]
//     }
// }
