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

export const googleAuth = async (accessToken) => {
  try {
    const response = await axios.post(`${API_URL}/users/google`, {
      token: accessToken
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Google auth error:', error);
    throw new Error('Google authentication failed');
  }
};