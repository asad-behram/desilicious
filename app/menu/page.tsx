'use client';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { menuItems, specialDeals } from '../../utils/data';
import { useCart } from '../../context/CartContext';
import { MenuItem } from '../../utils/interface';

const MenuPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'menu' | 'deals'>('menu');
  const { addItem, state } = useCart();

  const categories = {
    biryani: menuItems.filter(item => item.category === 'biryani'),
    beverages: menuItems.filter(item => item.category === 'beverages'),
    extras: menuItems.filter(item => item.category === 'extras')
  };

  const handleAddToCart = (item: MenuItem) => {
    addItem(item);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Our Menu</h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/20 backdrop-blur rounded-lg p-2">
            <button
              onClick={() => setActiveTab('menu')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${activeTab === 'menu'
                  ? 'bg-white text-orange-600'
                  : 'text-white hover:bg-white/20'
                }`}
            >
              Regular Menu
            </button>
            <button
              onClick={() => setActiveTab('deals')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${activeTab === 'deals'
                  ? 'bg-white text-orange-600'
                  : 'text-white hover:bg-white/20'
                }`}
            >
              Special Deals
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        {state.items.length > 0 && (
          <div className="bg-white/90 backdrop-blur rounded-xl p-4 mb-8 card-shadow">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-orange-800">
                Cart: {state.items.length} items
              </span>
              <span className="font-bold text-orange-600">
                Total: RS {state.total}
              </span>
            </div>
          </div>
        )}

        {activeTab === 'menu' ? (
          <div className="space-y-8">
            {/* Biryani Section */}
            <div className="bg-white/90 backdrop-blur rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold text-orange-800 mb-6">🍛 Biryani</h2>
              <div className="space-y-4">
                {categories.biryani.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-orange-600">RS {item.price}</p>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded text-sm transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Beverages Section */}
            <div className="bg-white/90 backdrop-blur rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold text-orange-800 mb-6">🥤 Beverages</h2>
              <div className="space-y-4">
                {categories.beverages.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-600">RS {item.price}</p>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extras Section */}
            <div className="bg-white/90 backdrop-blur rounded-xl p-6 card-shadow">
              <h2 className="text-2xl font-bold text-orange-800 mb-6">🍢 Extras</h2>
              <div className="space-y-4">
                {categories.extras.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-4 bg-green-50 rounded-lg border-l-4 border-green-500"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">RS {item.price}</p>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded text-sm transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white/90 backdrop-blur rounded-xl p-6 card-shadow">
            <h2 className="text-2xl font-bold text-orange-800 mb-6 text-center">Special Deals</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialDeals.map((deal) => (
                <div key={deal.id} className="bg-orange-500 text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">{deal.name}</h3>
                  <p className="text-orange-100 mb-4 text-sm">{deal.description}</p>
                  <ul className="text-sm text-orange-100 mb-4">
                    {deal.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">RS {deal.price}</div>
                    <button className="bg-white text-orange-500 px-4 py-2 rounded font-semibold hover:bg-orange-50 transition">
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Order Button */}
        {state.items.length > 0 && (
          <div className="fixed bottom-4 right-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition">
              Place Order (RS {state.total})
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MenuPage;