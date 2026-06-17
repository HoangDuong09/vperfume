import perfumes from './perfumes.js'

export function fetchProducts() {
  return Promise.resolve(perfumes)
}

export function fetchProductById(id) {
  const p = perfumes.find(item => String(item.id) === String(id))
  return Promise.resolve(p)
}
