import React, { useState } from 'react'
import { FaApple, FaGoogle } from 'react-icons/fa'
import { FaLetterboxd } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

function SignModal({closethemodal}) {
  const [CtnBtn,setCtnbtn]=useState('');
    const isPhoneFilled = CtnBtn.trim().length > 0;
  return (
<div className=' fixed inset-0 z-50 bg-black/40'>
      <div className= ' absolute top-20 left-1/2 transform -translate-x-1/2  border border-gray-100 bg-white shadow w-[450px] p-5 mx-auto  '>
  
  <div className="w-full relative flex items-center justify-center py-2">
    <h1 className="text-center">GetStarted</h1>
    <div className="absolute right-4">
      <h1 onClick={closethemodal} className="cursor-pointer">X</h1>
    </div>
  </div>
   <div className=' flex flex-col justify-center items-center p-3'>
          <div className="relative w-full max-w-md m-5">
    <FaGoogle className="text-blue-700 absolute left-3 top-1/2 transform -translate-y-1/2" />
    <input
      type="text"
      placeholder="Continue with Google"
      className="border border-gray-300 w-full h-12 pl-10 pr-3 rounded  hover:bg-gray-200 transition"
    />
  </div>
  
          <div className="relative w-full max-w-md m-5">
    <MdEmail className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
    <input
      type="text"
      placeholder="Continue with Google"
      className="border border-gray-300 w-full h-12 pl-10 pr-3 rounded  hover:bg-gray-200 transition"
    />
  </div>
          <div className="relative w-full max-w-md m-5">
    <FaApple className="text-Black-700 absolute left-3 top-1/2 transform -translate-y-1/2" />
    <input
      type="text"
      placeholder="Continue with Google"
      className="border border-gray-300 w-full h-12 pl-10 pr-3 rounded  hover:bg-gray-200 transition"
    />
  </div>
  <div><h1 className='text-[15px] text-gray-600'>OR</h1></div>
   </div>
    <div className="flex items-center  rounded px-3 py-2 m-2">
            <span className="text-sm mr-2">🇮🇳 +91</span>
            <input
            value={CtnBtn}
            onChange={(e)=>setCtnbtn(e.target.value)}
              type="tel"
              placeholder="Continue with mobile number"
              className="w-full outline-none text-sm placeholder-gray-500 cursor-pointer hover:underline text-red-500" 
            />
          </div>
          <div className='text-center mt-10'>
            <button className={`w-full h-[40px] bg-gray-200 rounded transition duration-300 ${isPhoneFilled ? 'bg-red-400 hover:bg-red-600' :'bg-gray-300 cursor-not-allowed'}`}
            disabled={!isPhoneFilled}>
                Continue
            </button>
          </div>
            
  
      </div>
</div>
  )
}

export default SignModal