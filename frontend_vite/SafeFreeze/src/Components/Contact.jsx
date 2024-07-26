import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000); // Clear the copied message after 2 seconds
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Team Members</h2>
            <ul className="space-y-4">
              {[
                { name: 'Aastha', phone: '8307040946', email: 'aasthabansal741@gmail.com' },
                { name: 'Riya', phone: '8813923282', email: '[Email]' },
                { name: 'Brijash', phone: '6203599696', email: '[Email]' },
                { name: 'Harshit', phone: '7632805170', email: '[Email]' },
              ].map((member, index) => (
                <li key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                  <span className="font-medium text-gray-800">{member.name}</span>
                  <div className="relative group">
                    <span className="text-gray-600 cursor-pointer">{member.phone}</span>
                    <div className="absolute left-0 top-0 mt-6 bg-white border rounded-lg shadow-lg p-2 hidden group-hover:flex space-x-2">
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => handleCopy(member.phone)}
                        aria-label={`Copy ${member.name}'s phone number`}
                      >
                        {copied === member.phone ? 'Copied!' : 'Copy'}
                      </button>
                      <a
                        href={`tel:${member.phone}`}
                        className="text-blue-500 hover:underline"
                        aria-label={`Call ${member.name}`}
                      >
                        Call
                      </a>
                    </div>
                  </div>
                  <div className="relative group">
                    <span className="text-blue-500 hover:underline cursor-pointer">{member.email === '[Email]' ? 'Add Email' : member.email}</span>
                    <div className="absolute left-0 top-0 mt-6 bg-white border rounded-lg shadow-lg p-2 hidden group-hover:flex space-x-2">
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => handleCopy(member.email)}
                        aria-label={`Copy ${member.name}'s email`}
                      >
                        {copied === member.email ? 'Copied!' : 'Copy'}
                      </button>
                      {member.email !== '[Email]' && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-blue-500 hover:underline"
                          aria-label={`Email ${member.name}`}
                        >
                          Email
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your Name" 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-600 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your Email" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-600 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your message here..." 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
