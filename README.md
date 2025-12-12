# WhatBytes E-commerce Platform

A modern, fully responsive e-commerce frontend application built with Next.js 14, featuring product browsing, advanced filtering, and shopping cart functionality.

## 🚀 Live Demo
https://whatbytes-frontend-assignment-hazel.vercel.app/

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Functionalities](#key-functionalities)

---

## ✨ Features

### 🏠 Home Page
- **Product Grid**: Responsive layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- **Advanced Filtering**: Filter by category, price range, and brand
- **Search Functionality**: Real-time product search
- **URL-based Filters**: Shareable filter states via URL parameters
- **Sticky Header**: Navigation bar stays visible while scrolling

### 🛍️ Product Details
- **Dynamic Routing**: Individual product pages with clean URLs
- **Product Information**: High-quality images, detailed descriptions, pricing
- **Quantity Selector**: Adjust quantity before adding to cart
- **Add to Cart**: Instant feedback with success notification

### 🛒 Shopping Cart
- **Cart Management**: Add, update, and remove items
- **Quantity Control**: Adjust quantities directly from cart
- **Price Calculation**: Automatic subtotal, tax (10%), and total calculation
- **Persistent Storage**: Cart data saved in localStorage
- **Empty State**: User-friendly message when cart is empty

### 🎨 UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: Hover effects, smooth transitions
- **Toast Notifications**: Success alerts when adding items to cart
- **Star Ratings**: Visual product rating system
- **Professional Styling**: Clean, modern interface with attention to detail

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **React 18** | UI library with hooks |
| **Tailwind CSS** | Utility-first CSS framework |
| **Lucide React** | Icon library |
| **Context API** | Global state management for cart |
| **localStorage** | Client-side data persistence |

---

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/whatbytes-ecommerce.git
   cd whatbytes-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
whatbytes-ecommerce/
├── app/
│   ├── cart/
│   │   └── page.js           # Shopping cart page
│   ├── product/
│   │   └── [id]/
│   │       └── page.js        # Dynamic product detail page
│   ├── layout.js              # Root layout with providers
│   ├── page.js                # Home page with product listing
│   └── globals.css            # Global styles
├── components/
│   ├── Header.js              # Navigation header with search
│   ├── Sidebar.js             # Filter sidebar (category, price, brand)
│   ├── ProductCard.js         # Individual product card
│   ├── ProductGrid.js         # Product grid layout
│   └── Footer.js              # Footer with social links
├── context/
│   └── CartContext.js         # Cart state management
├── data/
│   └── products.json          # Mock product data
└── public/
    └── images/                # Product images
```

---

## 🔧 Key Functionalities

### 1. Product Filtering

**Category Filter**
- Multi-select checkbox filters
- Instant results update

**Price Range Filter**
- Dual-handle slider (min/max)
- Range: $0 - $2000
- Real-time filtering

**Brand Filter**
- Scrollable checkbox list
- Multiple brand selection

**Search Bar**
- Searches product titles
- Case-insensitive matching
- Live results

### 2. URL-Based Filtering

Share filtered results via URL parameters:
```
/?category=Electronics&price=100-500&search=laptop
```

### 3. Cart Management

**CartContext Features**
- `addToCart(product, quantity)` - Add items with quantity
- `removeFromCart(productId)` - Remove items
- `updateQuantity(productId, quantity)` - Update item quantity
- `clearCart()` - Empty entire cart
- `getCartItemsCount()` - Get total items count
- `getCartTotal()` - Calculate cart total

**localStorage Integration**
- Automatic persistence
- Survives page refreshes
- Cross-tab synchronization

### 4. Responsive Design Breakpoints

| Device | Columns | Sidebar |
|--------|---------|---------|
| Desktop (>1024px) | 3 columns | Visible |
| Tablet (768-1024px) | 2 columns | Collapsible |
| Mobile (<768px) | 1 column | Hidden/Toggle |






## 📝 Development Notes

### Feature-Based Commits

This project follows best practices with incremental, logical commits:

```
✅ Initial Next.js setup with Tailwind
✅ Add product data and mock products
✅ Create Header component with search
✅ Build Sidebar with filter logic
✅ Implement ProductCard and grid layout
✅ Add CartContext with localStorage
✅ Create product detail page
✅ Build cart page with calculations
✅ Add toast notifications
✅ Implement responsive design
✅ Add URL-based filtering
✅ Final styling and polish
```

### Code Quality

- ✅ Clean, readable code
- ✅ Proper component separation
- ✅ Reusable utility functions
- ✅ Error handling
- ✅ Performance optimized
- ✅ Accessibility considered

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
