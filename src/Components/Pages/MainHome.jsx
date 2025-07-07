import React, { useRef } from 'react';
import Header from '../Header';
import Banner from '../Banner';
import movieData from '../Datas.json';
import eventData from '../EventData.json'; // ✅ Import your event data
import MovieCard from '../MovieCard';
import EventCard from '../EventCards'; // ✅ Correct import
import Footer from '../Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../Pages/MainHome.css';
import { useNavigate } from 'react-router-dom';

function MainHome() {
  const scrollRef = useRef(null);     // For movie scroll
  const scrollRef2 = useRef(null);    // For event scroll
  const navigate = useNavigate();

  const allMovies = movieData
    .map(item => item?.movie)
    .filter(movie => movie && typeof movie === 'object');

  const recommendedMovies = allMovies.filter(movie => movie.type === 'RecommendedMovie');

  const eventList = eventData?.event || []; // ✅ Get array from event.json

  const scroll = (direction, ref) => {
    const container = ref?.current;
    if (container) {
      const scrollAmount = 500;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Header />
      <Banner />

      {/* ✅ Recommended Movies */}
      <div className="md:px-30 mt-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-[25px] font-bold ml-2">Recommended Movies</h2>
          <button className="text-[18px] text-red-500 mr-2">See All</button>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left', scrollRef)}
            className="hidden md:flex absolute left-[14px] top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-white rounded-full p-2 shadow"
          >
            <ChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto md:overflow-x-hidden scroll-smooth px-2 md:px-10 py-2 scrollbar-hide space-x-4 md:space-x-18"
          >
            {recommendedMovies.map((movie) => (
              <div
                key={movie.id}
                className="flex-shrink-0 w-[28vw] max-w-[200px] md:w-[200px]"
              >
                <MovieCard
                  movie={movie}
                  onClick={() => navigate(`/movie/${movie.id}`)}
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right', scrollRef)}
            className="hidden md:flex absolute right-[-15px] top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-white rounded-full p-2 shadow"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* ✅ Events Section */}
     {/* ✅ Events Section */}
{/* ✅ Events Section */}
<div className="md:px-30 mt-10">
  <div className="flex justify-between items-center mb-3">
    <h2 className="text-[25px] font-bold ml-2">Upcoming Events</h2>
    <button className="text-[18px] text-red-500 mr-2">See All</button>
  </div>

  <div className="relative mb-5">
    <button
      onClick={() => scroll('left', scrollRef2)}
      className="hidden md:flex absolute left-[14px] top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-white rounded-full p-2 shadow"
    >
      <ChevronLeft />
    </button>

    <div
      ref={scrollRef2}
      className="flex overflow-x-auto md:overflow-x-hidden scroll-smooth px-2 md:px-10 py-2 scrollbar-hide space-x-4 md:space-x-18"
    >
      {eventList.map((event) => (
        <div
          key={event.id}
          className="flex-shrink-0 w-[28vw] max-w-[200px] md:w-[200px]"
        >
          <EventCard event={event} />
        </div>
      ))}
    </div>

    <button
      onClick={() => scroll('right', scrollRef2)}
      className="hidden md:flex absolute right-[-15px] top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-white rounded-full p-2 shadow"
    >
      <ChevronRight />
    </button>
  </div>
</div>



      <Footer />
    </>
  );
}

export default MainHome;
