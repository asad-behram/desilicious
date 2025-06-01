'use client';
import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { specialDeals } from '../utils/data';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to DESILICIOUS
        </h1>
        <p className="text-xl text-orange-100 mb-8">
          دیسی لذیذ - Authentic flavors from the heart of Pakistan
        </p>
        <Link href="/menu" className="btn-primary text-lg px-8 py-3 inline-block">
          View Our Menu
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-white/90 backdrop-blur rounded-2xl p-8 mb-12 card-shadow">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-orange-800 mb-4">
              Traditional Biryani & More
            </h2>
            <p className="text-gray-700 mb-6">
              Experience the authentic taste of traditional Pakistani cuisine. Our biryani is prepared with 
              aromatic basmati rice, tender meat, and a perfect blend of spices that will transport you 
              to the streets of Lahore.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/menu" className="btn-primary">
                Order Now
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="text-8xl mb-4">🍛</div>
            <p className="text-orange-600 font-semibold">Fresh • Authentic • Delicious</p>
          </div>
        </div>
      </div>

      {/* Special Deals Preview */}
      <div className="bg-white/90 backdrop-blur rounded-2xl p-8 card-shadow">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">
          Special Deals
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {specialDeals.slice(0, 3).map((deal) => (
            <div key={deal.id} className="bg-orange-500 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">{deal.name}</h3>
              <p className="text-orange-100 mb-4 text-sm">{deal.description}</p>
              <div className="text-2xl font-bold">RS {deal.price}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/menu" className="btn-primary">
            View All Deals
          </Link>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white/90 backdrop-blur rounded-2xl p-8 mt-12 card-shadow text-center">
        <h2 className="text-3xl font-bold text-orange-800 mb-4">
          Ready to Order?
        </h2>
        <p className="text-gray-700 mb-6">
          Call us or scan the QR code to place your order
        </p>
        <div className="flex justify-center items-center space-x-8">
          <div>
            <p className="text-2xl font-bold text-orange-600">📞 03261427277</p>
          </div>
          <div>
            <div className="bg-gray-800 w-24 h-24 rounded-lg flex items-center justify-center text-white">
              QR Code
            </div>
            <p className="text-sm text-gray-600 mt-2">Scan to order</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;