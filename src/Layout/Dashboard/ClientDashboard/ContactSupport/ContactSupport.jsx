import React from 'react';

const ContactSupport = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>

      <p className="text-gray-600 mb-4">
        If you need assistance or have any questions, our dedicated customer support team is here to help you. Feel free to reach out to us through the following options:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>
          Email: <a href="mailto:support@example.com">jumpbd@gmail.com</a>
        </li>
        <li>
          Phone: <a href="tel:+1234567890">123-456-7890</a>
        </li>
        <li>
          Live Chat: Click the chat icon on the bottom right of the page.
        </li>
      </ul>

      <p className="text-gray-600 mb-4">
        Our support team is available during our business hours, Monday to satuday from 9 AM to 5 PM. We aim to respond to your inquiries within 24 hours.
      </p>

      <button className="btn bg-cyan-600 text-white">
        Contact Support
      </button>
    </div>
  );
};

export default ContactSupport;
