import { useCart } from '../context/CartContext.jsx'
import CartItem from '../components/CartItem.jsx'

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart()

  if (!cart.length) {
    return (
      <section className="empty-state">
        <h2>Giỏ hàng trống</h2>
        <p>Duyệt sản phẩm và thêm vào giỏ để bắt đầu mua sắm.</p>
      </section>
    )
  }

  return (
    <section>
      <div className="section-head">
        <div>
          <h2>Giỏ hàng</h2>
          <p className="muted">Quản lý sản phẩm trước khi thanh toán.</p>
        </div>
      </div>
      <div className="cart-list">
        {cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </div>
      <div className="cart-summary">
        <div>
          <p className="summary-label">Tổng tiền</p>
          <h3>{new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(cartTotal)}</h3>
        </div>
        <button type="button" className="primary-button">
          Thanh toán
        </button>
      </div>
    </section>
  )
}

export default Cart
