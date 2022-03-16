import React, { useState } from "react";
import '../../App.css';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/2b494f40-9708-11ec-bdf8-dd9c99f898ec"; // TODO - fill on the later step

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <h1 className='heading'>Contact Us</h1>
      <p className="paragraph">Reach out to us using the form below with any inquiries you have and we will get back to you as soon as we can.</p>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your full name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-5/12"
          required
        />
        <p></p>
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Your email address"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-5/12"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-5/12"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactUs;