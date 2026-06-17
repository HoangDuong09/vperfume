import { useEffect, useState, useRef } from 'react'

const images = ['/Hero/hero1.webp', '/Hero/hero2.webp', '/Hero/hero3.webp']

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  const delay = 3000

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, delay)

    return () => {
      resetTimeout()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const goTo = i => {
    setIndex(i)
  }

  const prev = () => {
    setIndex(prev => (prev - 1 + images.length) % images.length)
  }

  const next = () => {
    setIndex(prev => (prev + 1) % images.length)
  }

  return (
    <section className="hero-slider">
      <div className="slides">
        {images.map((src, i) => (
          <div
            key={src}
            className={`slide ${i === index ? 'active' : ''}`}
            aria-hidden={i !== index}
          >
            <img src={src} alt={`Biểu ngữ ${i + 1}`} />
          </div>
        ))}
      </div>

      <button className="slider-btn prev" onClick={prev} aria-label="Slide trước">‹</button>
      <button className="slider-btn next" onClick={next} aria-label="Slide tiếp theo">›</button>

      <div className="dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Chuyển đến slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
