import React from 'react';

function ContactForm() {
  return (
    <section className="py-10" id="contact">
      <div className="container text-center mx-auto">
        <h2 className="text-4xl font-bold py-4">Contact</h2>
        <div className="bg-purple-500 p-4 rounded shadow-lg text-left">
          <div class="flex">
            <div className="mb-3 pt-0 flex-1 mr-2">
              <label className="text-lg font-bold text-white">Name:</label>
              <input
                type="text"
                placeholder="Name"
                className="px-3 py-3 placeholder-gray-500 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
              />
            </div>
            <div className="mb-3 pt-0 flex-1 ml-2">
              <label className="text-lg font-bold text-white">Email:</label>
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-3 placeholder-gray-500 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
              />
            </div>
          </div>

          <div className="mb-3 pt-0">
            <label className="text-lg font-bold text-white">Message:</label>
            <textarea
              placeholder="Message"
              className="px-3 py-3 placeholder-gray-500 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
          <button
            class="block w-full bg-purple-700 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1"
            type="button"
            style={{ transition: 'all .15s ease' }}
          >
            Send Email
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
