import React from 'react';
import Breadcrumb from './BreadCrumb';

const ContactMe = () => {
  return (
    <div className=" bg-dark-gray text-white py-12 m-4">
      <div className="container rounded-lg bg-dark-gray border border-gray-700 p-4 mx-auto w-1/2">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>

        {/* Updated Contact Form */}
        <form action="https://formspree.io/f/xqkrporj" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Your Name</label>
            <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md bg-gray-800 text-gray-300" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Your Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md bg-gray-800 text-gray-300" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">Your Message</label>
            <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md bg-gray-800 text-gray-300" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">Send Message</button>
        </form>

        {/* Sample Contact Information */}
        <div className="mt-8">
          <p className="text-lg font-medium">Connect with me on:</p>
          <ul className="flex space-x-4">
            <li><a href="https://www.linkedin.com/in/sandeepsharma2183" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a></li>
            <li><a href="https://github.com/amrahs02" target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a></li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
