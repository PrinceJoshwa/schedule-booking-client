// import React, { useEffect, useState } from "react";
// import { useGoogleLogin } from "@react-oauth/google";
// import { useNavigate } from "react-router-dom";
// import { googleAuth } from "../api";
// import { isAuthenticated } from "../utils/auth";

// function Login() {
//   const navigate = useNavigate();
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (isAuthenticated()) {
//       navigate("/dashboard");
//     }
//   }, [navigate]);

//   const handleGoogleLogin = async (response) => {
//     setIsLoading(true);
//     setError("");
//     try {
//       const userData = await googleAuth(response.access_token);
      
//       if (userData && userData.token) {
//         localStorage.setItem("userToken", userData.token);
//         localStorage.setItem("userData", JSON.stringify({
//           id: userData._id,
//           name: userData.name,
//           email: userData.email
//         }));
        
//         navigate("/dashboard");
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       setError("Login failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const login = useGoogleLogin({
//     onSuccess: handleGoogleLogin,
//     onError: (error) => {
//       console.error("Google Login Failed:", error);
//       setError("Google login failed. Please try again.");
//     }
//   });

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
//       <div className="w-full max-w-[400px] rounded-xl bg-white p-8 shadow-2xl">
        
//         {/* Schedura Logo & Title */}
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-blue-600">Schedura</h1>
//           <p className="text-gray-500 mt-1">Simplify Your Schedule</p>
//         </div>

//         {/* Login Heading */}
//         <h2 className="mt-6 mb-4 text-center text-2xl font-semibold text-gray-800">Login</h2>
        
//         {/* Error Message */}
//         {error && (
//           <div className="mb-4 rounded-md bg-red-100 border border-red-400 p-3 text-sm text-red-700" role="alert">
//             {error}
//           </div>
//         )}
        
//         {/* Google Login Button */}
//         <button
//           onClick={() => login()}
//           disabled={isLoading}
//           className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {isLoading ? (
//             <span>Loading...</span>
//           ) : (
//             <>
//               <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
//               Continue with Google
//             </>
//           )}
//         </button>

//         {/* Sign Up Link */}
//         <div className="mt-6 text-center text-sm">
//           <span className="text-gray-600">Don't have an account? </span>
//           <a href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
//             Sign up
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


// "use client"

// import { useEffect, useState } from "react"
// import { useGoogleLogin } from "@react-oauth/google"
// import { useNavigate } from "react-router-dom"
// import { googleAuth } from "../api"
// import { isAuthenticated } from "../utils/auth"

// function Login() {
//   const navigate = useNavigate()
//   const [error, setError] = useState("")
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     if (isAuthenticated()) {
//       navigate("/dashboard")
//     }
//   }, [navigate])

//   const handleGoogleLogin = async (response) => {
//     setIsLoading(true)
//     setError("")
//     try {
//       const userData = await googleAuth(response.access_token)

//       if (userData && userData.token) {
//         localStorage.setItem("userToken", userData.token)
//         localStorage.setItem(
//           "userData",
//           JSON.stringify({
//             id: userData._id,
//             name: userData.name,
//             email: userData.email,
//           }),
//         )

//         navigate("/dashboard")
//       } else {
//         throw new Error("Invalid response from server")
//       }
//     } catch (error) {
//       console.error("Login failed:", error)
//       setError("Login failed. Please try again.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const login = useGoogleLogin({
//     onSuccess: handleGoogleLogin,
//     onError: (error) => {
//       console.error("Google Login Failed:", error)
//       setError("Google login failed. Please try again.")
//     },
//   })

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-600 to-secondary-700">
//       <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl">
//         {/* Logo & Title */}
//         <div className="text-center">
//           <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
//             <svg className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//               />
//             </svg>
//           </div>
//           <h1 className="text-3xl font-bold text-primary-600">Schedura</h1>
//           <p className="mt-1 text-gray-500">Simplify Your Schedule</p>
//         </div>

//         {/* Login Heading */}
//         <h2 className="mt-8 mb-6 text-center text-2xl font-semibold text-gray-800">Welcome Back</h2>

//         {/* Error Message */}
//         {error && (
//           <div
//             className="mb-6 rounded-lg bg-danger-50 border border-danger-200 p-4 text-sm text-danger-700"
//             role="alert"
//           >
//             {error}
//           </div>
//         )}

//         {/* Google Login Button */}
//         <button
//           onClick={() => login()}
//           disabled={isLoading}
//           className="w-full rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
//         >
//           {isLoading ? (
//             <div className="flex items-center gap-2">
//               <svg
//                 className="h-5 w-5 animate-spin text-gray-500"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                 ></path>
//               </svg>
//               <span>Loading...</span>
//             </div>
//           ) : (
//             <>
//               <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
//               Continue with Google
//             </>
//           )}
//         </button>

//         <div className="relative my-8">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-200"></div>
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="bg-white px-4 text-gray-500">or</span>
//           </div>
//         </div>

//         <button className="w-full rounded-lg bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 shadow-sm">
//           <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//             />
//           </svg>
//           Continue with Email
//         </button>

//         {/* Sign Up Link */}
//         <div className="mt-8 text-center text-sm">
//           <span className="text-gray-600">Don't have an account? </span>
//           <a href="/signup" className="text-primary-600 hover:text-primary-700 font-medium">
//             Sign up
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { googleAuth } from "../api";
import { isAuthenticated } from "../utils/auth";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleGoogleLogin = async (response) => {
    setIsLoading(true);
    setError("");
    try {
      const userData = await googleAuth(response.access_token);
      
      if (userData && userData.token) {
        localStorage.setItem("userToken", userData.token);
        localStorage.setItem("userData", JSON.stringify({
          id: userData._id,
          name: userData.name,
          email: userData.email
        }));
        
        navigate("/dashboard");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const login = useGoogleLogin({
    onSuccess: handleGoogleLogin,
    onError: (error) => {
      console.error("Google Login Failed:", error);
      setError("Google login failed. Please try again later.");
    },
    flow: 'implicit',
    scope: 'email profile',
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-600 to-secondary-700">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl">
        <div className="text-center">
          <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
            <svg className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-primary-600">Schedura</h1>
          <p className="mt-1 text-gray-500">Simplify Your Schedule</p>
        </div>

        <h2 className="mt-8 mb-6 text-center text-2xl font-semibold text-gray-800">Welcome Back</h2>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700" role="alert">
            {error}
          </div>
        )}

        <button
          onClick={() => login()}
          disabled={isLoading}
          className="w-full rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 animate-spin text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Loading...</span>
            </div>
          ) : (
            <>
              <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
              Continue with Google
            </>
          )}
        </button>

        <div className="mt-8 text-center text-sm">
          <span className="text-gray-600">Don't have an account? </span>
          <a href="/signup" className="text-primary-600 hover:text-primary-700 font-medium">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
