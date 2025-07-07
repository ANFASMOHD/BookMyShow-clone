import React, { useState } from 'react';
import { FaChevronDown, FaBars, FaSearch, FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa6';
import logo from '../assets/projectBook-removebg-preview.png';
import LocationSelector from '../Modals/LocationSelector';
import SignModal from '../Modals/SignModal';

import SideBarModal from '../Modals/SideBarModal';
import { useCity } from '../Context/CityContext';
import { Link  } from 'react-router-dom';




function Header() {
  const { selectedCity, setSelectedCity } = useCity(); // 👈 use 
  const [showSelector, setShowSelector] = useState(false);
  const [showSign,SetShowSign]=useState(false);
  const [showInput, setShowInput] = useState(false);
  const [sidebar,setsibar]=useState(false)

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setShowSelector(false);
  };
  const items = [
  { icon: 'fa-film', label: 'Movies' },
  { icon: 'fa-film', label: 'Music' },
  { icon: 'fa-film', label: 'Games' },
  { icon: 'fa-book', label: 'Books' },
  { icon: 'fa-tv', label: 'TV Shows' },
  { icon: 'fa-podcast', label: 'Podcasts' },
  { icon: 'fa-star', label: 'Favorites' },
  { icon: 'fa-heart', label: 'Liked' }
];


  return (
    <>
      {/* DESKTOP HEADER */}
      {!showInput && (
     <>
          <div className="hidden md:flex w-full bg-white shadow-md ">
            <div className="w-[77%] mx-auto flex items-center justify-between py-2">
              {/* Left: Logo & Search */}
              <div className="flex items-center space-x-6">
              <Link to={'/'}>  <img src={logo} alt="Logo" className="h-17 w-[120px]" /></Link>
                <div className="relative w-[600px]">
                  <input
                    type="text"
                    placeholder="Search for Movies, Events, Plays, Sports and Activities"
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                    onClick={() => setShowInput(true)}
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                </div>
              </div>
  
           
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => setShowSelector(!showSelector)}
                  className="flex items-center text-sm hover:text-red-400 transition"
                >
                  {selectedCity}
                  <FaChevronDown className="ml-2 text-xs text-gray-400" />
                </button>
                <button onClick={()=>SetShowSign(true)} className="bg-[#F84464] text-white text-sm px-3 py-1 rounded-md hover:bg-red-600 transition">
                  Sign in
                </button>
                <FaBars onClick={()=>setsibar(true)} className="text-lg text-gray-500 cursor-pointer" />
              </div>
            </div>
       
          </div>
          
        
        <div className='hidden md:flex  w-full bg-[#F5F5F5] '>
               <div className='ml-[175px] mr-[175px] w-full flex justify-between '>
                <div>
                  <ul  className='flex space-x-5 py-[8px] text-[14px]' >
                 <li className='hover:font-bold'>   <Link to={'/movie'}>Movie </Link> </li>
                    <li>Stream</li>
                    <li>Event</li>
                    <li>Play</li>
                    <li>Sports</li>
                     <li>Activites</li>
                  </ul>
                </div>
                    <div >
                  <ul className='flex space-x-5 py-[8px] text-[12px]'>
                    <li>ListYourShow</li>
                    <li>Corporate</li>
                    <li>Offers</li>
                    <li>Gift Cards</li>
                 
                 
                  </ul>
                </div>
      
              </div>
        </div>
        <hr className='text-gray-300' />
     </>
      )}
          { showInput && (
        <div className="hidden md:flex w-full px-4 py-2  items-center gap-2 bg-white shadow-sm sticky top-0 z-50">
          <FaChevronLeft
            onClick={() => setShowInput(false)}
            className="text-gray-500 text-lg cursor-pointer"
          />
          <input
            type="text"
            placeholder="Search for Movies, Events, Plays..."
            className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            autoFocus
          />
          <button
            onClick={() => setShowInput(false)}
            className="text-gray-700 text-xl font-bold px-2"
          >
            ×
          </button>
        </div>
      )}

      {/* LOCATION SELECTOR MODAL */}
      {showSelector && (
        <LocationSelector
          onClose={() => setShowSelector(false)}
          onCitySelect={handleCitySelect}
        />
      )}
      {/* Sign Modal */}
      {showSign && ( 
           <SignModal closethemodal={()=>SetShowSign(false)}  />
        )
      }
      {/* SideBarModal */}
      
      {sidebar && (
        <SideBarModal/>
      )

      }
     

      {/* MOBILE SEARCH BAR (SHOW ON md and smaller when showInput is true) */}
      {showInput && (
        <div className="md:hidden w-full px-4 py-2 flex items-center gap-2 bg-white shadow-sm sticky top-0 z-50">
          <FaChevronLeft
            onClick={() => setShowInput(false)}
            className="text-gray-500 text-lg cursor-pointer"
          />
          <input
            type="text"
            placeholder="Search for Movies, Events, Plays..."
            className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            autoFocus
          />
          <button
            onClick={() => setShowInput(false)}
            className="text-gray-700 text-xl font-bold px-2"
          >
            ×
          </button>
        </div>
      )}

      {/* MOBILE HEADER (only if not showing search input) */}
      {!showInput && (
        <div className="flex md:hidden justify-between items-start p-3">
          <div>
            <h1
              style={{ fontFamily: 'sans-serif' }}
              className="font-bold text-[20px] text-gray-700"
            >
              It's All Start Here!
            </h1>
            <div className="flex items-center mt-1">
              <h1
                onClick={() => setShowSelector(!showSelector)}
                className="text-red-700 text-sm cursor-pointer"
              >
                {selectedCity}
              </h1>
              <FaChevronRight className="text-xs text-red-400 ml-1 mt-[2px]" />
            </div>
          </div>

          <div className="flex items-center space-x-3 mt-2">
            <button className="rounded border border-gray-400 h-[28px] w-[60px] text-[12px]">
              UseApp
            </button>
            <FaSearch
              onClick={() => setShowInput(true)}
              className="text-gray-500 text-[20px] cursor-pointer"
            />
          </div>
        </div>
      )}
<div className='md:hidden overflow-x-auto whitespace-nowrap  p-1 m-2'>
  <div className='inline-flex gap-4'>
    {items.map((item, index) => (
      <div key={index} className='flex flex-col items-center min-w-[60px]'>
   <Link to={'/movie'}>     <i className={`fa-solid ${item.icon}  text-gray-700`}></i></Link>
        <div>{item.label}</div>
      </div>
    ))}
  </div>
</div>





      
    </>
  );
}

export default Header;
