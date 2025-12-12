'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header({ onSearch, searchQuery }) {
  const { getCartItemsCount } = useCart();
  const router = useRouter();
  const [localSearch, setLocalSearch] = useState(searchQuery || '');
  const cartItemsCount = getCartItemsCount();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(localSearch);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearch(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <header className="bg-blue-600 border-b border-blue-700 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-white hover:text-gray-100 transition-colors">
              WhatBytes
            </h1>
          </Link>

          <form onSubmit={handleSearchSubmit} className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={localSearch}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </form>

          <div className="flex items-center space-x-6">
            <Link
              href="/cart"
              className="relative text-white hover:text-gray-100 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-blue-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            <button className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-blue-600 hover:bg-gray-100 transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}