import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import SearchBar from './SearchBar.jsx'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(() => searchParams.get('q') ?? '')
  const { cartCount } = useCart()
  const { user, loggedIn, logout } = useAuth()

  useEffect(() => {
    setQuery(searchParams.get('q') ?? '')
  }, [searchParams])

  const getActiveClass = path => (location.pathname === path ? 'active' : '')

  const handleSearchChange = value => {
    setQuery(value)
  }

  const handleSearchSubmit = () => {
    const trimmedQuery = query.trim()
    const targetPath = trimmedQuery ? `/products?q=${encodeURIComponent(trimmedQuery)}` : '/products'
    if (location.pathname !== '/products') {
      navigate(targetPath)
    } else {
      navigate(targetPath, { replace: true })
    }
  }

  const handleScrollToFooter = () => {
    const footer = document.querySelector('.footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <img src="/logo.png" alt="Biểu tượng VPerfume" className="logo-image" />
          VPerfume
        </Link>

        <div className="navbar-search">
          <SearchBar value={query} onChange={handleSearchChange} onSubmit={handleSearchSubmit} />
        </div>

        <nav className="menu">
          <Link to="/" className={getActiveClass('/')}>Trang chủ</Link>
          <Link to="/products" className={getActiveClass('/products')}>Sản phẩm</Link>
          <button className="contact-link" onClick={handleScrollToFooter} type="button">Liên hệ</button>
          <Link to="/cart" className={getActiveClass('/cart')}>
            <span className="cart-link">
              <FaShoppingCart />
              <span className="cart-count">{cartCount}</span>
            </span>
          </Link>
          {loggedIn ? (
            <>
              <span className="nav-user">👤 {user?.name?.split(' ')[0] ?? 'Bạn'}</span>
              <button className="nav-button logout-button" type="button" onClick={handleLogout}>Đăng xuất</button>
            </>
          ) : (
            <>
              <Link to="/login" className={getActiveClass('/login')}>Đăng nhập</Link>
              <Link to="/register" className={getActiveClass('/register')}>Đăng ký</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
