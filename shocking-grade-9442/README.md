# 💎 Precious Charms - Your Gateway to Elegance

<div align="center">
  <img src="src/home-image/bannerv1.jpg" alt="Precious Charms Banner" width="800"/>
  
  [![React](https://img.shields.io/badge/React-18.2.0-blue.svg?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Chakra UI](https://img.shields.io/badge/Chakra%20UI-2.8.0-319795.svg?style=for-the-badge&logo=chakraui)](https://chakra-ui.com/)
  [![Redux](https://img.shields.io/badge/Redux-4.2.1-764ABC.svg?style=for-the-badge&logo=redux)](https://redux.js.org/)
</div>

## ✨ Overview

Welcome to Precious Charms, where elegance meets technology! Our platform redefines the jewelry shopping experience with a perfect blend of sophistication and modern e-commerce features. Whether you're looking for timeless pieces or contemporary designs, we've got you covered.

## 🚀 Key Features

### 👑 User Experience
| Feature | Description |
|---------|-------------|
| 🛍️ Smart Shopping | Intelligent product recommendations and personalized collections |
| 🔍 Advanced Search | Filter by category, brand, price, and more with real-time results |
| 🛒 Smart Cart | Dynamic cart management with instant updates and wishlist integration |
| 💳 Secure Checkout | Multiple payment options with industry-standard security |
| 📱 Responsive Design | Seamless experience across all devices |

### 👨‍💼 Admin Dashboard
| Feature | Description |
|---------|-------------|
| 📊 Analytics Hub | Real-time insights and performance metrics |
| 📦 Product Suite | Comprehensive product management with bulk operations |
| 👥 User Management | Advanced user analytics and management tools |
| 📊 Order Center | Streamlined order processing and tracking |
| ⚙️ System Control | Advanced settings and configuration options |

## 🛠️ Tech Stack

<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" width="40" height="40"/>
</div>

### Frontend Architecture
- **React 18.2.0** - Modern UI framework
- **TypeScript 4.9.5** - Type-safe development
- **Redux Toolkit** - State management
- **Chakra UI** - Beautiful component library
- **Framer Motion** - Smooth animations
- **React Router v6** - Navigation system

### Backend Services
- **JSON Server** - Mock API server
- **Axios** - HTTP client
- **JWT** - Authentication

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/precious-charms.git
cd precious-charms

# Install dependencies
npm install

# Start development server
npm start

# Start JSON server (in new terminal)
npm run server
```

## 🔐 Admin Access

<div align="center">
  <img src="src/AdminImges/dashboard.png" alt="Admin Dashboard" width="600"/>
</div>

### Admin Credentials
```yaml
email: admin123#gmail.com
password: admin123
```

### Admin Routes
```mermaid
graph LR
    A[Admin Login] --> B[Dashboard]
    B --> C[Products]
    B --> D[Users]
    B --> E[Orders]
    B --> F[Settings]
    C --> G[Add Product]
    C --> H[Edit Product]
    C --> I[View Products]
```

## 📁 Project Structure

```mermaid
graph TD
    A[src] --> B[Admin]
    A --> C[Components]
    A --> D[Pages]
    A --> E[Redux]
    A --> F[Routes]
    A --> G[Images]
    
    B --> B1[Dashboard]
    B --> B2[Products]
    B --> B3[Users]
    
    C --> C1[Navbar]
    C --> C2[Footer]
    C --> C3[ProductCard]
    
    D --> D1[Homepage]
    D --> D2[ProductPage]
    D --> D3[Cart]
```

## 🎨 UI Components

<div align="center">
  <img src="src/home-image/bannerv1.jpg" alt="Homepage" width="400"/>
  <img src="src/product-image/ProductImg.png" alt="Product Page" width="400"/>
</div>

## 🔄 Data Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Database
    
    User->>Frontend: Browse Products
    Frontend->>Backend: API Request
    Backend->>Database: Query Data
    Database-->>Backend: Return Data
    Backend-->>Frontend: API Response
    Frontend-->>User: Display Products
```
## Screenshots

## LANDING PAGE
[![Home.jpg](https://i.postimg.cc/hPz2yQTD/Home.jpg)](https://postimg.cc/XpWKXJsm)

## PRODUCT PAGE
[![Products.jpg](https://i.postimg.cc/QtpZ2YRb/Products.jpg)](https://postimg.cc/r0FHWjy0)

## SINGLE PRODUCT PAGE
[![Single-Product.jpg](https://i.postimg.cc/gJK5vgrt/Single-Product.jpg)](https://postimg.cc/k6BfCFQW)

## ADD TO CART PAGE
[![Cart.jpg](https://i.postimg.cc/44L2s7cc/Cart.jpg)](https://postimg.cc/7bznNLmP)

## ADMIN PRODUCT PAGE
[![Admin-Product.jpg](https://i.postimg.cc/Bv4Bx4Ds/Admin-Product.jpg)](https://postimg.cc/sMHWzFw0)

## USER DETAILS PAGE
[![User-Details.jpg](https://i.postimg.cc/2ys43Dms/User-Details.jpg)](https://postimg.cc/p5B913mC)

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact Us

<div align="center">
  <a href="mailto:support@preciouscharms.com">
    <img src="https://img.shields.io/badge/Email-support@preciouscharms.com-blue?style=for-the-badge&logo=gmail" alt="Email"/>
  </a>
  <a href="https://www.preciouscharms.com">
    <img src="https://img.shields.io/badge/Website-www.preciouscharms.com-green?style=for-the-badge" alt="Website"/>
  </a>
</div>

---

<div align="center">
  Made with ❤️ by the Precious Charms Team
  <br/>
  <img src="https://img.shields.io/badge/Version-1.0.0-green.svg?style=for-the-badge" alt="Version"/>
</div>

