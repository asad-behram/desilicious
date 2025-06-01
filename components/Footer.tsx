import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DESILICIOUS</h3>
            <p className="text-orange-200">
              Authentic desi cuisine with traditional flavors that bring you the taste of home.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-orange-200 mb-2">📞 03261427277</p>
            <p className="text-orange-200">📍 Lahore, Punjab, Pakistan</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Order Now</h3>
            <p className="text-orange-200 mb-2">Scan QR code to place order</p>
            <div className="bg-white p-2 w-20 h-20 rounded">
              <div className="w-full h-full bg-gray-800 rounded text-xs flex items-center justify-center text-white">
                QR
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-700 mt-8 pt-8 text-center">
          <p className="text-orange-200">© 2024 Desilicious. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;