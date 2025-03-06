// const API_URL = import.meta.env.VITE_API_URL || 'https://schedura-server.vercel.app/api';

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


const API_URL = import.meta.env.VITE_API_URL || "https://schedura-server.vercel.app/api"

export const googleAuth = async (token) => {
  try {
    const response = await fetch(`${API_URL}/users/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: window.location.origin,
      },
      body: JSON.stringify({ token }),
      credentials: "include",
      mode: "cors",
    })

    if (!response.ok) {
      let errorMessage = "Google authentication failed"
      try {
        const errorData = await response.json()
        errorMessage = errorData.message || errorMessage
        console.error("Server error:", errorData)
      } catch (e) {
        console.error("Could not parse error response")
      }
      throw new Error(errorMessage)
    }

    return await response.json()
  } catch (error) {
    console.error("Authentication Error:", error)
    throw error
  }
}

