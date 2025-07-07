// src/components/EventCard.jsx
import React from 'react';
import { Calendar, Clock, Star } from 'lucide-react';

function EventCard({ event, onClick }) {
  if (!event || typeof event !== 'object') return null;

  const {
    poster = '/default-poster.jpg',
    title = 'Untitled Event',
    interested = '0',
    availability = 'Unavailable',
    date = 'TBD',
    time = 'TBD',
    venue = 'Not specified',
  } = event;

  return (
    <div
      onClick={onClick}
      className="w-[165px] md:w-[200px] h-[300px] md:h-[360px] rounded-lg overflow-hidden cursor-pointer mt-3 shadow hover:shadow-md transition duration-300 bg-white"
    >
      {/* Poster */}
      <div className="relative h-[220px] md:h-[240px]">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Footer Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs flex items-center justify-between px-2 py-1">
          <div className="flex items-center gap-1">
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs">{interested}</span>
          </div>
          <span className="text-[10px] text-green-300">{availability}</span>
        </div>
      </div>

      {/* Details */}
      <div className="p-2 flex flex-col gap-1">
        <h2 className="text-sm font-semibold line-clamp-2 text-gray-900">
          {title}
        </h2>

        <p className="text-xs text-gray-600 flex items-center gap-1">
          <Calendar size={12} /> {date.split(' - ')[0]}
        </p>

        <p className="text-xs text-gray-500 flex items-center gap-1">
          <Clock size={12} /> {time}
        </p>

        <p className="text-[10px] text-gray-400 truncate">{venue}</p>
      </div>
    </div>
  );
}

export default EventCard;
