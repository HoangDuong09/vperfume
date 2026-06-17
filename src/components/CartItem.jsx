function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="cart-item cart-item-card">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-content">
        <div className="cart-item-top">
          <div>
            <h3>{item.name}</h3>
          </div>
          <button type="button" className="remove-button" onClick={() => onRemove(item.id)}>
            Xóa
          </button>
        </div>
        <p className="cart-price">{new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(item.price * item.quantity)}</p>
        <div className="cart-actions">
          <button type="button" onClick={() => onDecrease(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button type="button" onClick={() => onIncrease(item.id)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
