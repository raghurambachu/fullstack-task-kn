const express = require("express");
const Vonage = require("@vonage/server-sdk");
require("dotenv").config();

const vonage = new Vonage({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
});

const app = express();

app.post("/send", (req, res) => {
  //   const from = "Raghuram Bachu";
  //   const to = "917021425912";
  //   const text = "A text message sent using the Nexmo by Raghuram Bachu";
  //   vonage.message.sendSms(from, to, text, (err, responseData) => {
  //     if (err) {
  //       console.log(err);
  //       res.json({ msg: err });
  //     } else {
  //       if (responseData.messages[0]["status"] === "0") {
  //         console.log("Message sent successfully.");
  //         res.json({ msg: responseData });
  //       } else {
  //         console.log(
  //           `Message failed with error: ${responseData.messages[0]["error-text"]}`
  //         );
  //         res.json({ msg: responseData });
  //       }
  //     }
  //   });
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
