# 📱 React Phone Catalog

A responsive e-commerce product catalog built with **React**, featuring a shopping cart, favorites, and product details.
The project follows best practices in **component structuring, styling with CSS modules, and state management**.

## 🌐 Live Demo

🔗 [Live Preview](https://janeshavrukova.github.io/e-commerce-catalog/)

## 🖼 Design Reference
The project is based on a provided [Figma mockup](https://www.figma.com/design/BUusqCIMAWALqfBahnyIiH/Phone-catalog-(V2)-Original-Dark?node-id=0-1&p=f&t=WH42Gsonre3DE8me-0), and implements:
- Clean, modern, and intuitive UI
- Fully responsive design adapting to mobile, tablet, and desktop
- Smooth hover effects and animations

## 🛠 Technologies Used

- ⚛️ React + TypeScript
- 🗄️ Redux Toolkit + Redux Persist
- 🌎 React Router DOM
- 🛒 Context API for global state management
- 🎨 SCSS with CSS Modules
- ⚡ Vite for fast development
- ✏️ ESLint + Prettier for code consistency
- 🖼️ Swiper.js for sliders


## ✨ Features Implemented

**Responsive Design** – fully adapted for desktop, tablet, and mobile devices.

### **Home Page**
- **Dynamic Banner Slider** – implemented with `Swiper.js` (auto-play, looping)
- **Featured Products** – showcasing discounted and new items
- **Category Navigation** – linking to product categories

### **Product Catalog**
- **Category Pages** – with dynamic data loading and error handling
- **Sorting & Filtering** – with URL persistence
- **Pagination** - for managing large product lists
- **Product Card** with interactive hover effects and actions (Add to Cart, Favorites)

### **Product Details Page**
- **Dynamic Routing** – /product/:productId
- **Product Display** - image gallery, available colors, capacities, tech specs
- **Related Products** – “You May Also Like” section, dynamically suggests similar products
- **Breadcrumbs navigation**

### **Shopping Cart**
- Managed via `Redux Toolkit + Redux Persist`
- Checkout confirmation modal
- **Add/Remove Products** – manage items in the cart
- **Quantity Control** – increase or decrease product quantity
- **Persistent Cart** – state saved in `localStorage`
- **Cart Quantity Display** – shows item count in the header
- **Checkout Confirmation Modal** – prompts user to clear the cart

### **Favorites (Wishlist)**
- Managed via `Redux Toolkit + Redux Persist`
- **Add/Remove Favorite Items** – mark products as "favorites"
- **Favorite Counter** – displays count in the header
- **Persistent Data** – persistent state in `localStorage`

### **Global State Management**
- **Redux Toolkit**
  - Used for global state of Cart and Favorites
  - Data persisted using Redux Persist
- **Context API**
  - Product fetching and caching
  - Loading and error handling
  - Global product filtering and sorting
  - Minimizes API calls for performance optimization

### **Routing & Error Handling**
- **React Router DOM** – client-side navigation with dynamic routes
- **404 Page** – custom `Not Found` pages for invalid URLs
- **Loading States** – `Loader` component for async operations

---

🚧 Planned Enhancements
### **Extra Features**
- **Skeleton Loading** – improve perceived performance by displaying placeholder content while data loads
- **Multi-Language Support** – allow users to switch between different languages
- **Theme Switching** – enable light and dark mode for better user experience

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/JaneShavrukova/nice-gadgets-store.git
```

### 2. Open the project in your code editor

### 3. Install dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npm start
```

⸻

⚙️ Requirements
Node.js >= 20.0.0

⸻
