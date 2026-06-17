import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import HeroSlider from '../components/HeroSlider.jsx'
import { fetchProducts } from '../services/api.js'
import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext.jsx'

function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { addToCart } = useCart()

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data.slice(0, 4)))
      .catch(() => setError('Không thể tải sản phẩm nổi bật.'))
      .finally(() => setLoading(false))
  }, [])

  const filteredProducts = products

  return (
    <section>
      <HeroSlider />
      <div className="hero hero-compact">
        <div className="hero-content">
          <p className="badge">Bộ sưu tập cao cấp</p>
          <h1>Khám phá Hương thơm Riêng của bạn</h1>
          <p className="hero-subtitle">Khám phá nước hoa cao cấp, dành cho mọi cá tính và dịp khác nhau.</p>
          <div className="hero-cta">
            <Link to="/products" className="primary-button">Khám phá ngay</Link>
          </div>
        </div>
      </div>

      <section className="section-head">
        <div>
          <h2>Sản phẩm nổi bật</h2>
          <p className="muted">Sản phẩm được tuyển chọn từ bộ sưu tập của chúng tôi.</p>
        </div>
      </section>

      {loading ? (
        <div className="state-message">Đang tải sản phẩm...</div>
      ) : error ? (
        <div className="state-message state-error">{error}</div>
      ) : filteredProducts.length === 0 ? (
        <div className="state-message">Không tìm thấy sản phẩm.</div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={addToCart}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Home
