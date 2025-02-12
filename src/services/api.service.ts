import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { authService } from './auth.service'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const tokens = authService.getTokens()
    if (tokens?.access_token) {
      config.headers.Authorization = `Bearer ${tokens.access_token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config
    if (!originalRequest) return Promise.reject(error)

    // If error is 401 and we haven't tried to refresh token yet
    if (
      error.response?.status === 401 &&
      !originalRequest.headers['X-Retry-After-Refresh']
    ) {
      try {
        const tokens = await authService.refreshToken()
        authService.setTokens(tokens)

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${tokens.access_token}`
        originalRequest.headers['X-Retry-After-Refresh'] = 'true'
        return api(originalRequest)
      } catch (refreshError) {
        // If refresh token fails, logout user
        authService.clearTokens()
        window.location.href = '/signin'
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export { api } 