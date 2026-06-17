import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function Login() {
  const navigate = useNavigate()
  const { login, loggedIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState('')

  const validate = () => {
    const nextErrors = {}
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
    setServerError('')
    if (!validate()) return

    const result = login(email.trim(), password)
    if (result.success) {
      navigate('/')
    } else {
      setServerError(result.message)
    }
  }

  return (
    <section className="auth-page">
      <div className="auth-card auth-card--auth">
        <div className="auth-hero">
          <p className="auth-eyebrow">Xin chào tại VPerfume</p>
          <h1>Đăng nhập</h1>
          <p className="auth-description">Đăng nhập để tiếp tục mua sắm nước hoa cao cấp và lưu giữ giỏ hàng của bạn.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
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

          {serverError && <p className="field-error">{serverError}</p>}

          <button type="submit" className="primary-button auth-button">Đăng nhập</button>
        </form>

        <p className="auth-switch">
          Chưa có tài khoản? <Link className="link-button" to="/register">Đăng ký ngay</Link>
        </p>
      </div>
    </section>
  )
}

export default Login
