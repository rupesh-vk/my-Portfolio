"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";  // Assuming you're using a Button component

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior

    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Error: Something went wrong");
      }
    } catch (error) {
      alert("Error submitting the form. Please try again.");
    }

    console.log({ name, email, message });  // Log the form data
  };

  return (
    <section id="contact" className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Contact</h2>

        {/* Form for submitting contact data */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-2 block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-2 block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="5"
            />
          </div>

          {/* Send Message Button */}
          <div className="flex justify-center mt-8">
            <Button type="submit" size="lg">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
