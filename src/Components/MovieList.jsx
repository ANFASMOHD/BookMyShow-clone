import React from 'react';
import MovieCard from './MovieCard';
import movieData from './Datas.json';
import { ChevronRight } from 'lucide-react';
import Langauges from './Button/Langauges';
import Genres from './Button/Genres';
import Format from './Button/Format';
import ButtoLanguage from './Button/ButtoLanguage';
import Banner from './Banner';
import { useCity } from '../Context/CityContext';
import FAQ from './FAQ';
import { useNavigate } from 'react-router-dom';

function MovieList() {
  const navigate = useNavigate();
  const [isUpcomingView, setIsUpcomingView] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState('All');

  const { selectedCity } = useCity();

  // ✅ Safely map and filter only valid movies
  const allMovies = movieData
    .map(item => item?.movie)
    .filter(movie => movie && movie.id);

  const sortedMovies = allMovies
    .filter(movie => (isUpcomingView ? movie.status === 'upcomingMovies' : true))
    .sort((a, b) => {
      if (selectedLanguage === 'All') return 0;
      const aMatches = a.language.includes(selectedLanguage);
      const bMatches = b.language.includes(selectedLanguage);
      return (bMatches ? 1 : 0) - (aMatches ? 1 : 0);
    });

  return (
    <>
      {!isUpcomingView && <Banner />}

      {/* DESKTOP */}
      <div className="hidden md:block bg-gray-100 px-[120px] py-[60px]">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <h1 className="text-2xl font-bold p-3">Filters</h1>
            <Langauges
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
            <Genres />
            <Format />
            <div className="m-4">
              <button className="w-[288px] h-[37px] border-2 border-red-300 rounded text-red-500">
                Browse by Cinemas
              </button>
            </div>
          </div>

          <div className="col-span-9">
            <h1 className="text-2xl font-bold p-3">
              {isUpcomingView ? 'Upcoming Movies in' : 'Movies in'} {selectedCity}
            </h1>

            <ButtoLanguage
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />

            <div
              onClick={() => setIsUpcomingView(prev => !prev)}
              className="flex justify-between items-center bg-white p-8 mt-6 mb-[30px] rounded-[10px] cursor-pointer hover:bg-gray-200 transition"
            >
              <h1 className="font-bold text-[20px]">
                {isUpcomingView ? 'Now Showing' : 'Coming Soon'}
              </h1>
              <h1 className="text-red-500">
                {isUpcomingView ? 'Back to Now Showing Movies' : 'Explore Upcoming Movies'}
              </h1>
            </div>

            <div className="flex flex-wrap gap-6">
              {sortedMovies.map(movie => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={() => navigate(`/movie/${movie.id}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <div className="m-4">
          <button
            onClick={() => setIsUpcomingView(prev => !prev)}
            className="bg-red-500 text-white w-full rounded px-5 py-4 flex items-center justify-between shadow-md hover:bg-red-600 transition duration-300"
          >
            <span className="font-semibold">
              {isUpcomingView ? 'Now Showing' : 'Coming Soon'}{' '}
              <span className="font-normal">
                {isUpcomingView ? 'Back to Movies' : 'Explore Upcoming Movies'}
              </span>
            </span>
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="px-4">
          <ButtoLanguage
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 px-4 pb-10">
          {sortedMovies.map(movie => (
            <div key={movie.id}>
              <MovieCard
                movie={movie}
                onClick={() => navigate(`/movie/${movie.id}`)}
              />
            </div>
          ))}
        </div>
      </div>

      <FAQ />
    </>
  );
}

export default MovieList;
