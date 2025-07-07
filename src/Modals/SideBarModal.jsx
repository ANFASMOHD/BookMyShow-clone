import React from 'react'
import { FaAlignLeft, FaArrowDown, FaArrowLeft, FaArrowRight, FaGift } from 'react-icons/fa'
import { MdNotifications } from 'react-icons/md'

function SideBarModal() {
  return (
  <div className="fixed inset-0 z-50 flex justify-end  bg-black/40">
  <div className="bg-white w-[360px] h-full  md:rounded-l-lg  shadow-xl ">
    <div ><h1 className='text-2xl font-bold text-gray-600 p-4 '>Hey !</h1>
    
    </div>
    <hr className='text-gray-400' />
    <div className='flex p-2 space-x-5 bg-gray-100 shadow '>
      <div className='mt-1 border-2 rounded-full p-4 bg-red-700'> <FaGift/></div>
      <div className='text-[12px] text-violet-900'>Unlock Special Offers & Great Benefits </div>
      <div><button className='border border-red-500  hover:bg-gray-400  p-2 rounded text-red-500'> login/Register</button></div>
    </div>

    <div className='flex space-x-6 mt-3  hover:bg-gray-200 transition rounded p-2'>
      <div className='my-auto ml-2 text-[25px] text-gray-500'>  <MdNotifications/></div>
      <div>Notifications</div>

      <div className='mx-auto ml-40 mt-1 text-gray-600'><FaArrowRight/></div>
        
    </div>
       <div className='flex space-x-6 mt-3  hover:bg-gray-200 transition rounded p-2'>
      <div className='my-auto ml-2 text-[25px] text-gray-500'>  <MdNotifications/></div>
  <div className="flex flex-col">
  <div className="">Your Orders</div>
  <div className="text-sm text-gray-500">View all bookings and purchases</div>
  
</div>
  <div className=' mx-auto ml-11  mt-2 text-gray-600  items-center'>< FaArrowRight /></div>

</div>
    


       <div className='flex space-x-6 mt-3  hover:bg-gray-200 transition rounded p-2'>
      <div className='my-auto ml-2 text-[25px] text-gray-500'>  <MdNotifications/></div>
  <div className="flex flex-col">
  <div className="">Stream Library</div>
  <div className="text-sm text-gray-500">Rented and Purchase Movie</div>
  
</div>
  <div className=' mx-auto ml-20 mt-2 text-gray-600  items-center'>< FaArrowRight /></div>

</div>
       <div className='flex space-x-6 mt-3  hover:bg-gray-200 transition rounded p-2'>
      <div className='my-auto ml-2 text-[25px] text-gray-500'>  <MdNotifications/></div>
  <div className="flex flex-col">
  <div className="">Play Credit Card</div>
  <div className="text-sm text-gray-500">Rented and Purchase Movie</div>
  
</div>
  <div className=' mx-auto ml-19 mt-2 text-gray-600  items-center'>< FaArrowRight /></div>

</div>
       <div className='flex space-x-6 mt-3  hover:bg-gray-200 transition rounded p-2'>
      <div className='my-auto ml-2 text-[25px] text-gray-500'>  <MdNotifications/></div>
  <div className="flex flex-col">
  <div className="">Help & Support</div>
  <div className="text-sm text-gray-500">View commonly asked quries and chat</div>
  
</div>
  <div className=' mx-auto ml-12 mt-2 text-gray-600  items-center'>< FaArrowRight /></div>

</div>
       <div className='flex space-x-6 mt-3  hover:bg-gray-200 transition rounded p-2'>
      <div className='my-auto ml-2 text-[25px] text-gray-500'>  <MdNotifications/></div>
  <div className="flex flex-col">
  <div className="">Account & Settings</div>
  <div className="text-sm text-gray-500">Location,Payment,Permission & More</div>
  
</div>
  <div className=' mx-auto ml-12 mt-2 text-gray-600  items-center'>< FaArrowRight /></div>

</div>
       <div className='flex space-x-6 mt-3  hover:bg-gray-200 transition rounded p-2'>
      <div className='my-auto ml-2 text-[25px] text-gray-500'>  <MdNotifications/></div>
  <div className="flex flex-col">
  <div className="">Rewards</div>
  <div className="text-sm text-gray-500">Location,Payment,Permission & More</div>
  
</div>
  <div className=' mx-auto ml-12 mt-2 text-gray-600  items-center'>< FaArrowRight /></div>

</div>
  
    
  </div>
</div>

  )
}

export default SideBarModal