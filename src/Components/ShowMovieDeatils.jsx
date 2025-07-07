import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movieData from './Datas.json';
import Header from './Header';
import Footer from './Footer';
import { Star, ThumbsUp } from 'lucide-react';

function ShowMovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const allMovies = movieData.map(item => item.movie);
  const movie = allMovies.find(m => m.id === id);

  if (!movie) {
    return <div className="text-center p-10 text-red-500 text-xl">Movie not found</div>;
  }

  return (
    <>
      <Header />
   
      <div className="flex flex-col md:flex-row  items-start gap-6 bg-[#1c1c1c]  shadow-xl px-30 p-2 ">
  {/* Poster */}
  <div className="w-full md:w-[250px] flex-shrink-0">
    <div className="relative">
      <img
        src={movie.posters?.card || movie.posters?.banner}
        alt={movie.title}
        className="w-full rounded-xl shadow-md"
      />
      <span className="absolute bottom-0 w-full text-center bg-black/80 text-xs py-1 rounded-b-xl">
        In cinemas
      </span>
    </div>
  </div>

  {/* Details */}
  <div className="flex-1 text-white">
    <h1 className="text-3xl md:text-4xl font-bold">{movie.title}</h1>

    {/* Rating Row */}
    <div className="flex items-center gap-4 mt-2">
      <div className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full">
        <Star size={16} className="text-red-500 fill-red-500" />
        <span className="text-sm font-semibold">{movie.rating?.value?.toFixed(1)}/10</span>
        <span className="text-xs text-gray-400">({movie.rating?.votes} Votes)</span>
      </div>
      <button className="bg-white text-black text-sm font-semibold px-3 py-1 rounded-full shadow hover:bg-gray-200">
        Rate now
      </button>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mt-4">
      <span className="px-2 py-1 bg-gray-700 text-xs rounded">2D</span>
      {movie.language?.map((lang, i) => (
        <span key={i} className="px-2 py-1 bg-gray-700 text-xs rounded">{lang}</span>
      ))}
    </div>

    {/* Meta info */}
    <p className="text-sm text-gray-400 mt-2">
      {movie.duration} • {movie.genres?.join(', ')} • {movie.certificate} • {movie.releaseDate}
    </p>

    {/* Button */}
    <button className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow">
      Book tickets
    </button>
  </div>
</div>
<div className='px-6 md:px-30 sm:px-30 mb-[60px]'>
  {movie.about?.length > 0 && (
    <>
      <h2 className="text-2xl font-bold mt-10 mb-4">About this movie</h2>
      <p className="text-md text-gray-900 leading-relaxed">{movie.about}</p>
    </>
  )}
</div>
<hr className='text-gray-400' />


            {/* CAST */}
  <div className="px-6 md:px-30 mb-[60px]">
  {movie.cast?.length > 0 && (
    <>
      <h2 className="text-2xl font-bold mt-10 mb-6">Cast</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6  place-items-center">
        {movie.cast.map((actor, i) => (
          <div key={i} className="text-center">
            <img
              src={actor.image || 'https://via.placeholder.com/100'} // fallback image
              alt={actor.name}
              className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-full  border border-gray-300 shadow-sm"
            />
            <h3 className="mt-3 text-sm font-semibold text-black dark:text-white">{actor.name}</h3>
            <p className="text-sm text-gray-500">as {actor.role}</p>
          </div>
        ))}
      </div>
    </>
  )}
</div>
<hr className='text-gray-400 ' />

     {/* CREW */}
<div className="px-6 md:px-30 mb-[60px]">
  {movie.crew?.length > 0 && (
    <>
      <h2 className="text-2xl font-bold mt-10 mb-6">Crew</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 place-items-center">
        {movie.crew.map((person, i) => (
          <div key={i} className="text-center">
            <img
              src={person.image || 'https://via.placeholder.com/100'} // fallback if no image
              alt={person.name}
              className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-full border border-gray-300 shadow-sm"
            />
            <h3 className="mt-3 text-sm font-semibold text-black dark:text-white">{person.name}</h3>
            <p className="text-sm text-gray-500">{person.role}</p>
          </div>
        ))}
      </div>
    </>
  )}
</div>
<hr className='text-gray-400' />

            {/* TOP REVIEWS */}
         {movie.reviews?.topReviews?.length > 0 && (
  <div className="px-6 md:px-30 mt-10">
    <h2 className="text-2xl font-semibold mb-4">Top Reviews</h2>

    {/* Tags Summary */}
    {movie.reviews.summaryTags && (
      <div className="mb-6 flex flex-wrap gap-2">
        {Object.entries(movie.reviews.summaryTags).map(([tag, count], i) => (
          <span
            key={i}
            className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full font-medium"
          >
            {tag} <span className="bg-white text-gray-700 ml-2 px-2 py-0.5 rounded text-xs">{count}</span>
          </span>
        ))}
      </div>
    )}


    {/* Reviews List */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[40px] ">
      {movie.reviews.topReviews.map((review, i) => (
        <div
          key={i}
          className="bg-white text-black dark:bg-gray-800 dark:text-white border rounded-lg p-4 shadow-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm text-white">
                👤
              </div>
              <div>
                <p className="text-sm font-semibold">{review.user}</p>
                <p className="text-xs text-gray-500">Booked on book<span className="text-red-500 font-bold">my</span>show</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-red-500">
              <Star size={16} className="fill-current" />
              <span className="text-sm font-bold">{review.rating}/10</span>
            </div>
          </div>

          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{review.content}</p>

          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <ThumbsUp size={14} /> {review.likes}
            </div>
            <span>{review.daysAgo} Days ago</span>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

      
 
      <Footer />
    </>
  );
}

export default ShowMovieDetails;
