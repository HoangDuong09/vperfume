import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function Register() {
  const navigate = useNavigate()
  const { register, loggedIn } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const nextErrors = {}
    if (!name.trim()) {
      nextErrors.name = 'Vui lòng nhập họ tên'
    }

    if (!email.trim()) {
      nextErrors.email = 'Vui lòng nhập email'
    } else if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      nextErrors.email = 'Email không hợp lệ'
    }

    if (!password) {
      nextErrors.password = 'Vui lòng nhập mật khẩu'
    } else if (password.length < 8) {
      nextErrors.password = 'Mật khẩu phải có ít nhất 8 ký tự'
    }

    if (confirmPassword !== password) {
      nextErrors.confirmPassword = 'Mật khẩu xác nhận không khớp'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  useEffect(() => {
    if (loggedIn) {
      navigate('/')
    }
  }, [loggedIn, navigate])

  const handleSubmit = event => {
    event.preventDefault()
    if (!validate()) return

    const result = register({ name: name.trim(), email: email.trim(), password })
    if (result.success) {
      navigate('/login')
    }
  }

  return (
    <section className="auth-page">
      <div className="auth-card auth-card--auth">
        <div className="auth-hero">
          <p className="auth-eyebrow">Bắt đầu hành trình</p>
          <h1>Đăng ký tài khoản</h1>
          <p className="auth-description">Tạo tài khoản để lưu lại giỏ hàng, ưu đãi và trải nghiệm tốt hơn.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Họ và tên
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Nhập họ và tên"
            />
            {errors.name && <p className="field-error">{errors.name}</p>}
          </label>

          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="example@vperfume.com"
            />
            {errors.email && <p className="field-error">{errors.email}</p>}
          </label>

          <label>
            Mật khẩu
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
            />
            {errors.password && <p className="field-error">{errors.password}</p>}
          </label>

          <label>
            Xác nhận mật khẩu
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Nhập lại mật khẩu"
            />
            {errors.confirmPassword && <p className="field-error">{errors.confirmPassword}</p>}
          </label>

          <button type="submit" className="primary-button auth-button">Đăng ký</button>
        </form>

        <p className="auth-switch">
          Đã có tài khoản? <Link className="link-button" to="/login">Đăng nhập</Link>
        </p>
      </div>
    </section>
  )
}

export default Register
