import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const isLogged = localStorage.getItem('vperfume_logged_in') === 'true'
    const storedUser = localStorage.getItem('vperfume_user')
    if (isLogged && storedUser) {
      setUser(JSON.parse(storedUser))
      setLoggedIn(true)
    }
  }, [])

  const login = (email, password) => {
    const storedUser = localStorage.getItem('vperfume_user')
    if (!storedUser) {
      return { success: false, message: 'Email hoặc mật khẩu không đúng' }
    }

    const parsedUser = JSON.parse(storedUser)
    if (parsedUser.email === email && parsedUser.password === password) {
      localStorage.setItem('vperfume_logged_in', 'true')
      setUser(parsedUser)
      setLoggedIn(true)
      return { success: true }
    }

    return { success: false, message: 'Email hoặc mật khẩu không đúng' }
  }

  const logout = () => {
    localStorage.removeItem('vperfume_logged_in')
    setLoggedIn(false)
    setUser(null)
  }

  const register = ({ name, email, password }) => {
    const newUser = { name, email, password }
    localStorage.setItem('vperfume_user', JSON.stringify(newUser))
    return { success: true }
  }

  return (
    <AuthContext.Provider value={{ user, loggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}
