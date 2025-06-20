// import React from 'react'
// import { useState } from 'react'
// import LoginForm from "../components/LoginForm"
// import SignUpForm from "../components/SignUpForm"

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-red-800 to-pink-500'>



//       <div className='w-full max-w-md'>
//         <h2 className='text-center text-3xl font-extrabold text-white mb-8'>
//           {isLogin ? 'Sign in to swipe' : 'create a swipe account'}
//           </h2>

        
//           <div className="bg-white shadow-xl rounded-lg p-8">
//             {isLogin ? <LoginForm/>: <SignUpForm/>}


//             <div className="mt-8 text-center">
//               <p className='text-sm mb-4 text-gray-600'>
//                 {isLogin ? "new to Swipe?" : "Already have an account?"}

//               </p>

//               <button
//                 className={`w-full px-4 py-2 text-white font-bold rounded-lg ${
//                   isLogin? 'bg-pink-500 hover:bg-pink-600' : 'bg-pink-500 hover:bg-pink-600'
//                 }`}
//                 onClick={() => setIsLogin(!isLogin)}
//               >
//                 {isLogin? 'create a new account' : 'Sign in'}
//               </button>
//             </div>
//           </div>
//       </div>
     
//     </div>
//   )
// }

// export default AuthPage

// with heart background
import React, { useState } from 'react';
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import HeartBackground from "../components/HeartBackground";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showTestCredentials, setShowTestCredentials] = useState(false);

  // Test credentials
  const testEmail = "testingirl@gmail.com";
  const testPassword = "#test123,";

  return (
    <div className='min-h-screen flex items-center justify-center relative overflow-hidden'>
      {/* Heart Background Animation */}
      <HeartBackground />
      
      {/* Content Container with higher z-index */}
      <div className='w-full max-w-md z-10'>
        <h2 className='text-center text-3xl font-extrabold text-white mb-8'>
          {isLogin ? 'Sign in to swipe' : 'create a swipe account'}
        </h2>

        <div className="bg-white shadow-xl rounded-lg p-8">
          {/* Test Credentials Toggle */}
          <div className="mb-4 text-center">
            <button
              onClick={() => setShowTestCredentials(!showTestCredentials)}
              className="text-sm text-gray-600 hover:text-red-500 underline focus:outline-none"
            >
              {showTestCredentials ? 'Hide test credentials' : 'Show test credentials'}
            </button>
          </div>

          {/* Test Credentials Box (Conditionally Rendered) */}
          {showTestCredentials && (
            <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-300">
              <h3 className="font-bold text-gray-800 mb-2">Test Account:</h3>
              <div className="space-y-2">
                <div>
                  <span className="font-medium">Email:</span> 
                  <span className="ml-2 bg-gray-200 px-2 py-1 rounded text-gray-800">{testEmail}</span>
                </div>
                <div>
                  <span className="font-medium">Password:</span> 
                  <span className="ml-2 bg-gray-200 px-2 py-1 rounded text-gray-800">{testPassword}</span>
                </div>
              </div>
              <p className="mt-2 text-lg text-gray-600  ">
                Use these credentials to test the {isLogin ? 'login' : 'signup'} flow.
              </p>
            </div>
          )}

          {/* Login or Signup Form */}
          {isLogin ? <LoginForm defaultEmail={testEmail} defaultPassword={testPassword} /> : <SignUpForm />}

          <div className="mt-8 text-center">
            <p className='text-sm mb-4 text-gray-600'>
              {isLogin ? "New to Cupid?" : "Already have an account?"}
            </p>

            <button
              className={`w-full px-4 py-2 text-white font-bold rounded-lg transition-colors ${
                isLogin ? 'bg-red-500 hover:bg-red-800' : 'bg-red-500 hover:bg-red-800'
              }`}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Create a new account' : 'Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
