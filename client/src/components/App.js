import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactInfo from "./ContactInfo";
import ContactList from "./ContactList";
import SendMessage from "./SendMessage";

// import axios from "axios";

// function hitBackend() {
//   axios.get("/test").then((res) => console.log(res.data));
// }

function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    setContacts(getContacts());
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 pt-16">
      <div className="flex justify-center space-x-8 text-lg">
        <button>Contacts</button>
        <button>Messages Sent</button>
      </div>
      {/* className="card max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-md p-4 " */}
      <div>
        <div className="text-center text-gray-700">
          <h3 className="text-xl mt-2">List of Contacts</h3>
          {/* <ContactList contacts={contacts} /> */}
          {/* {contacts.length && <ContactInfo contact={contacts[0]} />} */}
          <SendMessage />
        </div>
      </div>
    </div>
  );
}

export default App;

function getContacts() {
  return [
    {
      firstName: "Raghuram",
      lastName: "Bachu",
      id: uuidv4(),
      mobile: "7021425912",
    },
    {
      firstName: "Radha",
      lastName: "Bachu",
      id: uuidv4(),
      mobile: "7021425912",
    },
    {
      firstName: "Jayaram",
      lastName: "Ganapathy",
      id: uuidv4(),
      mobile: "7021425912",
    },
    {
      firstName: "Sudhanshu",
      lastName: "Shekar",
      id: uuidv4(),
      mobile: "7021425912",
    },
  ];
}
