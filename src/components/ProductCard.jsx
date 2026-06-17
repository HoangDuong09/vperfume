import { Link } from 'react-router-dom'

function ProductCard({ product, onAdd }) {
  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(product.price)

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-link">
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="muted">{product.brand}</p>
        <p className="price">{formattedPrice}</p>
        <button type="button" className="product-button" onClick={() => onAdd(product)}>
          Thêm vào giỏ hàng
        </button>
      </div>
    </article>
  )
}

export default ProductCard
