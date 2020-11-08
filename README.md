## Script for installing

1. After cloning the repository, run the following script
   `npm run iall` will install the dependencies for both server[Express] and client[React]

2. After installing the dependencies, create an .env file
   SERVER_PORT=3001
   API_KEY=YOUR_VONGAGE_API_KEY
   API_SECRET=YOUR_VONGAGE_API_SECRET

SERVER_PORT can be any port number you wish, but if you wish to change the port number, don't forget to change in the `proxy` in client's package.json file. By default they are set to port 3001

### You can get the Vongage keys(Vongage is basically Nexmo) from https://dashboard.nexmo.com/

Note: Also Vongage allows to send sms to only registered numbers in case of Free Trial plan. So you need to register your test numbers before testing. Also as per the Guidelines in India, SMS will be sent between 9.00 am to 9.00 pm only.

## Start the server & client(Basically is a create-react-app)

`npm run startboth` will start both server and client, client by default runs at PORT-3000 and server at PORT-3001

#### Database is not being used rather once a request is done, the data is being stored in localstorage[As per the guidelines choose the best way.]
