import { createContext, useContext, useEffect, useState } from 'react'
import { authService } from '../services/auth.service'

interface AuthContextType {
  isAuthenticated: boolean
  user: any | null
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any | null>(null)

  useEffect(() => {
    const tokens = authService.getTokens()
    setIsAuthenticated(!!tokens)
    // You might want to fetch user data here
  }, [])

  const logout = async () => {
    await authService.logout()
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 