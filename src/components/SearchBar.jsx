import { FaSearch } from 'react-icons/fa'

function SearchBar({ value, onChange, onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault()
    if (onSubmit) {
      onSubmit()
    }
  }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="search"
          placeholder="Tìm kiếm tên hoặc thương hiệu"
          value={value}
          onChange={event => onChange(event.target.value)}
        />
      </div>
      <button type="submit" className="search-button">
        Tìm kiếm
      </button>
    </form>
  )
}

export default SearchBar
