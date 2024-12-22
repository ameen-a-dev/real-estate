import React from "react";

const Contact = () => {
  return (
    <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 under decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together
      </p>
      <form className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            <div>Your Name</div>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            <div>Your Email</div>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            placeholder="Your Message"
            required
            className="w-full rounded border border-gray-300 py-3 px-4 mt-2 h-48 resize-none"
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 mb-10 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
