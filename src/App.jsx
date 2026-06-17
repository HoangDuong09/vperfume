import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        <footer className="footer">
          <div className="footer-inner">
            <div>
              <p className="footer-brand">VPerfume</p>
              <p className="footer-text">Bộ sưu tập nước hoa cao cấp</p>
            </div>
            <div>
              <p className="footer-title">Liên kết nhanh</p>
              <a href="/">Trang chủ</a>
              <a href="/products">Sản phẩm</a>
              <a href="/cart">Giỏ hàng</a>
              <a href="#footer-contact">Liên hệ</a>
            </div>
            <div id="footer-contact">
              <p className="footer-title">Liên hệ</p>
              <a href="tel:+84123456789">Hotline: +84 123 456 789</a>
              <a href="mailto:contact@vperfume.com">Email: contact@vperfume.com</a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} VPerfume. Bản quyền được bảo lưu.</p>
        </footer>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
