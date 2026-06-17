import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = localStorage.getItem('vperfume-cart')
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('vperfume-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const exists = prevCart.find(item => item.id === product.id)
      if (exists) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...prevCart, { ...product, quantity }]
    })
  }

  const removeFromCart = productId => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const increaseQuantity = productId => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  const decreaseQuantity = productId => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === productId
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item,
        )
        .filter(item => item.quantity > 0),
    )
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
