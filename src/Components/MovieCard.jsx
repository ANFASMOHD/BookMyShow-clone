import React from 'react';
import { Star } from 'lucide-react';

function MovieCard({ movie, onClick }) {
  return (
    <div
      onClick={onClick} // ✅ Make card clickable
      className="w-[165px] md:w-[220px] h-[340px] md:h-[390px] rounded-lg overflow-hidden cursor-pointer mt-5 shadow hover:shadow-lg transition duration-300"
    >
      <div className="relative h-[250px] md:h-[320px]">
        <img
          src={movie.posters.card}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm flex items-center justify-between px-2 py-1">
          <div className="flex items-center gap-1">
            <Star size={14} className="text-red-500 fill-red-500" />
            <span className="font-semibold">{movie.rating.value.toFixed(1)}/10</span>
          </div>
          <span className="text-xs">{movie.rating.votes}</span>
        </div>
      </div>

      <div className="p-2 h-[90px] md:h-[70px] flex flex-col justify-between">
        <h2 className="text-base font-bold leading-snug line-clamp-2">{movie.title}</h2>
        <p className="text-xs text-gray-600">{movie.certificate}</p>
        <p className="text-xs text-gray-500 truncate">{movie.language.join(', ')}</p>
      </div>
    </div>
  );
}

export default MovieCard;
