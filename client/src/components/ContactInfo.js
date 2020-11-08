import React from "react";
import { ImArrowLeft2 } from "react-icons/im";

function ContactInfo(props) {
  const { firstName, lastName, id, mobile } = props.contact;
  return (
    <div className="max-w-sm  px-4 py-8 my-4 rounded mx-auto shadow-md bg-gray-100 relative flex flex-col items-center">
      <div className="absolute left-0 top-0 w-12 h-12 rounded-full flex justify-center items-center m-2 bg-gray-300">
        <ImArrowLeft2 />
      </div>
      <div className="w-20 h-20 text-lg rounded-full bg-gray-300 flex justify-center items-center mt-8 font-bold shadow-md">
        {firstName[0].toUpperCase() + lastName[0].toUpperCase()}
      </div>
      <h3 className="text-2xl mt-2 mb-4">{`${firstName} ${lastName} `}</h3>
      <h4 className="text-xl font-light">+91-{mobile}</h4>
      <button className="my-8 p-2 px-4 bg-green-500 rounded-sm text-green-100 hover:bg-green-400 transition duration ease-in-out">
        Send Message
      </button>
    </div>
  );
}

export default ContactInfo;
