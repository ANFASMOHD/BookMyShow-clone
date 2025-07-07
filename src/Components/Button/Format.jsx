import React, { useState } from 'react'
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

function Format() {
    const [showFormat, setShowFormat] = useState(true);
      const Format=['2D','HOUSEFULL 5A','HOUSEFULL 5A']
  return (
   
          <div className='bg-white m-4'>
                     <div className='flex justify-between p-3 '>
           <div className='flex'>
  <FaChevronDown className='mt-1.5 text-[15px] text-gray-500' onClick={() => setShowFormat(!showFormat)} />
  
  
  
            <h3 className='text-red-500 ml-2'>Format</h3>
        
          </div>
            <div>
            <h3 className='text-gray-600'>clear</h3>
          </div>
           </div>
     {  
         <div className='p-3'>
            { !showFormat &&  (
              Format.map((name)=>(
                <button className='border-1 border-gray-200 p-[10px]  m-1 bg-white text-red-500 text-[14px]'>{name}</button>
              ))
             ) }
           </div>
           }
      </div>
  )
}

export default Format