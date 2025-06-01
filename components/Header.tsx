'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();

  return (
    <header className="bg-orange-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold text-white">
              DESILICIOUS
            </div>
            <div className="text-sm text-orange-200">دیسی لذیذ</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-orange-200 transition">
              Home
            </Link>
            <Link href="/menu" className="text-white hover:text-orange-200 transition">
              Menu
            </Link>
            <Link href="/about" className="text-white hover:text-orange-200 transition">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-200 transition">
              Contact
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="text-white hover:text-orange-200 transition">
                🛒 Cart ({state.items.length})
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-white hover:text-orange-200 transition py-2">
                Home
              </Link>
              <Link href="/menu" className="text-white hover:text-orange-200 transition py-2">
                Menu
              </Link>
              <Link href="/about" className="text-white hover:text-orange-200 transition py-2">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-orange-200 transition py-2">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;