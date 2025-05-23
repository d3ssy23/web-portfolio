import React from "react";

export default function ContactForm() {
  return (
    <div className="w-full p-6 shadow-md text-white">
      <form className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name Here ..."
            required
            className="mt-1 block w-full border border-gray-300 p-3 shadow-sm placeholder:text-greenish-200 placeholder:text-lg focus:border-pink-500 focus:ring-pink-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email Here ..."
            required
            className="mt-1 block w-full border border-gray-300 p-3 shadow-sm placeholder:text-greenish-200 placeholder:text-lg focus:border-pink-500 focus:ring-pink-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Message goes here ..."
            required
            className="mt-1 block w-full border border-gray-300 p-3 shadow-sm placeholder:text-greenish-200 placeholder:text-lg focus:border-pink-500 focus:ring-pink-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-lightgray-300 text-white font-semibold shadow hover:bg-reddish cursor-pointer transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
