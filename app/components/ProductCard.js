'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
    
    // Show alert
    setShowAlert(true);
    
    // Hide alert after 2 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
          style={{ clipPath: 'inset(0 50% 0 0)' }}
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="relative">
      {/* Toast Alert */}
      {showAlert && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50 animate-slide-in">
          <Check className="w-5 h-5" />
          <span className="font-semibold">Item added to cart!</span>
        </div>
      )}

      <Link href={`/product/${product.id}`}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
          <div className="relative h-64 bg-gray-100 overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <div className="mb-2">
              <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
                {product.category}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {product.title}
            </h3>

            <div className="flex items-center mb-3">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
            </div>

            <div className="mt-auto">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </Link>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}