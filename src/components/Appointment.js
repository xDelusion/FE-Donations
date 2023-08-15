import React from "react";
import NavBar from "./Navbar";

const Appointment = ({ data, setShow }) => {
  console.log(data);
  return (
    <div>
      {/* <NavBar /> */}
      <div className="max-w-md mx-auto mt-10 w-[50vw] bg-slate-100 shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-red-700 text-white text-center font-bold normal-case">
          Schedule an Appointment
        </div>
        <div className="py-4 px-6" action="" method="POST">
          <div className="mb-4">
            <label className="block text-black font-bold mb-2" for="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black placeholder:text-black leading-tight focus:outline-none focus:shadow-outline bg-white border-gray-300 "
              name="name"
              id="name"
              type="text"
              placeholder={data?.name}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-bold mb-2" for="email">
              Email
            </label>
            <input
              className="shadow appearance-none text-black placeholder:text-black border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-white border-gray-300"
              name="email"
              id="email"
              type="email"
              placeholder={data?.email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-bold mb-2" for="phone">
              Phone Number
            </label>
            <input
              className="shadow appearance-none text-black placeholder:text-black border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-white border-gray-300"
              name="phoneNo"
              id="phone"
              type="tel"
              placeholder={data?.number || "Enter phone number"}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-bold mb-2" for="date">
              Date
            </label>
            <input
              className="shadow appearance-none text-black placeholder:text-black border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-white border-gray-300 "
              name=""
              id="date"
              type="date"
              placeholder="Select a date"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-bold mb-2" for="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none text-black placeholder:text-black border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-white border-gray-300"
              id="message"
              rows="4"
              placeholder="Enter any additional information"
            ></textarea>
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-red-700 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={() => {
                setShow(false);
              }}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
