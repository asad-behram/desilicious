'use client';
import React, { useState } from 'react';
import Layout from '../../components/Layout';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white/90 backdrop-blur rounded-xl p-8 card-shadow">
            <h2 className="text-2xl font-bold text-orange-800 mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-orange-600 font-semibold">03261427277</p>
                  <p className="text-gray-600 text-sm">Call us to place your order</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">Lahore, Punjab, Pakistan</p>
                  <p className="text-gray-600 text-sm">We deliver across the city</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-2xl">⏰</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Operating Hours</h3>
                  <p className="text-gray-600">Daily: 11:00 AM - 11:00 PM</p>
                  <p className="text-gray-600 text-sm">Open 7 days a week</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-2xl">🚚</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Delivery</h3>
                  <p className="text-gray-600">Fast delivery within 30-45 minutes</p>
                  <p className="text-gray-600 text-sm">Free delivery on orders above RS 1000</p>
                </div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="mt-8 text-center">
              <h3 className="font-semibold text-gray-800 mb-4">Quick Order</h3>
              <div className="bg-gray-800 w-32 h-32 rounded-lg flex items-center justify-center text-white mx-auto mb-2">
                QR Code
              </div>
              <p className="text-gray-600 text-sm">Scan to place order instantly</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur rounded-xl p-8 card-shadow">
            <h2 className="text-2xl font-bold text-orange-800 mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your message, questions, or feedback..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="mt-12 bg-white/90 backdrop-blur rounded-xl p-8 card-shadow">
          <h2 className="text-2xl font-bold text-orange-800 mb-6 text-center">Why Choose Desilicious?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Fresh ingredients and authentic recipes</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick service within 30-45 minutes</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💝</div>
              <h3 className="font-semibold text-gray-800 mb-2">Great Value</h3>
              <p className="text-gray-600">Affordable prices with amazing deals</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
