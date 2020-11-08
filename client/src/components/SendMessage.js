import React from "react";
import { ImArrowLeft2 } from "react-icons/im";

function SendMessage() {
  return (
    <div className="max-w-sm  px-4 py-8 my-4 rounded mx-auto shadow-md bg-gray-100 relative flex flex-col items-center">
      <div className="absolute left-0 top-0 w-12 h-12 rounded-full flex justify-center items-center m-2 bg-gray-300">
        <ImArrowLeft2 />
      </div>
      <h3>Message to be sent</h3>
      <form>
        <textarea
          name="message"
          id="message"
          value="Something your OTP is 123456"
          className="block w-64 my-4 resize-none p-4"
          readOnly
        ></textarea>

        <button className="my-4 p-2 px-6 bg-green-500 rounded-sm text-green-100 hover:bg-green-400 transition duration ease-in-out">
          Send
        </button>
      </form>
    </div>
  );
}

export default SendMessage;
