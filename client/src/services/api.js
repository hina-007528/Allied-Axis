import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('aa_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.error || error.message || 'Something went wrong';
    return Promise.reject(new Error(message));
  }
);

export const blogService = {
  getAll: (params) => api.get('/blogs', { params }),
  getBySlug: (slug) => api.get(`/blogs/${slug}`),
  getFeatured: () => api.get('/blogs/featured'),
};

export const caseStudyService = {
  getAll: () => api.get('/case-studies'),
  getBySlug: (slug) => api.get(`/case-studies/${slug}`),
};

export const serviceService = {
  getAll: () => api.get('/services'),
  getBySlug: (slug) => api.get(`/services/${slug}`),
};

export const testimonialService = {
  getAll: () => api.get('/testimonials'),
  getFeatured: () => api.get('/testimonials/featured'),
};

export const contactService = {
  submit: (data) => api.post('/contact', data),
  subscribe: (email) => api.post('/contact/subscribe', { email }),
};

export const teamService = {
  getAll: () => api.get('/team'),
};

export const siteService = {
  getBootstrap: () => api.get('/site/bootstrap'),
  getPage: (key) => api.get(`/site/pages/${key}`),
};

export default api;
