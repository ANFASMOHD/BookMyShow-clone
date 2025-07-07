import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import MainHome from './Components/Pages/MainHome';
import ShowMovieDetails from './Components/ShowMovieDeatils'; // ✅ Fix filename typo

function App() {
  return (
    <Routes>
      <Route path='/movie' element={<Home />} />
      <Route path='/' element={<MainHome />} />
      <Route path='/movie/:id' element={<ShowMovieDetails />} />
    </Routes>
  );
}

export default App;
