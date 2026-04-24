# 🛒 Simple E-Commerce Cart (Redux Toolkit)

A React-based mini shopping cart application that demonstrates efficient **Global State Management** using Redux Toolkit.

## 🚀 Overview
In this project, I solved the problem of "Prop Drilling" by centralizing the cart's data. This allows any component in the application (like the Navbar or Product List) to access and update the cart state instantly.

## ✨ Features
- **Global Cart State:** Managed via Redux Store.
- **Add to Cart:** Users can add products from the listing page.
- **Remove from Cart:** Seamlessly delete items from the cart view.
- **Auto-Calculations:** Real-time updates for total item count and pricing.
- **Responsive UI:** Clean and simple layout for all devices.

## 🛠️ Tech Stack
- **Frontend:** React.js
- **State Management:** Redux Toolkit (RTK)
- **Hooks:** `useSelector`, `useDispatch`
- **Styling:** CSS3 / Tailwind (Optional)

## 🏗️ Architecture (Redux Workflow)
1. **Store:** The single source of truth for the cart data.
2. **Slice (`cartSlice.js`):** Contains the initial state and reducers for `addItem` and `removeItem`.
3. **Components:** 
   - `ProductList`: Dispatches actions to add items.
   - `Cart`: Subscribes to the store to display selected items.
   - `Navbar`: Displays the dynamic cart count using `useSelector`.

## ⚙️ Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm start
   ```

## 🧠 Key Learnings
- Implementing a **Centralized Store**.
- Writing clean and maintainable logic using **Redux Slices**.
- Using **useSelector** to read state and **useDispatch** to trigger actions.
