import React from "react";

const DonorList = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
        Book an Appointment
      </div>
      <form className="py-4 px-6" action="" method="POST">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="phone">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="phoneNo"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="date">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name=""
            id="date"
            type="date"
            placeholder="Select a date"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="time">
            Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name=""
            id="time"
            type="time"
            placeholder="Select a time"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Enter any additional information"
          ></textarea>
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonorList;
