import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../services/api.js'
import { useCart } from '../context/CartContext.jsx'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  useEffect(() => {
    if (!id) return
    fetchProductById(id)
      .then(setProduct)
      .catch(() => setError('Không thể tải chi tiết sản phẩm.'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <div className="state-message">Đang tải chi tiết sản phẩm...</div>
  }

  if (error) {
    return <div className="state-message state-error">{error}</div>
  }

  if (!product) {
    return <div className="state-message">Không tìm thấy sản phẩm.</div>
  }

  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(product.price)

  return (
    <section className="detail-card detail-layout">
      <img src={product.image} alt={product.name} className="detail-image" />
      <div className="detail-content">
        <h2 className="detail-title">{product.name}</h2>
        <p className="muted">{product.brand}</p>
        <div className="detail-meta-grid">
          <span className="detail-price">{formattedPrice}</span>
        </div>
        <p className="detail-description">{product.description}</p>
        <div className="detail-fragrance">
          <div>
            <strong>Nhóm hương:</strong> {product.notes.join(', ')}
          </div>
        </div>
        <div className="detail-actions">
          <div className="quantity-picker">
            <button
              type="button"
              onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
              aria-label="Giảm số lượng"
            >
              −
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(prev => prev + 1)}
              aria-label="Tăng số lượng"
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="detail-add-button"
            onClick={() => addToCart(product, quantity)}
          >
            Thêm vào giỏ hàng
          </button>
        </div>

      </div>
    </section>
  )
}

export default ProductDetail
