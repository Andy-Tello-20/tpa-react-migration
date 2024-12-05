import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.mitienda.com', // Cambia esto por tu URL base
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');

      if (refreshToken) {
        try {
          const refreshResponse = await api.post('/token/refresh', {
            refreshToken,
          });

          const { accessToken, refreshToken: newRefreshToken } = refreshResponse.data;
          localStorage.setItem('accessToken', accessToken);

          if (newRefreshToken) {
            localStorage.setItem('refreshToken', newRefreshToken);
          }

          error.config.headers.Authorization = `Bearer ${accessToken}`;
          return api.request(error.config);
        } catch {
          window.location.href = '/login';
        }
      } else {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
