import React from 'react';
import { FaHome } from 'react-icons/fa';
import customercare from '../assets/logofooter/image-removebg-preview.png';
import ticket from '../assets/logofooter/image2-removebg-preview.png';
import messaging from '../assets/logofooter/image3-removebg-preview.png';
import logo from '../assets/logofooter/imagef-removebg-preview.png';
import { useCity } from '../Context/CityContext';

function Footer() {
  const { selectedCity } = useCity();

  return (
    // 👇 Footer is hidden on small screens and only visible on md and up
    <div className=" px-30 hidden sm:hidden md:block bg-[#333338] text-white">
      
      {/* Top Banner Section */}
      <div className="px-6 pt-5 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <FaHome className="text-4xl" />
          <h1 className="flex-1 ml-4 text-sm">
            <span className="font-bold mr-2">List your show</span>
            Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow
          </h1>
          <button className="bg-[#ff4e6e] px-4 py-2 rounded text-sm">Contact Today!</button>
        </div>
      </div>

      {/* Logo Icons Section */}
      <div className="bg-[#404046] w-full px-6 py-4 flex justify-center md:justify-between gap-8 flex-wrap">
        <img src={customercare} alt="Customer Care" className="w-[110px]" />
        <img src={ticket} alt="Tickets" className="w-[170px]" />
        <img src={messaging} alt="Messaging" className="w-[180px]" />
      </div>

      {/* Info Paragraph Section */}
      <div className="px-6 text-gray-400 text-sm space-y-4 py-6">
        {[
          `Movies Now Showing in ${selectedCity}`,
          `Upcoming Movies in ${selectedCity}`,
          "Movie Updates and Celebrities",
          "Movies Per Week",
          "Movies by Genres",
          "Upcoming Movies by Genres",
          "Movies by Language",
          "Movies by Format",
          "Upcoming Movies by Format",
          "Movies in Top Cities",
          "Cinemas in Top Cities",
          "Countries",
          "Help",
        ].map((heading, index) => (
          <div key={index}>
            <h1 className="font-medium">{heading}</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga ex, quas similique sapiente ad
              libero possimus voluptatibus voluptatum!
            </p>
          </div>
        ))}
      </div>

      {/* Divider with Logo */}
      <div className="flex items-center w-full p-2">
        <hr className="flex-grow border-gray-600" />
        <img src={logo} alt="BookMyShow Logo" className="mx-10 h-[40px]" />
        <hr className="flex-grow border-gray-600" />
      </div>

      {/* Social Media Icons */}
      <div className="mt-5">
        <div className="flex justify-center space-x-8 text-gray-400">
          <div className="hover:text-white"><i className="fa-brands fa-facebook fa-2x"></i></div>
          <div className="hover:text-white"><i className="fa-brands fa-x-twitter fa-2x"></i></div>
          <div className="hover:text-white"><i className="fa-brands fa-instagram fa-2x"></i></div>
          <div className="hover:text-white"><i className="fa-brands fa-youtube fa-2x"></i></div>
          <div className="hover:text-white"><i className="fa-brands fa-pinterest fa-2x"></i></div>
          <div className="hover:text-white"><i className="fa-brands fa-linkedin fa-2x"></i></div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-5 text-center text-gray-400 text-xs px-4 pb-6">
        <p>© 2025 Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
        <p className="pt-2">
          The content and images used on this site are copyright protected and copyrights vest with the respective
          owners. The usage of the content and images on this website is intended to promote the works and no
          endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
        </p>
      </div>
    </div>
  );
}

export default Footer;
