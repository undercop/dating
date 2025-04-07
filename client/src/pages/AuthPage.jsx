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
import React from 'react'
import { useState } from 'react'
import LoginForm from "../components/LoginForm"
import SignUpForm from "../components/SignUpForm"
import HeartBackground from "../components/HeartBackground"

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

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
          {isLogin ? <LoginForm/> : <SignUpForm/>}

          <div className="mt-8 text-center">
            <p className='text-sm mb-4 text-gray-600'>
              {isLogin ? "New to Swipe?" : "Already have an account?"}
            </p>

            <button
              className={`w-full px-4 py-2 text-white font-bold rounded-lg transition-colors ${
                isLogin ? 'bg-pink-500 hover:bg-pink-600' : 'bg-pink-500 hover:bg-pink-600'
              }`}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Create a new account' : 'Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
