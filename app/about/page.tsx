import React from 'react';
import Layout from '../../components/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">About Desilicious</h1>

        <div className="space-y-8">
          <div className="bg-white/90 backdrop-blur rounded-xl p-8 card-shadow">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our journey began with a simple mission: to share the authentic taste of home-cooked
              Pakistani meals with our community. Every grain of basmati rice, every blend of spices,
              and every piece of tender meat is carefully selected to ensure you get the most
              authentic dining experience.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-xl p-8 card-shadow">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">What Makes Us Special</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-orange-600 mb-3">🍛 Authentic Biryani</h3>
                <p className="text-gray-700">
                  Our signature biryani is prepared using traditional recipes passed down through
                  generations. We use premium basmati rice, aromatic spices, and tender meat
                  cooked to perfection.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-600 mb-3">🥗 Fresh Ingredients</h3>
                <p className="text-gray-700">
                  We source only the freshest ingredients daily. Our mint raita is made fresh,
                  our salads are crisp, and our shami kababs are prepared with premium meat
                  and traditional spices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-600 mb-3">👨‍🍳 Expert Chefs</h3>
                <p className="text-gray-700">
                  Our experienced chefs bring years of expertise in Pakistani cuisine. They
                  understand the perfect balance of spices and the art of traditional cooking
                  methods.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-600 mb-3">📞 Easy Ordering</h3>
                <p className="text-gray-700">
                  Order conveniently through our phone line or scan our QR code. We ensure
                  quick service and hot, fresh food delivered right to your doorstep.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-xl p-8 card-shadow">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Our Values</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🌟</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Quality First</h3>
                  <p className="text-gray-600">We never compromise on the quality of our ingredients or preparation methods.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">❤️</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Made with Love</h3>
                  <p className="text-gray-600">Every dish is prepared with care and attention, just like homemade food.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🤝</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Customer Satisfaction</h3>
                  <p className="text-gray-600">Your happiness is our priority. We strive to exceed your expectations with every order.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🏠</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Taste of Home</h3>
                  <p className="text-gray-600">We bring you the authentic flavors that remind you of home and family gatherings.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-500 text-white rounded-xl p-8 card-shadow text-center">
            <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
            <p className="text-orange-100 text-lg mb-6">
              Join thousands of satisfied customers who have made Desilicious their go-to choice
              for authentic Pakistani cuisine. Taste the tradition, feel the love.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-orange-200">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-orange-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-orange-200">Authentic Recipes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;