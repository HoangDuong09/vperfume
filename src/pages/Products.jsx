import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { fetchProducts } from '../services/api.js'
import { useCart } from '../context/CartContext.jsx'

function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState(() => searchParams.get('q') ?? '')
  const [sort, setSort] = useState('default')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { addToCart } = useCart()

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
      .catch(() => setError('Không thể tải sản phẩm. Vui lòng thử lại sau.'))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    setSearch(searchParams.get('q') ?? '')
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase()
    let filtered = products.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q))
    
    // Apply sorting
    if (sort === 'name-asc') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name, 'vi'))
    } else if (sort === 'price-asc') {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    }
    
    return filtered
  }, [products, search, sort])

  const handleSearchChange = value => {
    setSearch(value)
    if (value.trim()) {
      setSearchParams({ q: value })
    } else {
      setSearchParams({})
    }
  }

  return (
    <section>
      <div className="section-head">
        <div>
          <h2>Sản phẩm</h2>
          <p className="muted">Duyệt bộ sưu tập nước hoa chọn lọc của chúng tôi.</p>
        </div>
        <div style={{display: 'flex', gap: 12, alignItems: 'center'}}>
          <SearchBar value={search} onChange={handleSearchChange} />
        </div>
      </div>

      {!loading && !error && filteredProducts.length > 0 && (
        <div className="sort-container">
          <label htmlFor="sort-select">Sắp xếp:</label>
          <select id="sort-select" className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="default">Mặc định</option>
            <option value="name-asc">A - Z</option>
            <option value="price-asc">Giá tăng dần</option>
            <option value="price-desc">Giá giảm dần</option>
          </select>
        </div>
      )}

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

export default Products
