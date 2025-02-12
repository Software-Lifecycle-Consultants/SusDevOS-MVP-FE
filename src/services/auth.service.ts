import axios from 'axios'

interface AuthTokens {
  access_token: string
  refresh_token: string
}

interface LoginResponse extends AuthTokens {
  user: {
    id: string
    email: string
    // ... other user fields
  }
}

const AUTH_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/auth`

// Create axios instance for auth
const authApi = axios.create({
  baseURL: AUTH_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const authService = {
  setTokens({ access_token, refresh_token }: AuthTokens) {
    if (localStorage.getItem('rememberMe') === 'true') {
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('refresh_token', refresh_token)
    } else {
      sessionStorage.setItem('access_token', access_token)
      sessionStorage.setItem('refresh_token', refresh_token)
    }
  },

  getTokens(): AuthTokens | null {
    const storage = localStorage.getItem('rememberMe') === 'true' 
      ? localStorage 
      : sessionStorage

    const access_token = storage.getItem('access_token')
    const refresh_token = storage.getItem('refresh_token')

    if (!access_token || !refresh_token) return null

    return { access_token, refresh_token }
  },

  clearTokens() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    sessionStorage.removeItem('access_token')
    sessionStorage.removeItem('refresh_token')
  },

  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await authApi.post<LoginResponse>('/login', {
      email,
      password,
    })
    return response.data
  },

  async refreshToken(): Promise<AuthTokens> {
    const refresh_token = this.getTokens()?.refresh_token
    if (!refresh_token) throw new Error('No refresh token available')

    const response = await authApi.post<AuthTokens>('/refresh', {
      refresh_token,
    })
    return response.data
  },

  async logout() {
    const refresh_token = this.getTokens()?.refresh_token
    if (refresh_token) {
      try {
        await authApi.post('/logout', { refresh_token })
      } catch (error) {
        console.error('Error during logout:', error)
      }
    }
    this.clearTokens()
  },
} 