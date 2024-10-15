import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

const BuyNowForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    paymentMethod: 'creditCard',
    paymentDetails: '',
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Submit form data to backend
      await axios.post('http://localhost:4001/buy', formData);

      // Sending email confirmation
      emailjs
        .sendForm('service_4h6ccin', 'template_qtupxxf', formRef.current, 'E1J-SjHV-gelalcS_')
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Registration successful! Confirmation email sent.');
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Registration successful, but failed to send confirmation email.');
          },
        );

      // Resetting form after submission
      setFormData({
        name: '',
        email: '',
        paymentMethod: 'creditCard',
        paymentDetails: '',
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 p-4">
      <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-red-600 mb-4 text-center">Buy Now</h2>

        <div className="mb-4">
          <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-600"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-600"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="paymentMethod">
            Payment Method
          </label>
          <select
            name="paymentMethod"
            id="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-600"
            required
          >
            <option value="creditCard">Credit Card</option>
            <option value="upi">UPI</option>
            <option value="netBanking">Net Banking</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="paymentDetails">
            Payment Details
          </label>
          <input
            type="text"
            name="paymentDetails"
            id="paymentDetails"
            value={formData.paymentDetails}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-600"
            placeholder="Card number, UPI ID, etc."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
        >
          Buy Now
        </button>
      </form>
    </div>
  );
};

export default BuyNowForm;
