'use client';

import React from 'react';

export default function Sidebar({
  categories,
  brands,
  selectedCategories,
  selectedBrands,
  priceRange,
  onCategoryChange,
  onBrandChange,
  onPriceChange,
}) {
  const handleMinChange = (e) => {
    const newMin = parseInt(e.target.value);
    if (newMin <= priceRange[1]) {
      onPriceChange([newMin, priceRange[1]]);
    }
  };

  const handleMaxChange = (e) => {
    const newMax = parseInt(e.target.value);
    if (newMax >= priceRange[0]) {
      onPriceChange([priceRange[0], newMax]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange(category)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
              />
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Price Range
        </h3>
        <div className="px-2">
          <div className="relative pt-1 mb-6">
            {/* Track */}
            <div className="relative h-2 bg-gray-200 rounded-full">
              {/* Active range */}
              <div
                className="absolute h-2 bg-blue-600 rounded-full"
                style={{
                  left: `${(priceRange[0] / 2000) * 100}%`,
                  right: `${100 - (priceRange[1] / 2000) * 100}%`,
                }}
              />
              
              {/* Min thumb */}
              <input
                type="range"
                min="0"
                max="2000"
                step="10"
                value={priceRange[0]}
                onChange={handleMinChange}
                className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-blue-600 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-md"
                style={{ zIndex: priceRange[0] > 1500 ? 5 : 3 }}
              />
              
              {/* Max thumb */}
              <input
                type="range"
                min="0"
                max="2000"
                step="10"
                value={priceRange[1]}
                onChange={handleMaxChange}
                className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-blue-600 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-md"
                style={{ zIndex: 4 }}
              />
            </div>
          </div>
          
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Brand</h3>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => onBrandChange(brand)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
              />
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}