const API_URL = import.meta.env.VITE_API_URL || 'https://schedura-server.vercel.app/api';

// export const googleAuth = async (token) => {
//   try {
//     const response = await fetch(`${API_URL}/users/google`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({ token }),
//       credentials: 'include'
//     });
    
//     if (!response.ok) {
//       const error = await response.json();
//       throw new Error(error.message || 'Google authentication failed');
//     }
    
//     return await response.json();
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// };

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 second timeout
  headers: {
    'Content-Type': 'application/json'
  }
});

export const googleAuth = async (accessToken) => {
  try {
    const response = await api.post('/users/google', {
      token: accessToken
    });
    
    return response.data;
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      throw new Error('Server timeout. Please try again.');
    }
    
    if (error.response) {
      // Server responded with error
      const message = error.response.data?.message || 'Authentication failed';
      throw new Error(message);
    }
    
    if (error.request) {
      // Request made but no response
      throw new Error('No response from server. Please check your connection.');
    }
    
    throw new Error('Authentication failed. Please try again.');
  }
};