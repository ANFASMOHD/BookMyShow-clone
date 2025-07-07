import React, { useState } from 'react'
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
function Genres() {
    const [showGenres, setShowGenres] = useState(true);
      const Genres=['Drama','Triller','Comedy','Crime','Family','Action','Fantacy','Mystery','Adventure','Musical','Sports','Supernatural'];
      

  return (
        <div className='bg-white m-4'>
                       <div className='flex justify-between p-3 '>
             <div className='flex'>
     <FaChevronDown className='mt-1.5 text-[15px] text-gray-500' onClick={() => setShowGenres(!showGenres)} />
    
    
    
              <h3 className='text-red-500 ml-2'>Genres</h3>
          
            </div>
              <div>
              <h3 className='text-gray-600'>clear</h3>
            </div>
             </div>
         {   
          <div className='p-3'>
              {  !showGenres &&  (
                Genres.map((name)=>(
                  <button className='border-1 border-gray-200 p-[10px]  m-1 bg-white text-red-500 text-[14px]'>{name}</button>
                ))
              )}
             </div>
             }
        </div>
  )
}

export default Genres