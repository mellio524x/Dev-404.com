import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Sections
export const getSections = () => api.get('/sections')
export const getSection = (key) => api.get(`/sections/${key}`)
export const createSection = (data) => api.post('/sections', data)
export const updateSection = (key, data) => api.put(`/sections/${key}`, data)

// Media
export const getMedia = (filters = {}) => {
  const params = new URLSearchParams()
  if (filters.sectionKey) params.append('sectionKey', filters.sectionKey)
  if (filters.featured) params.append('featured', 'true')
  return api.get(`/media${params.toString() ? '?' + params : ''}`)
}

export const getMediaItem = (id) => api.get(`/media/${id}`)
export const createMediaItem = (data) => api.post('/media', data)
export const updateMediaItem = (id, data) => api.put(`/media/${id}`, data)
export const deleteMediaItem = (id) => api.delete(`/media/${id}`)

// Contact
export const submitContact = (data) => api.post('/contact', data)
export const getContacts = () => api.get('/contact')

// Signup
export const submitSignup = (data) => api.post('/signup', data)
export const getSignups = () => api.get('/signup')

// Health
export const checkHealth = () => api.get('/health')

export default api
